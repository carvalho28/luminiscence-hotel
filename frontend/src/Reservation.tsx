import { Layout } from "./components/Layout";
import {
  Center,
  Container,
  Text,
  InputGroup,
  Input,
  Button,
  Box,
  Image,
  Divider,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Alert,
  Flex
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { serverUrl } from "./App";
import { useLocation, useNavigate } from "react-router-dom";
import { ModalNewCustomer } from "./components/ModalNewCustomer";
import { AlertPopup } from "./components/AlertPopup";
import {verifyAuth} from "./auth/Authenticator";

export type Cliente = {
  id: number;
  name: string;
  nif: string;
};

export default function Reservation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { room_id, price, start_date, end_date } = location.state || {};
  console.log(room_id, price, start_date, end_date);
  useEffect(() => {
    if (!room_id || !price || !start_date || !end_date) {
      navigate("/rooms");
    }
  }, [room_id, price, start_date, end_date]);

  const [nif, setNif] = useState<string>("");
  const [cliente, setCliente] = useState<null | Cliente>(null);

  const [nDays, setNDays] = useState<number>(0);
  const [nNights, setNNights] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showCreateNewCustomer, setShowCreateNewCustomer] =
    useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    // calculate nDays between start_date and end_date
    const start = new Date(start_date);
    const end = new Date(end_date);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setNDays(diffDays);
  }, []);

  useEffect(() => {
    setNNights(Math.abs(nDays - 1));
  }, [nDays]);

  useEffect(() => {
    const totalP = nNights * price;
    if (totalP === 0) {
      setNNights(1);
      setTotalPrice(price);
      setNDays(0);
      return;
    }
    setTotalPrice(totalP);
  }, [nNights, price]);

  const procurarCliente = async () => {
    if (nif === "") {
      setShowError(true);
      setErrorMessage("Insira o NIF do cliente");
      return;
    }
    await fetch(`${serverUrl}/user/nif`, {
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
        if (data.length === 0) {
          setShowError(true);
          setErrorMessage("Cliente não encontrado");
          setShowCreateNewCustomer(true);
          return;
        }
        const { id, name, nif } = data[0];
        setShowError(false);
        const newCliente: Cliente = { id, name, nif };
        setCliente(newCliente);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createNewCustomer = async () => {
    setShowPopup(true);
  };

  const onPopupClose = () => {
    setShowPopup(false);
    setShowCreateNewCustomer(false);
    setErrorMessage("");
    setShowError(false);
  };

  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const makeReservation = async () => {
    if (!cliente) return;
    await fetch(`${serverUrl}/reservation/make`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        roomId: room_id,
        nif: cliente.nif,
        startDate: new Date(start_date).toISOString().slice(0, 10),
        endDate: new Date(end_date).toISOString().slice(0, 10),
        totalPrice: totalPrice,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setShowSuccess(true);
      });
  };

  const onPopupCloseSuccess = () => {
    setShowSuccess(false);
    navigate("/dashboard");
  };

  useEffect(() => {
    if (!verifyAuth()) {
      navigate("/");
    }
  }, []);

  return (
    <Layout>
      <Container maxW="container.xl" mt="10">
        <Center>
          <Text fontSize="4xl" as="b">
            Reservation
          </Text>
        </Center>

        <Center mt={20}>
        <Text fontSize="xl" as={"b"}>Procurar cliente</Text>
        </Center>
        <Center>
          <Flex direction="column" mt={8}>
          <InputGroup>
            <Input
              type="text"
              placeholder="Insira o NIF do cliente"
              value={nif}
              onChange={(e) => setNif(e.target.value)}
            />
          </InputGroup>
            <Button
                mt={5}
                mx={10}
              colorScheme="blue"
              onClick={procurarCliente}
            >
              {" "}
              Procurar
            </Button>

            </Flex>
        </Center>

        {showError ? (
          <Center>
            <Alert status="error" w={"25%"} mt={10}>
              <AlertIcon />
              <AlertTitle>Erro:</AlertTitle>
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
            {showCreateNewCustomer ? (
              <Button
                colorScheme="blue"
                ml={"6"}
                mt={10}
                onClick={() => createNewCustomer()}
              >
                {" "}
                Criar novo cliente
              </Button>
            ) : null}
          </Center>
        ) : null}

        {showPopup ? (
          <ModalNewCustomer
            isOpen={true}
            onClose={() => onPopupClose()}
            setCliente={setCliente}
          />
        ) : null}

        {cliente === null ? (
          // render the image
          <Center mt={20}>
            <Box
              maxW="lg"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="hotel"
              />
            </Box>
          </Center>
        ) : null}

        {cliente ? (
          <>
            <Center>
            <Text fontSize="xl" mt={20} as={"b"}>
              Resumo da reserva
            </Text>
            </Center>
            <Center mt={5}>
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="hotel"
                />
                <Box p="6">
                  {/* show client name and nif*/}
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="md"
                    textTransform="uppercase"
                    ml="2"
                  >
                    {cliente.name} &bull; {cliente.nif}
                  </Box>

                  <Divider
                    orientation="horizontal"
                    borderWidth={"1px"}
                    borderColor={"gray.400"}
                    mt={2}
                    mb={2}
                  />

                  <Box alignItems="baseline">
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="md"
                      textTransform="uppercase"
                      ml="2"
                    >
                      {/*n days &bull; n nights*/}
                      {nDays} dias &bull; {nNights} noites &bull;{" "}
                      {Math.abs(totalPrice)}€
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Center>

            <Center mt={"10"}>
              <Button colorScheme="blue" onClick={() => makeReservation()}>
                Confirmar
              </Button>
              <Button colorScheme="red" ml={"4"}>
                Cancelar
              </Button>
            </Center>

            {showSuccess ? (
              <AlertPopup
                message={"Reserva efetuada com sucesso!"}
                onClose={() => onPopupCloseSuccess()}
                title={"Sucesso!"}
              />
            ) : null}
          </>
        ) : null}
      </Container>
    </Layout>
  );
}
