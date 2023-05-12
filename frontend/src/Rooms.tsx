import {
    Center, Container, Text, Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer, Spinner,
} from "@chakra-ui/react";
import {Layout} from "./components/Layout";
import {DateRange} from 'react-date-range';
import {addDays} from 'date-fns';
import {useEffect, useState} from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import {serverUrl} from "./App";
import {BadgeRoom} from "./components/BadgeRoom";
import {useNavigate} from "react-router-dom";

export default function Rooms() {
    const navigate = useNavigate();

    const [rooms, setRooms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);

    const getDatesFromPicker = () => {
        // let dates: Date[] = [];
        let startDate = dateRange[0].startDate;
        let endDate = dateRange[0].endDate;
        console.log(startDate, endDate);

    }

    useEffect(() => {
        getDatesFromPicker();
    }, [dateRange]);

    const getAvailableRooms = async () => {
        console.log(JSON.stringify({
            startDate: (dateRange[0].startDate).toISOString().slice(0, 10),
            endDate: (dateRange[0].endDate).toISOString().slice(0, 10),
        }));
        fetch(`${serverUrl}/room/available`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                startDate: (dateRange[0].startDate).toISOString().slice(0, 10),
                endDate: (dateRange[0].endDate).toISOString().slice(0, 10),
            })
        })
            .then(res => res.json())
            .then(data => {
                setRooms(data);
                setIsLoading(false);
            })
    }

    useEffect(() => {
        const getRooms7Days = async () => {
            try {
                await getAvailableRooms();
            }
            catch (e) {
                console.log(e);
            }
        }
        getRooms7Days();
    }, []);

    useEffect(() => {
        const getRoomsSelectedDates = async () => {
            try {
                await getAvailableRooms();
            }
            catch (e) {
                console.log(e);
            }
        }
        getRoomsSelectedDates();
    }, [dateRange]);

    useEffect(() => {

    }, [rooms]);

    const handleRoomClick = (room_id: number, room_price: number) => {
        const state = {
            room_id: room_id,
            price: room_price,
            start_date: (dateRange[0].startDate).toString(),
            end_date: (dateRange[0].endDate).toString(),
        };
        console.log(state);
        navigate('/reservation', {state: state});
    }

    return (
        <Layout selected="Rooms">
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
                        {isLoading && (
                            <Center>
                                <Spinner size="xl"/>
                            </Center>
                        )}
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
                                            <Tr onClick={() => handleRoomClick(room.room_id, room.price)}
                                                _hover={{cursor: "pointer", bg: "gray.100"}}
                                                key={room.room_id}>
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