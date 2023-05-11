import {
    Center, Container, Text, Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from "@chakra-ui/react";
import {Layout} from "./components/Layout";
import {DateRange} from 'react-date-range';
import {addDays} from 'date-fns';
import {useEffect, useState} from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import {serverUrl} from "./App";
import {BadgeRoom} from "./components/BadgeRoom"; // theme css file

export default function Rooms() {

    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);

    const [rooms, setRooms] = useState([]);

    const getDatesFromPicker = () => {
        // let dates: Date[] = [];
        let startDate = dateRange[0].startDate;
        let endDate = dateRange[0].endDate;
        console.log(startDate, endDate);
    }

    useEffect(() => {
        getDatesFromPicker();
    }, [dateRange])

    useEffect(() => {
        fetch(`${serverUrl}/room`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRooms(data);
            })
    }, []);

    return (
        <Layout>
            <Container maxW="container.xl" mt="10">
                <Center>
                    <Text fontSize="3xl" as="b">
                        Rooms
                    </Text>
                </Center>

                <Text mt={"10"} fontSize={"xl"}>Select a date</Text>
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
                        <Text fontSize={"xl"}>Available Rooms</Text>
                        <Center mt={"10"} mb={"10"}>
                            <TableContainer width={"75%"}>
                                <Table variant='simple' size={"sm"}>
                                    <Thead>
                                        <Tr>
                                            <Th>Room Number</Th>
                                            <Th>Room Type</Th>
                                            <Th isNumeric>Price</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {rooms.map((room: any) => (
                                            <Tr>
                                                <Td>{room.room_id}</Td>
                                                <Td>
                                                    <BadgeRoom room_type={room.room_type}/>
                                                </Td>
                                                <Td isNumeric>{room.price}</Td>
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </Center>
                    </>
                )}

            </Container>
        </Layout>
    )
}