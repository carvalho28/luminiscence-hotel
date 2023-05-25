import {Box, VStack, Heading, Text, Button, Image, Flex, useColorModeValue} from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons";
import {useNavigate} from "react-router-dom";
import {Logo} from "./components/Logo";

export default function Home() {
    const topRooms = [
        {
            name: "Deluxe Suite",
            stars: 5,
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60"
        },
        {
            name: "Premium Suite",
            stars: 4,
            image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=60"
        },
        {
            name: "Family Room",
            stars: 3,
            image: "https://www.riversideparkhotel.com/wp-content/uploads/2022/02/Photo-071-1366x768-fp_mm-fpoff_0_0.jpg"
        },
        {
            name: "Standard Room",
            stars: 3,
            image: "https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=60"
        },
    ];

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

                {/* Top 5 Rooms */}
                <Flex direction="column" alignItems="center">
                    <Heading as="h2" size="lg" mt="8">
                        Top 4 Rooms
                    </Heading>
                    {topRooms.map((room, index) => (
                        <Flex
                            key={index}
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
                            <Image
                                src={room.image}
                                alt={room.name}
                                boxSize="200px"
                                objectFit="cover"
                                borderRadius="md"
                                mr="4"
                                p={4}
                            />
                            <Box alignItems={"center"}>
                                <Text fontSize="lg" fontWeight="bold">
                                    {room.name}
                                </Text>

                                {/* comments */}
                                <Text fontSize="md" fontWeight="bold">
                                    Comments:
                                </Text>

                            </Box>
                        </Flex>
                    ))}
                </Flex>
            </VStack>
        </Box>
    );
}
