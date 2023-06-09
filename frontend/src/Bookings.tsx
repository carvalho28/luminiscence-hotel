import { Layout } from "./components/Layout";
import {
  Center,
  Checkbox,
  Container,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Button,
  Spinner,
  Img,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { serverUrl } from "./App";
import { verifyAuth } from "./auth/Authenticator";
import { useNavigate } from "react-router-dom";

type Booking = {
  reservation_id: number;
  start_date: string;
  end_date: string;
  room_number: number;
  customer_id: number;
  name: string;
};

export default function Bookings() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [reservationIds, setReservationIds] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  const [showSpinner, setShowSpinner] = useState(false);
  const [showSpinnerLoading, setShowSpinnerLoading] = useState(false);

  useEffect(() => {
    setShowSpinnerLoading(true);
    fetch(`${serverUrl}/reservation/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setBookings(data);
        setShowSpinnerLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const deleteRoom = async () => {
    setShowSpinner(true);
    console.log(reservationIds.map((id: number) => id.toString()));
    fetch(`${serverUrl}/reservation/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(reservationIds.map((id: number) => id.toString())),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setShowSpinner(false);
        // remove the deleted rooms from the list
        setBookings(
          bookings.filter(
            (booking: Booking) =>
              !reservationIds.includes(booking.reservation_id)
          )
        );
        setSelectAllChecked(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    if (!verifyAuth()) {
      navigate("/");
    }
  }, []);

  return (
    <Layout selected="Marcações">
      {/* render all the rooms */}
      <Container maxW="container.xl" mt="10">
        <Center>
          <Text fontSize="3xl" as="b">
            Marcações
          </Text>
        </Center>

        {reservationIds.length !== 0 ? (
          <Center mt={"10"} mr={"735"} mb={"3"}>
            {/*delete button*/}
            <Button
              colorScheme="red"
              variant="outline"
              size="sm"
              onClick={() => {
                deleteRoom();
              }}
            >
              {" "}
              Eliminar
            </Button>
            {showSpinner ? <Spinner ml={"3"} size="sm" /> : <></>}
          </Center>
        ) : (
          <Center mt={"10"}></Center>
        )}

        <Center>
          <Box
            w="90%"
            rounded={"sm"}
            // mx={[0, 5]}
            p={"10"}
            overflow={"hidden"}
            bg="white"
            border={"1px"}
            borderColor="black"
            boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
          >
            <Center>
              {showSpinnerLoading && <Spinner size="xl" />}
              <TableContainer width={"100%"}>
                <Table variant="simple" size={"md"}>
                  <Thead>
                    <Tr>
                      <Th>
                        <Checkbox
                          colorScheme="blue"
                          defaultChecked={false}
                          isChecked={selectAllChecked}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectAllChecked(true);
                              setReservationIds(
                                bookings.map(
                                  (booking: Booking) => booking.reservation_id
                                )
                              );
                            } else {
                              setSelectAllChecked(false);
                              setReservationIds([]);
                            }
                          }}
                        />
                      </Th>
                      <Th>ID da Reserva</Th>
                      <Th>Check In</Th>
                      <Th>Check Out</Th>
                      <Th>Número do Quarto</Th>
                      <Th>NIF do Client</Th>
                      <Th>Nome do Client</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {bookings.map((booking: Booking) => (
                      <Tr
                        _hover={{ cursor: "pointer", bg: "gray.100" }}
                        key={booking.reservation_id}
                      >
                        <Td>
                          <Checkbox
                            colorScheme="blue"
                            defaultChecked={false}
                            isChecked={
                              selectAllChecked ||
                              reservationIds.includes(booking.reservation_id)
                            }
                            onChange={(e) => {
                              if (e.target.checked) {
                                setReservationIds([
                                  ...reservationIds,
                                  booking.reservation_id,
                                ]);
                                if (selectAllChecked) {
                                  setSelectAllChecked(false);
                                }
                              } else {
                                setReservationIds(
                                  reservationIds.filter(
                                    (id) => id !== booking.reservation_id
                                  )
                                );
                                if (selectAllChecked) {
                                  setSelectAllChecked(false);
                                }
                              }
                            }}
                          />
                        </Td>
                        <Td>{booking.reservation_id}</Td>
                        <Td>{booking.start_date}</Td>
                        <Td>{booking.end_date}</Td>
                        <Td>{booking.room_number}</Td>
                        <Td>{booking.customer_id}</Td>
                        <Td>{booking.name}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Center>
          </Box>
        </Center>
        <Center mt={"20"}>
          <Box p={4} w="50%">
            <Img
              src={
                "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
              roundedTop={"sm"}
              objectFit="cover"
              h="full"
              w="auto"
              alt={"Blog Image"}
            />
          </Box>
        </Center>
      </Container>
    </Layout>
  );
}
