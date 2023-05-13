import {Layout} from "./components/Layout";
import {
    Center,
    Container,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {serverUrl} from "./App";

export default function Bookings() {

    const [bookings, setBookings] = useState([]);

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


    return (
        <Layout selected="Bookings">
            {/* render all the rooms */}
            <Container maxW="container.xl" mt="10">
                <Center>
                    <Text fontSize="3xl" as="b">
                        Bookings
                    </Text>
                </Center>

                <Center mt={"10"} mb={"10"}>

                    <TableContainer width={"75%"}>
                        <Table variant='simple' size={"sm"}>
                            <Thead>
                                <Tr>
                                    <Th>Reservation ID</Th>
                                    <Th>Check In</Th>
                                    <Th>Check Out</Th>
                                    <Th>Room Number</Th>
                                    <Th>Customer ID</Th>
                                    <Th>Customer Name</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {bookings.map((booking: any) => (
                                    <Tr _hover={{cursor: "pointer", bg: "gray.100"}} key={booking.reservation_id}>
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
            </Container>
        </Layout>
    )
}