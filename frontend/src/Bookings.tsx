
import {Layout} from "./components/Layout";
import {Center, Container, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr} from "@chakra-ui/react";

const bookings = [
    {
        reservation_id: 1,
        room_id: 1,
        start_date: "2021-06-01",
        end_date: "2021-06-05"
    },
    {
        reservation_id: 2,
        room_id: 2,
        start_date: "2021-06-01",
        end_date: "2021-06-05"
    },
]

export default function Bookings() {
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
                                <Th>Room Number</Th>
                                <Th>Check In</Th>
                                <Th>Check Out</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {bookings.map((room: any) => (
                                <Tr _hover={{cursor: "pointer", bg: "gray.100"}} key={room.room_id}>
                                    <Td>{room.reservation_id}</Td>
                                    <Td>
                                        {room.room_id}
                                    </Td>
                                    <Td>
                                        {room.start_date}
                                    </Td>
                                    <Td>
                                        {room.end_date}
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