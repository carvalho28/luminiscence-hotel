import { Layout } from "./components/Layout";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Center,
  Container,
    Flex,
  Input,
  InputGroup,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Select,
  Tr,
  Td,
  Checkbox,
} from "@chakra-ui/react";
import ReactEChart from "echarts-for-react";
import { useEffect, useState } from "react";
import { serverUrl } from "./App";
import {verifyAuth} from "./auth/Authenticator";
import {useNavigate} from "react-router-dom";

type Cliente = {
  id: number;
  name: string;
  nif: string;
};

export default function Users() {
  const navigate = useNavigate();
  const [nif, setNif] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [cliente, setCliente] = useState<null | Cliente>(null);
  const [showError, setShowError] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const procurarCliente = async () => {
    setShowError(false);
    setShowSuccess(false);
    fetch(`${serverUrl}/user/nif`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        nif: nif,
      }),
    })
        .then((res) => res.json())
        .then((data) => {
          if (data.length == 0) {
            setShowError(true);
            setErrorMessage("NIF Inválido");
          } else {
            const { id, name, nif } = data[0];
            const newCliente: Cliente = { id, name, nif };
            setCliente(newCliente);
          }
        });
  };

  const atualizarCliente = async () => {
    setShowError(false);
    console.log(name + " este e o nome novo");
    fetch(`${serverUrl}/user/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        nif: nif,
        name: name,
      }),
    })
        .then((res) => res.json())
        .then((data) => {
          if (data["status"] != "ok") {
            setShowError(true);
            setErrorMessage("Ocorreu um erro! Tente de novo!");
          } else {
            console.log(data["nameR"]);
            console.log(data["User"]);
            setShowError(true);
            setErrorMessage("Utilizador atualizado com sucesso!");
          }
        });
  };

  const apagarCliente = async () => {
    setShowError(false);
    fetch(`${serverUrl}/user/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        nif: nif,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data["status"] != "ok") {
          setShowError(true);
          setErrorMessage("Ocorreu um erro! Tente de novo!");
        } else {
          setShowError(true);
          setErrorMessage("Utilizador apagado com sucesso!");
        }
      });
  };


  useEffect(() => {
    if (!verifyAuth()) {
      navigate("/");
    }
  }, []);

  return (
      <Layout selected="Rooms">
        <Container maxW="container.xl" mt="10">
          <Center>
            <Text fontSize="3xl" as="b">
              Utilizadores
            </Text>
          </Center>
          <Tabs size="lg" variant="enclosed" mt="10">
            <TabList>
              <Tab>Gerir Utilizadores</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    gap={"50"}
                    mt={"10"}
                    flexDir={"row"}
                >
                {showError && (
                    <Alert status="error">
                      <AlertIcon />
                      <AlertTitle mr={2}>{errorMessage}</AlertTitle>
                    </Alert>
                )}
                {showSuccess && (
                    <Alert status="success">
                      <AlertIcon />
                      <AlertTitle mr={2}>{errorMessage}</AlertTitle>
                    </Alert>
                )}
                <Text mt={"10"} fontSize={"xl"}>
                  Insira um NIF
                </Text>
                <Box mt="10">
                  <InputGroup w="30%" mt={10}>
                    <Input
                      type="text"
                      w="32%"
                      mr={5}
                      mb={5}
                      placeholder="John Doe"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup>
                    <Button
                      id={"clientUpdt"}
                      colorScheme="yellow"
                      mr={5}
                      onClick={atualizarCliente}
                    >
                      {" "}
                      Atualizar Nome
                    </Button>
                    <Button
                      id={"clientDlt"}
                      colorScheme="red"
                      onClick={apagarCliente}
                    >
                      {" "}
                      Eliminar Cliente
                    </Button>
                  </InputGroup>
                </Box>
                <p id={"response"}></p>
                {cliente ? (
                    <Box mt={10}>
                      <Text mt={10} mb={10} fontSize={"xl"}>
                        Insira um nome novo
                      </Text>
                      <InputGroup>
                        <Input
                            type="text"
                            w="32%"
                            mr={5}
                            mb={5}
                            placeholder="John Doe"
                            onChange={(e) => setName(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup>
                        <Button
                            id={"clientUpdt"}
                            colorScheme="yellow"
                            mr={5}
                            onClick={atualizarCliente}
                        >
                          {" "}
                          Atualizar Nome
                        </Button>
                        <Button
                            id={"clientDlt"}
                            colorScheme="red"
                            onClick={apagarCliente}
                        >
                          {" "}
                          Eliminar Cliente
                        </Button>
                      </InputGroup>
                    </Box>
                ) : null}
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>{" "}
        </Container>
      </Layout>
              ) : null}
            </TabPanel>
          </TabPanels>
        </Tabs>{" "}
      </Container>
    </Layout>
  );
}
