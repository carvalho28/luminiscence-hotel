import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Layout from "./components/Layout";
import {
    Text,
    Center,
    Container,
    Flex,
    Box,
    useColorModeValue,
    Img,
    Heading,
} from "@chakra-ui/react";
import {serverUrl} from "./App";

export default function Dashboard() {
    const navigate = useNavigate();

    const [nRooms, setNRooms] = useState(0);
    const [nReservationsToday, setNReservationsToday] = useState(0);
    const [nCheckinsToday, setNCheckinsToday] = useState(0);
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
        const getNReservationsToday = async () => {
            fetch(`${serverUrl}/reservation/count/today`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    setNReservationsToday(data.count);
                    }
                )
                .catch((error) => {
                        console.error('Error:', error);
                    }
                );
        }

        const getNCheckinsToday = async () => {
            fetch(`${serverUrl}/reservation/checkin/today`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    setNCheckinsToday(data.count);
                    }
                )
                .catch((error) => {
                        console.error('Error:', error);
                    }
                );
        }
        const getNCheckoutsToday = async () => {
            fetch(`${serverUrl}/reservation/checkout/today`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    setNCheckoutsToday(data.count);
                    }
                )
                .catch((error) => {
                        console.error('Error:', error);
                    }
                );
        }
        getNRooms();
        getNReservationsToday();
        getNCheckinsToday();
        getNCheckoutsToday();
    }, []);

    useEffect(() => {
    }, [nRooms, nReservationsToday]);

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
                            w="md"
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

                    <Center py={6}>
                        <Box
                            w="md"
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
                                            "https://cdn.pixabay.com/photo/2021/02/03/00/10/receptionists-5975962_1280.jpg"
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
                                            Reservas Hoje
                                        </Heading>
                                        <Text color={"gray.500"} noOfLines={2} fontSize={"4xl"}>
                                            {nReservationsToday}
                                        </Text>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                    </Center>
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
                            w="md"
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
                        </Box>
                    </Center>


                    <Center py={6}>
                        <Box
                            w="md"
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
                        </Box>
                    </Center>
                </Flex>

            </Container>
        </Layout>
    );
}
