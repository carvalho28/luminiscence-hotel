import { Layout } from "./components/Layout";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Center,
  Container,
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

type Cliente = {
  id: number;
  name: string;
  nif: string;
};

type Room = {
  id: string;
  type: string;
  price: string;
};

const RoomTypes = [
  "SINGLE",
  "TWIN",
  "DOUBLE",
  "SUITE",
  "PREMIUM_SUITE",
  "FAMILY",
];

export default function Rooms() {
  const [nif, setNif] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [cliente, setCliente] = useState<null | Cliente>(null);
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [id, setId] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [room, setRoom] = useState<null | Room>(null);

  const procurarCliente = async () => {
    setShowError(false);
    console.log(nif);
    console.log("Goinf to fetch");
    fetch(`${serverUrl}/user/nif`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nif: nif,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length == 0) {
          setShowError(true);
          setErrorMessage("Invalid user NIF");
        } else {
          console.log(data);
          // document.getElementById('clientUpdt').removeAttribute("disabled");
          // document.getElementById('clientDlt').removeAttribute("disabled");
          const { id, name, nif } = data[0];
          console.log("Received client");
          console.log(name);
          const newCliente: Cliente = { id, name, nif };
          console.log("new", newCliente);
          setCliente(newCliente);
        }
      });
  };
  useEffect(() => {
    setType("SINGLE");
  }, [cliente, room]);

  const atualizarCliente = async () => {
    setShowError(false);
    console.log(name + " este e o nome novo");
    fetch(`${serverUrl}/user/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nif: nif,
        name: name,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // cliente = null;
        if (data["status"] != "ok") {
          setShowError(true);
          setErrorMessage("There was an error! Try again!");
        } else {
          console.log(data["nameR"]);
          console.log(data["User"]);
          setShowError(true);
          setErrorMessage("User updated successfully!");
        }
      });
  };

  const apagarCliente = async () => {
    setShowError(false);
    fetch(`${serverUrl}/user/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nif: nif,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data["status"] != "ok") {
          setShowError(true);
          setErrorMessage("There was an error! Try again!");
        } else {
          setShowError(true);
          setErrorMessage("User deleted successfully!");
        }
      });
  };

  const adicionarQuarto = async () => {
    setShowError(false);
    console.log(type);
    console.log(price);
    fetch(`${serverUrl}/room/createRoom`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: type,
        price: price,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // room = null;
        if (data["status"] != "ok") {
          setShowError(true);
          setErrorMessage("There was an error! Try again!");
        } else {
          setShowError(true);
          setErrorMessage("Quarto criado com sucesso!");
        }
      });
  };

  const procurarQuarto = async () => {
    setShowError(false);
    console.log(nif);
    fetch(`${serverUrl}/room/room`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length == 0) {
          setShowError(true);
          setErrorMessage("Invalid room number!");
        } else {
          const { id, type, price } = data[0];
          const newRoom: Room = { id, type, price };
          console.log("new", newRoom);
          setRoom(newRoom);
        }
      });
  };

  const atualizarQuarto = async () => {
    setShowError(false);
    fetch(`${serverUrl}/room/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        type: type,
        price: price,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // room = null;
        if (data.status !== "ok") {
          setShowError(true);
          setErrorMessage("There was an error! Try again!");
        } else {
          setShowError(true);
          setErrorMessage("Room updated successfully!");
        }
      });
  };

  const apagarQuarto = async () => {
    setShowError(false);
    fetch(`${serverUrl}/user/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // room = null;
        if (data["status"] != "ok") {
          setShowError(true);
          setErrorMessage("There was an error! Try again!");
        } else {
          setShowError(true);
          setErrorMessage("Room deleted successfully!");
        }
      });
  };

  return (
    <Layout selected="Rooms">
      <Container maxW="container.xl" mt="10">
        <Center>
          <Text fontSize="3xl" as="b">
            Settings
          </Text>
        </Center>
        <Tabs size="lg" variant="enclosed" mt="10">
          <TabList>
            <Tab>Manage Users</Tab>
            <Tab>Manage Rooms</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {showError && (
                <Alert status="error">
                  <AlertIcon />
                  <AlertTitle mr={2}>{errorMessage}</AlertTitle>
                </Alert>
              )}
              <Text mt={"10"} fontSize={"xl"}>
                Insert a NIF
              </Text>
              <Box mt="10">
                <InputGroup w="30%" mt={10}>
                  <Input
                    type="text"
                    w="70%"
                    mr={5}
                    placeholder="123456789"
                    maxLength={9}
                    value={nif}
                    onChange={(e) => setNif(e.target.value)}
                  />
                  <Button w="80%" colorScheme="blue" onClick={procurarCliente}>
                    {" "}
                    Procurar
                  </Button>
                </InputGroup>
                {/*<Text mt={10} mb={10} fontSize={"xl"}>Insert a new name</Text>*/}
                {/*        <InputGroup>*/}
                {/*        <Input disabled type='text' w="32%" mr={5} mb={5} placeholder="John Doe" onChange={(e) => setName(e.target.value)}/>*/}
                {/*        </InputGroup>*/}
                {/*    <InputGroup>*/}
                {/*        <Button id={"clientUpdt"} colorScheme='yellow' mr={5} onClick={atualizarCliente}> Atualizar Nome</Button>*/}
                {/*        <Button id={"clientDlt"} colorScheme='red' onClick={apagarCliente}> Eliminar Cliente</Button>*/}
                {/*    </InputGroup>*/}
              </Box>
              <p id={"response"}></p>
              {cliente ? (
                <Box mt={10}>
                  <Text mt={10} mb={10} fontSize={"xl"}>
                    Insert a new name
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
            </TabPanel>
            <TabPanel>
              <Tabs size="lg" variant="enclosed" mt="10">
                <TabList>
                  <Tab>Add Room</Tab>
                  <Tab>Update Room</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    {showError && (
                      <Alert status="error">
                        <AlertIcon />
                        <AlertTitle mr={2}>{errorMessage}</AlertTitle>
                      </Alert>
                    )}
                    <Text mt={"10"} fontSize={"xl"}>
                      Insert the new room's type and price
                    </Text>
                    <Box mt="10">
                      <Box mt={10}>
                        <InputGroup>
                          <Select
                            placeholder="SINGLE"
                            onChange={(e) => setType(e.target.value)}
                          >
                            {RoomTypes.map((rtype) => (
                              <option value={rtype} key={rtype}>
                                {rtype}
                              </option>
                            ))}
                          </Select>
                        </InputGroup>
                        <InputGroup>
                          <Input
                            type="number"
                            w="32%"
                            mr={5}
                            mb={5}
                            placeholder="135.00"
                            onChange={(e) => setPrice(e.target.value)}
                          />
                        </InputGroup>
                        <InputGroup>
                          <Button
                            id={"roomUpdt"}
                            colorScheme="green"
                            mr={5}
                            onClick={adicionarQuarto}
                          >
                            {" "}
                            Adicionar Quarto
                          </Button>
                        </InputGroup>
                        {/*    TODO: Parte bonita, funcao atualizar*/}
                      </Box>
                      {/*    TODO: Spinner, responses and testing on browser*/}
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    {showError && (
                      <Alert status="error">
                        <AlertIcon />
                        <AlertTitle mr={2}>{errorMessage}</AlertTitle>
                      </Alert>
                    )}
                    <Text mt={"10"} fontSize={"xl"}>
                      Insert a room number
                    </Text>
                    <Box mt="10">
                      <InputGroup w="30%" mt={10}>
                        <Input
                          type="text"
                          w="70%"
                          placeholder="Room no."
                          mr={5}
                          value={id}
                          onChange={(e) => setId(e.target.value)}
                        />
                        <Button
                          w="80%"
                          colorScheme="blue"
                          onClick={procurarQuarto}
                        >
                          {" "}
                          Procurar
                        </Button>
                      </InputGroup>
                      <p id={"response"}></p>
                      {room ? (
                        <Box mt={10}>
                          <InputGroup>
                            <Text mt={10} mb={10} fontSize={"xl"}>
                              Select a new type and/or price
                            </Text>
                          </InputGroup>
                          <InputGroup>
                            <Select
                              placeholder="SINGLE"
                              onChange={(e) => setType(e.target.value)}
                            >
                              {RoomTypes.map((rtype) => (
                                <option value={rtype} key={rtype}>
                                  {rtype}
                                </option>
                              ))}
                            </Select>
                          </InputGroup>
                          <InputGroup>
                            <Input
                              type="text"
                              w="32%"
                              mr={5}
                              mb={5}
                              placeholder="135.00"
                              onChange={(e) => setPrice(e.target.value)}
                            />
                          </InputGroup>
                          <InputGroup>
                            <Button
                              id={"roomUpdt"}
                              colorScheme="yellow"
                              mr={5}
                              onClick={atualizarQuarto}
                            >
                              {" "}
                              Atualizar Quarto
                            </Button>
                            <Button
                              id={"roomDlt"}
                              colorScheme="red"
                              onClick={apagarQuarto}
                            >
                              {" "}
                              Eliminar Quarto
                            </Button>
                          </InputGroup>
                          {/*    TODO: Parte bonita, funcao atualizar*/}
                        </Box>
                      ) : null}
                      {/*    TODO: Spinner, responses and testing on browser*/}
                    </Box>
                  </TabPanel>
                </TabPanels>
              </Tabs>{" "}
            </TabPanel>
          </TabPanels>
        </Tabs>{" "}
      </Container>
    </Layout>
  );
}
