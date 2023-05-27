import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Layout from "./components/Layout";
import {Checkbox} from "@chakra-ui/react";
import {
    Text,
    Center,
    Container,
    Flex,
    Box,
    useColorModeValue,
    Img,
    Heading, Table, Thead, Tr, Th, Tbody, Td, TableContainer,
} from "@chakra-ui/react";
import {serverUrl} from "./App";

type Checkin = {
    reservation_id: number,
    name: string,
    nif: string,
    room_id: number,
    checked_in: boolean,
    checked_out: boolean,
}

export default function Dashboard() {
    const navigate = useNavigate();

    const [nRooms, setNRooms] = useState(0);
    const [nCheckinsToday, setNCheckinsToday] = useState(0);
    const [checkinsToday, setCheckinsToday] = useState<Checkin[]>([]);
    const [checkoutsToday, setCheckoutsToday] = useState<Checkin[]>([]);
    const [nCheckoutsToday, setNCheckoutsToday] = useState(0);

    useEffect(() => {
        const getNRooms = async () => {
            fetch(`${serverUrl}/room/count`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                        setNRooms(data.count);
                    }
                )
                .catch((error) => {
                        console.error('Error:', error);
                    }
                );
        }
        const getNCheckinsToday = async () => {
            fetch(`${serverUrl}/reservation/checkin/info/today`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                        setNCheckinsToday(data.length);
                        setCheckinsToday(data);
                    }
                )
                .catch((error) => {
                        console.error('Error:', error);
                    }
                );
        }
        const getNCheckoutsToday = async () => {
            fetch(`${serverUrl}/reservation/checkout/info/today`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                        console.log(data);
                        setNCheckoutsToday(data.length);
                        setCheckoutsToday(data);
                    }
                )
                .catch((error) => {
                        console.error('Error:', error);
                    }
                );
        }
        getNRooms();
        getNCheckinsToday();
        getNCheckoutsToday();
    }, []);

    useEffect(() => {
        console.log(checkinsToday);
    }, [nRooms, checkinsToday, checkoutsToday]);

    // useEffect(() => {
    //   if (!verifyAuth()) {
    //     navigate("/");
    //   }
    // }, []);

    return (
        <Layout selected="Dashboard">
            <Container maxW="container.xl" mt="10">
                <Center>
                    <Text fontSize="3xl" as="b">
                        Dashboard
                    </Text>
                </Center>

                <Flex
                    justifyContent="center"
                    alignItems="center"
                    gap={"50"}
                    mt={"10"}
                    flexDir={"row"}
                >
                    <Center py={6}>
                        <Box
                            w="1md"
                            rounded={"sm"}
                            my={5}
                            mx={[0, 5]}
                            overflow={"hidden"}
                            bg="white"
                            border={"1px"}
                            borderColor="black"
                            boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
                        >
                            <Flex
                                justifyContent={"space-between"}
                                alignItems={"center"}
                                flexDir={"row"}
                                p={2}
                            >
                                <Box p={4} w="50%">
                                    <Img
                                        src={
                                            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                        }
                                        roundedTop={"sm"}
                                        objectFit="cover"
                                        h="full"
                                        w="auto"
                                        alt={"Blog Image"}
                                    />
                                </Box>
                                <Box p={4}>
                                    <Flex
                                        justifyContent={"space-between"}
                                        alignItems={"center"}
                                        flexDir={"column"}
                                    >
                                        <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
                                            Total de quartos
                                        </Heading>
                                        <Text color={"gray.500"} noOfLines={2} fontSize={"4xl"}>
                                            {nRooms}
                                        </Text>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                    </Center>

                    {/*<Center py={6}>*/}
                    {/*    <Box*/}
                    {/*        w="md"*/}
                    {/*        rounded={"sm"}*/}
                    {/*        my={5}*/}
                    {/*        mx={[0, 5]}*/}
                    {/*        overflow={"hidden"}*/}
                    {/*        bg="white"*/}
                    {/*        border={"1px"}*/}
                    {/*        borderColor="black"*/}
                    {/*        boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}*/}
                    {/*    >*/}
                    {/*        <Flex*/}
                    {/*            justifyContent={"space-between"}*/}
                    {/*            alignItems={"center"}*/}
                    {/*            flexDir={"row"}*/}
                    {/*            p={2}*/}
                    {/*        >*/}
                    {/*            <Box p={4} w="50%">*/}
                    {/*                <Img*/}
                    {/*                    src={*/}
                    {/*                        "https://cdn.pixabay.com/photo/2021/02/03/00/10/receptionists-5975962_1280.jpg"*/}
                    {/*                    }*/}
                    {/*                    roundedTop={"sm"}*/}
                    {/*                    objectFit="cover"*/}
                    {/*                    h="full"*/}
                    {/*                    w="auto"*/}
                    {/*                    alt={"Blog Image"}*/}
                    {/*                />*/}
                    {/*            </Box>*/}
                    {/*            <Box p={4}>*/}
                    {/*                <Flex*/}
                    {/*                    justifyContent={"space-between"}*/}
                    {/*                    alignItems={"center"}*/}
                    {/*                    flexDir={"column"}*/}
                    {/*                >*/}
                    {/*                    <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>*/}
                    {/*                        Reservas Hoje*/}
                    {/*                    </Heading>*/}
                    {/*                    <Text color={"gray.500"} noOfLines={2} fontSize={"4xl"}>*/}
                    {/*                        {nReservationsToday}*/}
                    {/*                    </Text>*/}
                    {/*                </Flex>*/}
                    {/*            </Box>*/}
                    {/*        </Flex>*/}
                    {/*    </Box>*/}
                    {/*</Center>*/}
                </Flex>

                <Flex
                    justifyContent="center"
                    alignItems="center"
                    gap={"50"}
                    mt={"10"}
                    flexDir={"row"}
                >
                    <Center py={6}>
                        <Box
                            w="1.25md"
                            rounded={"sm"}
                            my={5}
                            mx={[0, 5]}
                            overflow={"hidden"}
                            bg="white"
                            border={"1px"}
                            borderColor="black"
                            boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
                        >
                            <Flex
                                justifyContent={"space-between"}
                                alignItems={"center"}
                                flexDir={"row"}
                                p={2}
                            >
                                <Box p={4} w="50%">
                                    <Img
                                        src={
                                            "https://images.unsplash.com/photo-1553369728-15ec6971afaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                        }
                                        roundedTop={"sm"}
                                        objectFit="cover"
                                        h="full"
                                        w="auto"
                                        alt={"Blog Image"}
                                    />
                                </Box>
                                <Box p={4}>
                                    <Flex
                                        justifyContent={"space-between"}
                                        alignItems={"center"}
                                        flexDir={"column"}
                                    >
                                        <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
                                            Check-in Hoje
                                        </Heading>
                                        <Text color={"gray.500"} noOfLines={2} fontSize={"4xl"}>
                                            {nCheckinsToday}
                                        </Text>
                                    </Flex>
                                </Box>
                            </Flex>

                            <Box p={4}>
                                <Center>
                                    <TableContainer width={"100%"}>
                                        <Table variant='simple' size={"sm"}>
                                            <Thead>
                                                <Tr>
                                                    <Th>Reserva</Th>
                                                    <Th>Nome</Th>
                                                    <Th>NIF</Th>
                                                    <Th>Quarto</Th>
                                                    <Th>Check In</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                {checkinsToday.length !== 0 && (
                                                    <>
                                                        {checkinsToday.map((reservation) => (
                                                            <Tr key={reservation.reservation_id}>
                                                                <Td>{reservation.reservation_id}</Td>
                                                                <Td>{reservation.name}</Td>
                                                                <Td>{reservation.nif}</Td>
                                                                <Td>{reservation.room_id}</Td>
                                                                <Td>{reservation.checked_in ?
                                                                    <Checkbox defaultChecked
                                                                              colorScheme="green"></Checkbox> :
                                                                    <Checkbox
                                                                        colorScheme="green"></Checkbox>}</Td>
                                                            </Tr>
                                                        ))}
                                                    </>
                                                )}
                                            </Tbody>
                                        </Table>
                                    </TableContainer>
                                </Center>
                            </Box>
                        </Box>
                    </Center>

                    <Center py={6}>
                        <Box
                            w="1.25md"
                            rounded={"sm"}
                            my={5}
                            mx={[0, 5]}
                            overflow={"hidden"}
                            bg="white"
                            border={"1px"}
                            borderColor="black"
                            boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
                        >
                            <Flex
                                justifyContent={"space-between"}
                                alignItems={"center"}
                                flexDir={"row"}
                                p={2}
                            >
                                <Box p={4} w="50%">
                                    <Img
                                        src={
                                            "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                                        }
                                        roundedTop={"sm"}
                                        objectFit="cover"
                                        h="full"
                                        w="auto"
                                        alt={"Blog Image"}
                                    />
                                </Box>
                                <Box p={4}>
                                    <Flex
                                        justifyContent={"space-between"}
                                        alignItems={"center"}
                                        flexDir={"column"}
                                    >
                                        <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
                                            Check-out Hoje
                                        </Heading>
                                        <Text color={"gray.500"} noOfLines={2} fontSize={"4xl"}>
                                            {nCheckoutsToday}
                                        </Text>
                                    </Flex>
                                </Box>
                            </Flex>
                            <Box p={4}>
                                <Center>
                                    <TableContainer width={"100%"}>
                                        <Table variant='simple' size={"sm"}>
                                            <Thead>
                                                <Tr>
                                                    <Th>Reserva</Th>
                                                    <Th>Nome</Th>
                                                    <Th>NIF</Th>
                                                    <Th>Quarto</Th>
                                                    <Th>Check Out</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                {checkinsToday.length !== 0 && (
                                                    <>
                                                        {checkoutsToday.map((reservation) => (
                                                            <Tr key={reservation.reservation_id}>
                                                                <Td>{reservation.reservation_id}</Td>
                                                                <Td>{reservation.name}</Td>
                                                                <Td>{reservation.nif}</Td>
                                                                <Td>{reservation.room_id}</Td>
                                                                <Td>{reservation.checked_out ?
                                                                    <Checkbox defaultChecked
                                                                              colorScheme="green"></Checkbox> :
                                                                    <Checkbox
                                                                        colorScheme="green"></Checkbox>}</Td>
                                                            </Tr>
                                                        ))}
                                                    </>
                                                )}
                                            </Tbody>
                                        </Table>
                                    </TableContainer>
                                </Center>
                            </Box>
                        </Box>
                    </Center>
                </Flex>

            </Container>
        </Layout>
    );
}
