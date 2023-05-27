import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Center,
  Container,
  HStack,
  Image,
  Input,
  InputGroup,
  Text,
  Textarea,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { CalendarIcon, AtSignIcon } from "@chakra-ui/icons";
import { serverUrl } from "./App";
import { AlertPopup } from "./components/AlertPopup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import StarRatingComponent from "./components/StarRatingComponent";

type Reservation = {
  end_date: string;
  reservation_id: string;
  start_date: string;
  user_id: string;
};

export default function Reviews() {
  const navigate = useNavigate();

  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showCheckReservation, setShowCheckReservation] =
    useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const [reservation, setReservation] = useState<null | Reservation>(null);
  const [reservationId, setReservationId] = useState<string>("");
  const [nif, setNif] = useState<string>("");

  const onPopupCloseSuccess = () => {
    setShowPopup(false);
    setShowCheckReservation(false);
    setShowSuccess(false);
    navigate("/");
  };

  const procurarReserva = async () => {
    if (reservationId === "") {
      setShowError(true);
      setErrorMessage("Insira o número da reserva");
      return;
    }
    if (nif === "") {
      setShowError(true);
      setErrorMessage("Insira o NIF");
      return;
    }

    try {
      await fetch(`${serverUrl}/reservation/getReservation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          id: reservationId,
          nif: nif,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.status.toString() === "ok") {
            if (data.reservation.comment !== null) {
              setShowError(true);
              setErrorMessage("Já fez a review para esta reserva!");
              return;
            }
            setShowError(false);
            setReservation(data.reservation);
            setShowCheckReservation(true);
          } else {
            setShowError(true);
            setErrorMessage("Não foi possível encontrar a reserva");
          }
        })
        .catch((error) => {
          console.log(error);
          setShowError(true);
          setErrorMessage("Não foi possível encontrar a reserva");
        });
    } catch (err) {
      console.log(err);
      setShowError(true);
      setErrorMessage("Não foi possível encontrar a reserva");
    }
  };

  const [comment, setComment] = useState<string>("");
  const [nStars, setNStars] = useState<number>(0);

  const onStarClick = (value: number) => {
    setNStars(value);
  };

  const addReview = async () => {
    if (comment === "") {
      setShowError(true);
      setErrorMessage("Insira um comentário");
      return;
    }
    try {
      await fetch(`${serverUrl}/reservation/addComment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          id: reservationId,
          comment: comment,
          stars: nStars,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.status.toString() === "ok") {
            setShowSuccess(true);
          } else {
            setShowError(true);
            setErrorMessage("Não foi possível adicionar o comentário");
          }
        })
        .catch((error) => {
          console.log(error);
          setShowError(true);
          setErrorMessage("Não foi possível adicionar o comentário");
        });
    } catch (err) {
      console.log(err);
      setShowError(true);
      setErrorMessage("Não foi possível adicionar o comentário");
    }
  };

  return (
    <>
      <Container maxW="container.xl" mt="10">
        <Center>
          <Text fontSize="4xl" as="b">
            Feedback
          </Text>
        </Center>

        <Center mt={10}>
          <Text fontSize="xl" as="b">
            Procurar reserva
          </Text>
        </Center>
        <Center>
          <Flex direction="column" align="center" justify="center">
            <InputGroup mt={10}>
              <Input
                type="text"
                placeholder="Número da reserva"
                value={reservationId}
                onChange={(e) => setReservationId(e.target.value)}
              />
              {/*<Button colorScheme='blue' ml={"6"} w={"50%"} onClick={procurarReserva}> Procurar</Button>*/}
            </InputGroup>
            <InputGroup mt={5}>
              <Input
                type="text"
                placeholder="Nif"
                value={nif}
                onChange={(e) => setNif(e.target.value)}
              />
            </InputGroup>
            <Button
              mt={4}
              colorScheme="blue"
              ml={"6"}
              w={"60%"}
              onClick={procurarReserva}
            >
              {" "}
              Procurar
            </Button>
          </Flex>
        </Center>

        {showError ? (
          <Center>
            <Alert status="error" w={"35%"} mt={10}>
              <AlertIcon />
              <AlertTitle mr={2}>Erro!</AlertTitle>
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          </Center>
        ) : null}

        {reservation === null ? (
          // render the image
          <Center mt={20}>
            <Box
              maxW="lg"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBhcGVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="hotel"
              />
            </Box>
          </Center>
        ) : null}

        {reservation ? (
          <>
            <Center>
              <Text fontSize="2xl" mt={20} as="b">
                Reserva
              </Text>
            </Center>
            <Center>
              <Box
                w="100%"
                rounded={"sm"}
                my={5}
                mx={[0, 5]}
                overflow={"hidden"}
                bg="white"
                border={"1px"}
                borderColor="black"
                p={5}
                boxShadow={useColorModeValue(
                  "6px 6px 0 black",
                  "6px 6px 0 cyan"
                )}
              >
                <Flex flexDirection={"row"}>
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    w="50%"
                    borderRight="1px"
                  >
                    <Text
                      fontSize="xl"
                      mt={5}
                      ml={5}
                      fontWeight="bold"
                      color="black"
                    >
                      Número da reserva: {reservation.reservation_id}
                    </Text>
                    <HStack mt={10} ml={5}>
                      <AtSignIcon boxSize={6} />
                      <Text fontSize="lg" color="black">
                        Cliente: {reservation.user.name}
                      </Text>
                    </HStack>
                    <HStack mt={3} ml={5}>
                      <CalendarIcon boxSize={6} />
                      <Text fontSize="lg" color="black">
                        Check-in: {reservation.start_date}
                      </Text>
                    </HStack>
                    <HStack mt={3} ml={5} mb={3}>
                      <CalendarIcon boxSize={6} />
                      <Text fontSize="lg" color="black">
                        Check-out: {reservation.end_date}
                      </Text>
                    </HStack>
                  </Flex>
                  <Flex
                    flexDirection={"column"}
                    content="center"
                    justifyContent={"center"}
                    w={"50%"}
                  >
                    <Center mt={5}>
                      <Flex flexDirection="column">
                        <Center>
                          <Text fontSize="xl" as="b">
                            Qual a sua avaliação?
                          </Text>
                        </Center>
                        <Center>
                          <StarRatingComponent
                            nStars={5}
                            value={nStars}
                            onChange={onStarClick}
                          />
                        </Center>
                      </Flex>
                    </Center>
                    <Center w={"100%"} mt={5}>
                      <Flex flexDirection="column">
                        <Center>
                          <Text fontSize="xl" as="b">
                            Por favor, deixe um comentário sobre a sua estadia.
                          </Text>
                        </Center>
                        <Flex flexDirection="column">
                          <InputGroup mt={10}>
                            <Textarea
                              placeholder="Comentário"
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                            />
                          </InputGroup>
                        </Flex>
                      </Flex>
                    </Center>
                  </Flex>
                </Flex>
              </Box>
            </Center>

            <Center mt={"10"} mb={"20"}>
              <Button colorScheme="blue" onClick={addReview}>
                Confirmar
              </Button>
              <Button colorScheme="red" ml={"4"}>
                Cancelar
              </Button>
            </Center>

            {showSuccess ? (
              <AlertPopup
                message={"Obrigado pelo feedback!"}
                onClose={() => onPopupCloseSuccess()}
                title={"Sucesso!"}
              />
            ) : null}
          </>
        ) : null}
      </Container>
    </>
  );
}
