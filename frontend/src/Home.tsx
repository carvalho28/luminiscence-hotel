import {Box, VStack, Heading, Text, Button, Image, Flex, useColorModeValue, Center} from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons";
import {useNavigate} from "react-router-dom";
import {Logo} from "./components/Logo";
import {serverUrl} from "./App";
import {useEffect, useState} from "react";

export default function Home() {
    const topRooms = [
        {
            name: "Premium Suite",
            stars: 5,
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60"
        },
        {
            name: "Normal Suite",
            stars: 4,
            image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=60"
        },
        {
            name: "Family Room",
            stars: 3,
            image: "https://www.riversideparkhotel.com/wp-content/uploads/2022/02/Photo-071-1366x768-fp_mm-fpoff_0_0.jpg"
        },
    ];

    const [commentsPremium, setCommentsPremium] = useState([]);
    const [commentsNormal, setCommentsNormal] = useState([]);
    const [commentsFamily, setCommentsFamily] = useState([]);

    const getComments = async () => {
        await fetch(`${serverUrl}/reservation/commentsTopRooms`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                    console.log(data);
                    setCommentsPremium(data.PREMIUM_SUITE || []);
                    setCommentsNormal(data.SUITE || []);
                    setCommentsFamily(data.FAMILY || []);
                }
            )
            .catch((error) => {
                    console.error("Error:", error);
                }
            );
    };

    useEffect(() => {
        getComments();
    }, []);

    useEffect(() => {
        console.log(commentsPremium);
        console.log(commentsNormal);
        console.log(commentsFamily);
    }, [commentsPremium, commentsNormal, commentsFamily]);


    const navigate = useNavigate();
    return (
        <Box
            bg="gray.100"
            minHeight="100vh"
            padding={{base: "4", md: "8"}}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <VStack spacing="8" textAlign="center">
                <Logo h="200"/>
                <Heading as="h1" size="4xl">
                    Welcome to <br/> Luminescence Hotel
                </Heading>
                <Text fontSize="xl" color="gray.600">
                    Enjoy a luxurious stay with breathtaking views.
                </Text>
                <Button colorScheme="blue" size="lg" onClick={() => navigate('/login')}>
                    Book Now
                </Button>

                {/* Hotel Image */}
                <Image
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Luminescence Hotel"
                    maxWidth="600px"
                    borderRadius="md"
                    boxShadow="lg"
                />

                {/* Top 3 Rooms */}
                <Box style={{marginTop: "100px"}} textAlign="center">
                    <Heading as="h2" size="lg">
                        Top 3 Rooms
                    </Heading>
                </Box>
                <Flex direction="column" alignItems="center">
                    <Flex direction="row" alignItems="center">
                        {topRooms.slice(0, 2).map((room, index) => (
                            <Flex key={index} w="md" rounded={"sm"} my={5} mx={[0, 5]} overflow={"hidden"} bg="white"
                                  border={"1px"} borderColor="black"
                                  boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}>
                                <Image src={room.image} alt={room.name} boxSize="200px" objectFit="cover"
                                       borderRadius="md"
                                       mr="4" p={4}/>
                                <Box alignItems={"center"}>
                                    <Text fontSize="lg" fontWeight="bold">{room.name}</Text>
                                    <Text fontSize="md" fontWeight="bold">Comments:</Text>
                                    <Center>
                                        {/*    print comments only if they exist for the index */}
                                        {index === 0 && commentsPremium.length > 0 && (
                                            <Text>
                                                {commentsPremium.map((comment, index) => (
                                                    <Text key={index}>
                                                        {comment}
                                                    </Text>
                                                ))}
                                            </Text>
                                        )}
                                        {index === 1 && commentsNormal.length > 0 && (
                                            <Text>
                                                {commentsNormal.map((comment, index) => (
                                                    <Text key={index}>
                                                        {comment}
                                                    </Text>
                                                ))}
                                            </Text>
                                        )}
                                    </Center>
                                </Box>
                            </Flex>
                        ))}
                    </Flex>
                    {topRooms.slice(2, 3).map((room, index) => (
                        <Flex key={index} w="md" rounded={"sm"} my={5} mx={[0, 5]} overflow={"hidden"} bg="white"
                              border={"1px"} borderColor="black"
                              boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}>
                            <Image src={room.image} alt={room.name} boxSize="200px" objectFit="cover" borderRadius="md"
                                   mr="4" p={4}/>
                            <Box alignItems={"center"}>
                                <Text fontSize="lg" fontWeight="bold">{room.name}</Text>
                                <Text fontSize="md" fontWeight="bold">Comments:</Text>
                                <Center>
                                    {commentsFamily.length > 0 && (
                                        <Text>
                                            {commentsFamily.map((comment, index) => (
                                                <Text key={index}>
                                                    {comment}
                                                </Text>
                                            ))}
                                        </Text>
                                    )}
                                </Center>
                            </Box>
                        </Flex>
                    ))}
                </Flex>
            </VStack>
        </Box>
    );
};
