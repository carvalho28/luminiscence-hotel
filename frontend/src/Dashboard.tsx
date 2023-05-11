import { useEffect } from "react";
import { verifyAuth } from "./auth/Authenticator";
import { useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import {
  Text,
  Center,
  Container,
  Card,
  CardBody,
  Flex,
} from "@chakra-ui/react";
import { RiHotelBedLine } from "react-icons/ri";

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
          <Text fontSize="2xl" as="b">
            Dashboard
          </Text>
        </Center>
        <Flex flexDirection="row" mt="10" gap="50" justifyContent="center">
          <Card minW="md" mt="10" minH="150" align="center" variant="elevated">
            <CardBody>
              <Flex flexDirection="row" justifyContent="center" gap="10">
                <RiHotelBedLine size="3em" />
                <Flex
                  ml="2"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text fontSize="xl" as="b">
                    Quartos vagos
                  </Text>
                  <Text fontSize="md" as="b">
                    10
                  </Text>
                </Flex>
              </Flex>
            </CardBody>
          </Card>

          <Card minW="md" mt="10" minH="150" align="center" variant="elevated">
            <CardBody>
              <Flex flexDirection="row" justifyContent="center" gap="10" alignItems="center">
                <RiHotelBedLine size="3em" />
                <Flex
                  ml="2"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text fontSize="xl" as="b">
                    Quartos vagos
                  </Text>
                  <Text fontSize="md" as="b">
                    10
                  </Text>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
        </Flex>
      </Container>
    </Layout>
  );
}
