import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle, Box,
    Button,
    Center,
    Container, HStack, Image,
    Input,
    InputGroup,
    Text, Textarea, useColorModeValue, Flex
} from "@chakra-ui/react";
import {CalendarIcon, AtSignIcon} from "@chakra-ui/icons";
import {serverUrl} from "./App";
import {AlertPopup} from "./components/AlertPopup";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";


type Reservation = {
    end_date: string,
    reservation_id: string,
    start_date: string,
    user_id: string,
}

export default function Reviews() {
    const navigate = useNavigate();

    const [showSuccess, setShowSuccess] = useState<boolean>(false);
    const [showError, setShowError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [showCheckReservation, setShowCheckReservation] = useState<boolean>(false);
    const [showPopup, setShowPopup] = useState<boolean>(false);

    const [reservation, setReservation] = useState<null | Reservation>(null);
    const [reservationId, setReservationId] = useState<string>("");
    const [nif, setNif] = useState<string>("");

    const onPopupCloseSuccess = () => {
        setShowSuccess(false);
        navigate("/");
    }

    const onPopupClose = () => {
        setShowPopup(false);
        setShowCheckReservation(false);
        setErrorMessage('');
        setShowError(false);
    }

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
            const response = await fetch(`${serverUrl}/reservation/getReservation`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                body: JSON.stringify({
                    id: reservationId,
                    nif: nif
                }),
            }).then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data.status.toString() === 'ok') {
                        setReservation(data.reservation);
                        setShowCheckReservation(true);
                    } else {
                        setShowError(true);
                        setErrorMessage("Não foi possível encontrar a reserva");
                    }
                }).catch((error) => {
                        console.log(error);
                        setShowError(true);
                        setErrorMessage("Não foi possível encontrar a reserva");
                    }
                );
        } catch (err) {
            console.log(err);
            setShowError(true);
            setErrorMessage("Não foi possível encontrar a reserva");
        }
    }

    // useEffect(() => {
    //     console.log(reservation);
    // }, [reservation]);

    const [comment, setComment] = useState<string>("");

    return (
        <>
            <Container maxW="container.xl" mt="10">
                <Center>
                    <Text fontSize="3xl" as="b">
                        Feedback
                    </Text>
                </Center>

                <Text fontSize="xl">
                    Procurar reserva
                </Text>
                <Center>
                    <InputGroup w="20%" mt={10}>
                        <Input type='text' placeholder='Número da reserva' value={reservationId}
                               onChange={(e) => setReservationId(e.target.value)}/>
                        {/*<Button colorScheme='blue' ml={"6"} w={"50%"} onClick={procurarReserva}> Procurar</Button>*/}
                    </InputGroup>
                    {/*    spacing */}
                    <InputGroup w="5%"/>
                    <InputGroup w="29%" mt={10}>
                        <Input type='text' placeholder='Nif' value={nif}
                               onChange={(e) => setNif(e.target.value)}/>
                        <Button colorScheme='blue' ml={"6"} w={"50%"} onClick={procurarReserva}> Procurar</Button>
                    </InputGroup>
                </Center>

                {showError ? (
                    <Center>
                        <Alert status='error' w={"35%"} mt={10}>
                            <AlertIcon/>
                            <AlertTitle mr={2}>Erro!</AlertTitle>
                            <AlertDescription>{errorMessage}</AlertDescription>
                        </Alert>
                    </Center>
                ) : null}

                {/*{showPopup ? (*/}
                {/*    <ModalNewCustomer isOpen={true} onClose={() => onPopupClose()} setCliente={setCliente}/>*/}
                {/*) : null}*/}


                {reservation === null ? (
                    // render the image
                    <Center mt={20}>
                        <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBhcGVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                alt="hotel"/>
                        </Box>
                    </Center>
                ) : null}

                {reservation ? (
                    <>
                        <Text fontSize="xl" mt={20}>
                            Reserva:
                        </Text>
                        <Center>
                            <Box
                                w="md"
                                rounded={"sm"}
                                my={5}
                                mx={[0, 5]}
                                overflow={"hidden"}
                                bg="white"
                                border={"1px"}
                                borderColor="black"
                                p={5}
                                boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
                            >
                                {/* Reservation info */}
                                <Text fontSize="2xl" mt={5} ml={5} fontWeight="bold" color="black">
                                    Número da reserva: {reservation.reservation_id}
                                </Text>
                                <HStack mt={3} ml={5}>
                                    <AtSignIcon boxSize={6}/>
                                    <Text fontSize="xl" color="black">
                                        Cliente: {reservation.user.name}
                                    </Text>
                                </HStack>
                                <HStack mt={3} ml={5}>
                                    <CalendarIcon boxSize={6}/>
                                    <Text fontSize="xl" color="black">
                                        Check-in: {reservation.start_date}
                                    </Text>
                                </HStack>
                                <HStack mt={3} ml={5}>
                                    <CalendarIcon boxSize={6}/>
                                    <Text fontSize="xl" color="black">
                                        Check-out: {reservation.end_date}
                                    </Text>
                                </HStack>
                            </Box>
                        </Center>

                        <Text fontSize="xl">
                            Feedback da reserva
                        </Text>
                        <Center w={"100%"} mt={5}>
                            <Flex flexDirection="column" width={"50%"}>

                            <InputGroup w="100%" mt={10}>
                                <Textarea placeholder='Comentário' value={comment}
                                        onChange={(e) => setComment(e.target.value)}/>
                            </InputGroup>
                            </Flex>
                        </Center>

                        <Center mt={"10"}>
                            <Button colorScheme='blue'
                            >Confirmar</Button>
                            <Button colorScheme='red' ml={"4"}>Cancelar</Button>
                        </Center>

                        {showSuccess ? (
                            <AlertPopup message={"Obrigado pelo feedback!"} onClose={() => onPopupCloseSuccess()}
                                        title={"Sucesso!"}/>
                        ) : null}

                    </>
                ) : null}
            </Container>
        </>
    );
}
