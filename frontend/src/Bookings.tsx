import {Layout} from "./components/Layout";
import {
    Center, Checkbox,
    Container,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    Button, Spinner, Img, Box
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {serverUrl} from "./App";

type Booking = {
    reservation_id: number,
    start_date: string,
    end_date: string,
    room_number: number,
    customer_id: number,
    name: string,
}

export default function Bookings() {

    const [bookings, setBookings] = useState<Booking[]>([]);
    const [reservationIds, setReservationIds] = useState([]);
    const [selectAllChecked, setSelectAllChecked] = useState(false);

    const [showSpinner, setShowSpinner] = useState(false);

    useEffect(() => {
        fetch(`${serverUrl}/reservation/all`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                    setBookings(data);
                }
            )
            .catch((error) => {
                    console.error('Error:', error);
                }
            );
    }, []);

    const deleteRoom = async () => {
        setShowSpinner(true);
        console.log(reservationIds.map((id: number) => id.toString()));
        fetch(`${serverUrl}/reservation/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                reservationIds.map((id: number) => id.toString())
            )
        })
            .then(response => response.json())
            .then(data => {
                    console.log(data);
                    setShowSpinner(false);
                    // remove the deleted rooms from the list
                    setBookings(bookings.filter((booking: Booking) => !reservationIds.includes(booking.reservation_id)));
                    setSelectAllChecked(false);
                }
            )
            .catch((error) => {
                    console.error('Error:', error);
                }
            );
    }

    useEffect(() => {
        console.log(reservationIds);
        console.log(selectAllChecked);
    }, [reservationIds, selectAllChecked]);

    return (
        <Layout selected="Bookings">
            {/* render all the rooms */}
            <Container maxW="container.xl" mt="10">
                <Center>
                    <Text fontSize="3xl" as="b">
                        Bookings
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
                        > Delete
                        </Button>
                        {showSpinner ? (
                            <Spinner ml={"3"} size="sm"/>
                        ) : (
                            <></>
                        )}
                    </Center>
                ) : (
                    <Center mt={"10"}></Center>
                )}

                <Center>
                    <TableContainer width={"75%"}>
                        <Table variant='simple' size={"sm"}>
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
                                                    setReservationIds(bookings.map((booking: Booking) => booking.reservation_id));
                                                } else {
                                                    setSelectAllChecked(false);
                                                    setReservationIds([]);
                                                }
                                            }
                                            }/>
                                    </Th>
                                    <Th>Reservation ID</Th>
                                    <Th>Check In</Th>
                                    <Th>Check Out</Th>
                                    <Th>Room Number</Th>
                                    <Th>Customer ID</Th>
                                    <Th>Customer Name</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {bookings.map((booking: Booking) => (
                                    <Tr _hover={{cursor: "pointer", bg: "gray.100"}} key={booking.reservation_id}>
                                        <Td>
                                            <Checkbox
                                                colorScheme="blue"
                                                defaultChecked={false}
                                                isChecked={selectAllChecked || reservationIds.includes(booking.reservation_id)}
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        setReservationIds([...reservationIds, booking.reservation_id]);
                                                        if (selectAllChecked) {
                                                            setSelectAllChecked(false);
                                                        }
                                                    } else {
                                                        setReservationIds(reservationIds.filter((id) => id !== booking.reservation_id));
                                                        if (selectAllChecked) {
                                                            setSelectAllChecked(false);
                                                        }
                                                    }
                                                }
                                                }/>
                                        </Td>
                                        <Td>{booking.reservation_id}</Td>
                                        <Td>
                                            {booking.start_date}
                                        </Td>
                                        <Td>
                                            {booking.end_date}
                                        </Td>
                                        <Td>
                                            {booking.room_number}
                                        </Td>
                                        <Td>
                                            {booking.customer_id}
                                        </Td>
                                        <Td>
                                            {booking.name}
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
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
    )
}