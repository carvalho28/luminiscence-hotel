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
  Flex,
} from "@chakra-ui/react";
import ReactEChart from "echarts-for-react";
import { useEffect, useState } from "react";
import { serverUrl } from "./App";

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
  const [showError, setShowError] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [id, setId] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [room, setRoom] = useState<null | Room>(null);

  useEffect(() => {
    setType("SINGLE");
  }, [room]);

  const adicionarQuarto = async () => {
    setShowError(false);
    setShowSuccess(false);
    fetch(`${serverUrl}/room/createRoom`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
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
          setErrorMessage("Ocorreu um erro! Tente novamente!");
        } else {
          setShowSuccess(true);
          setErrorMessage("Quarto criado com sucesso!");
        }
      });
  };

  const [placeholderPrice, setPlaceholderPrice] = useState<string>("");
  const [placeholderType, setPlaceholderType] = useState<string>("");

  const procurarQuarto = async () => {
    setShowError(false);
    setShowSuccess(false);
    fetch(`${serverUrl}/room/room`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length == 0) {
          setShowError(true);
          setErrorMessage("Número de quarto inválido!");
        } else {
          console.log(data);
          const { id, room_type, price } = data[0];
          const newRoom: Room = { id, type: room_type, price };
          setPlaceholderPrice(price);
          setPlaceholderType(room_type);
          console.log(room_type);
          setRoom(newRoom);
        }
      });
  };

  const atualizarQuarto = async () => {
    setShowError(false);
    setShowSuccess(false);
    fetch(`${serverUrl}/room/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
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
          setErrorMessage("Ocorreu um erro! Tente novamente!");
        } else {
          setShowSuccess(true);
          setErrorMessage("Quarto atualizado com sucesso!");
        }
      });
  };

  const apagarQuarto = async () => {
    setShowError(false);
    setShowSuccess(false);
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
        if (data["status"] != "ok") {
          setShowError(true);
          setErrorMessage("Ocorreu um erro! Tente novamente!");
        } else {
          setShowSuccess(true);
          setErrorMessage("Quarto apagado com sucesso!");
        }
      });
  };

  return (
    <Layout selected="Rooms">
      <Container maxW="container.xl" mt="10">
        <Center>
          <Text fontSize="3xl" as="b">
            Quartos
          </Text>
        </Center>
        <Tabs size="lg" variant="enclosed" mt="10">
          <TabList>
            <Tab>Adicionar Quarto</Tab>
            <Tab>Atualizar Quarto</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
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
              <Center>
                <Text mt={"10"} fontSize={"xl"}>
                  Insira o tipo e o preço do novo quarto
                </Text>
              </Center>
              <Box mt="10">
                <Center>
                  <Flex
                    direction="column"
                    justify={"center"}
                    align="center"
                    // w="50%"
                  >
                    <InputGroup>
                      <Select
                        w="100%"
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
                        w="100%"
                        mb={5}
                        mt={5}
                        placeholder="135.00"
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </InputGroup>
                    <InputGroup>
                      <Button
                        id={"roomUpdt"}
                        colorScheme="green"
                        w="100%"
                        mx={5}
                        onClick={adicionarQuarto}
                      >
                        {" "}
                        Adicionar Quarto
                      </Button>
                    </InputGroup>
                  </Flex>
                </Center>

                {/*    TODO: Parte bonita, funcao atualizar*/}
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
              {showSuccess && (
                <Alert status="success">
                  <AlertIcon />
                  <AlertTitle mr={2}>{errorMessage}</AlertTitle>
                </Alert>
              )}
              <Center>
                <Text mt={"10"} fontSize={"xl"}>
                  Insira o número de um quarto
                </Text>
              </Center>
              <Box mt="10">
                <Center>
                  <InputGroup w="30%">
                    <Input
                      type="text"
                      w="90%"
                      placeholder="Room no."
                      mr={5}
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                    />
                    <Button w="80%" colorScheme="blue" onClick={procurarQuarto}>
                      {" "}
                      Procurar
                    </Button>
                  </InputGroup>
                </Center>
                <p id={"response"}></p>
                {room ? (
                  <Center>
                    <Flex direction="column" justify={"center"} align="center">
                      <Center>
                        <Text mt={10} mb={10} fontSize={"xl"}>
                          Selecione um novo tipo e/ou preço
                        </Text>
                      </Center>
                      <Center>
                        <Select
                          w="100%"
                          placeholder={room.type}
                          onChange={(e) => setType(e.target.value)}
                        >
                          {RoomTypes.map((rtype) => (
                            <option value={rtype} key={rtype}>
                              {rtype}
                            </option>
                          ))}
                        </Select>
                      </Center>
                      <Center>
                        <Input
                          type="text"
                          w="80%"
                          mb={5}
                          mt={5}
                          placeholder={room.price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </Center>
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
                    </Flex>
                  </Center>
                ) : null}
                {/*    TODO: Spinner, responses and testing on browser*/}
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>{" "}
      </Container>
    </Layout>
  );
}
