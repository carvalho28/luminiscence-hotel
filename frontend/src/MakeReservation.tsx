import {
  Center,
  Container,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Spinner,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { Layout } from "./components/Layout";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import { serverUrl } from "./App";
import { BadgeRoom } from "./components/BadgeRoom";
import { useNavigate } from "react-router-dom";

export default function MakeReservation() {
  const navigate = useNavigate();

  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const getDatesFromPicker = () => {
    // let dates: Date[] = [];
    console.log(dateRange);
    const startDate = dateRange[0].startDate.toLocaleDateString();
    const endDate = dateRange[0].endDate.toLocaleDateString();
    console.log(startDate);
    console.log(endDate);
    // startDate = startDate,
    // endDate = addDays(endDate, 1);
    // add 1 to both dates because the dateRange[0].startDate is the day before the actual start date
    // console.log(startDate.toISOString().slice(0, 10));
    // console.log(endDate.toISOString().slice(0, 10));
  };

  useEffect(() => {
    getDatesFromPicker();
  }, [dateRange]);

  const convertDate = (date: string) => {
    const parts = date.split("/");
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];

    const dateStr = `${year}-${month}-${day}`;

    return dateStr;
  };

  const getAvailableRooms = async () => {
    fetch(`${serverUrl}/room/available`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startDate: convertDate(dateRange[0].startDate.toLocaleDateString()),
        endDate: convertDate(dateRange[0].endDate.toLocaleDateString()),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const getRooms7Days = async () => {
      try {
        await getAvailableRooms();
      } catch (e) {
        console.log(e);
      }
    };
    getRooms7Days();
  }, []);

  useEffect(() => {
    const getRoomsSelectedDates = async () => {
      try {
        await getAvailableRooms();
      } catch (e) {
        console.log(e);
      }
    };
    getRoomsSelectedDates();
  }, [dateRange]);

  useEffect(() => {}, [rooms]);

  const handleRoomClick = (room_id: number, room_price: number) => {
    const state = {
      room_id: room_id,
      price: room_price,
      start_date: convertDate(dateRange[0].startDate.toLocaleDateString()),
      end_date: convertDate(dateRange[0].endDate.toLocaleDateString()),
    };
    console.log(state);
    navigate("/reservation", { state: state });
  };

  return (
    <Layout selected="Make Reservation">
      <Container maxW="container.xl" mt="10">
        <Center>
          <Text fontSize="4xl" as="b">
            Rooms
          </Text>
        </Center>

        <Center mt={"4"}>
          <Text mt={"10"} fontSize={"xl"} as="b">
            Select a date
          </Text>
        </Center>
        <Center mt={"10"} mb={"10"}>
          <DateRange
            onChange={(item: any) => setDateRange([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={dateRange}
            direction="horizontal"
            minDate={new Date()}
            maxDate={addDays(new Date(), 365)}
          />
        </Center>

        {dateRange[0].startDate && dateRange[0].endDate && (
          <>
            <Center mt={"10"}>
              <Text fontSize={"xl"} as="b">
                Available Rooms
              </Text>
            </Center>
            <Center mt={"10"} mb={"10"}>
              <Box
                w="100%"
                rounded={"sm"}
                // mx={[0, 5]}
                px={"10"}
                overflow={"hidden"}
                bg="white"
                border={"1px"}
                borderColor="black"
                boxShadow={useColorModeValue(
                  "6px 6px 0 black",
                  "6px 6px 0 cyan"
                )}
              >
                <Center mt={"5"} mb={"5"}>
                  {isLoading && (
                    <Center>
                      <Spinner size="xl" />
                    </Center>
                  )}
                  <TableContainer width={"100%"}>
                    <Table variant="simple" size={"md"}>
                      <Thead>
                        <Tr>
                          <Th>Room Number</Th>
                          <Th>Room Type</Th>
                          <Th isNumeric>Price</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {rooms.map((room: any) => (
                          <Tr
                            onClick={() =>
                              handleRoomClick(room.room_id, room.price)
                            }
                            _hover={{ cursor: "pointer", bg: "gray.100" }}
                            key={room.room_id}
                          >
                            <Td>{room.room_id}</Td>
                            <Td>
                              <BadgeRoom room_type={room.room_type} />
                            </Td>
                            <Td isNumeric>{room.price}</Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </Center>
              </Box>
            </Center>
          </>
        )}
      </Container>
    </Layout>
  );
}
