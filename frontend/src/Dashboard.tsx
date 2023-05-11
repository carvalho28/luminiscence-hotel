import { useEffect } from "react";
import { verifyAuth } from "./auth/Authenticator";
import { useNavigate } from "react-router-dom";
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

export default function Dashboard() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!verifyAuth()) {
  //     navigate("/");
  //   }
  // }, []);

  return (
    <Layout>
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
                  {/* <RiHotelBedLine size="3em" /> */}
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
                      Quartos vagos
                    </Heading>
                    <Text color={"gray.500"} noOfLines={2} fontSize={"4xl"}>
                      10
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
                      Quartos vagos
                    </Heading>
                    <Text color={"gray.500"} noOfLines={2} fontSize={"4xl"}>
                      10
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
