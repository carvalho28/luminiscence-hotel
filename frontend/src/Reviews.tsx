import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle, Box,
    Button,
    Center,
    Container, Divider, Image,
    Input,
    InputGroup,
    Text
} from "@chakra-ui/react";
import {Layout} from "./components/Layout";
import {AlertPopup} from "./components/AlertPopup";
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";


export default function Reviews() {
    const navigate = useNavigate();

    const [showSuccess, setShowSuccess] = useState<boolean>(false);
    const [showError, setShowError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [showCheckReservation, setShowCheckReservation] = useState<boolean>(false);
    const [showPopup, setShowPopup] = useState<boolean>(false);

    const [reservation, setReservation] = useState<string>("");
    const [reservationId, setReservationId] = useState<string>("");

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

    return (
        <Layout>
            <Container maxW="container.xl" mt="10">
                <Center>
                    <Text fontSize="3xl" as="b">
                        Reservation
                    </Text>
                </Center>

                <Text fontSize="xl">
                    Procurar reserva
                </Text>
                <Center>
                    <InputGroup w="29%" mt={10}>
                        <Input type='text' placeholder='Número da reserva' value={reservationId}
                               onChange={(e) => setReservationId(e.target.value)}/>
                        <Button colorScheme='blue' ml={"6"} w={"50%"}> Procurar</Button>
                    </InputGroup>
                </Center>

                {/*{showPopup ? (*/}
                {/*    <ModalNewCustomer isOpen={true} onClose={() => onPopupClose()} setCliente={setCliente}/>*/}
                {/*) : null}*/}


                {reservation === null ? (
                    // render the image
                    <Center mt={20}>
                        <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                alt="hotel"/>
                        </Box>
                    </Center>
                ) : null}

                {reservation ? (
                    <>
                        <Text fontSize="xl" mt={20}>
                            Resumo da reserva
                        </Text>
                        <Center>
                            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                    alt="hotel"/>
                                <Box p="6">
                                    {/* show client name and nif*/}
                                    {/*<Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="md"*/}
                                    {/*     textTransform="uppercase" ml="2">*/}
                                    {/*    {cliente.name} &bull; {cliente.nif}*/}
                                    {/*</Box>*/}

                                    <Divider orientation='horizontal' borderWidth={'1px'} borderColor={'gray.400'}
                                             mt={2} mb={2}/>


                                    {/*<Box alignItems="baseline">*/}
                                    {/*    <Box*/}
                                    {/*        color="gray.500"*/}
                                    {/*        fontWeight="semibold"*/}
                                    {/*        letterSpacing="wide"*/}
                                    {/*        fontSize="md"*/}
                                    {/*        textTransform="uppercase"*/}
                                    {/*        ml="2"*/}
                                    {/*    >*/}
                                    {/*        /!*n days &bull; n nights*!/*/}
                                    {/*        {nDays} dias &bull; {nNights} noites &bull; {Math.abs(totalPrice)}€*/}
                                    {/*    </Box>*/}
                                    {/*</Box>*/}
                                </Box>
                            </Box>
                        </Center>
                        <Center mt={"10"}>
                            <Button colorScheme='blue'
                            >Confirmar</Button>
                            <Button colorScheme='red' ml={"4"}>Cancelar</Button>
                        </Center>

                        {showSuccess ? (
                            <AlertPopup message={"Reserva efetuada com sucesso!"} onClose={() => onPopupCloseSuccess()}
                                        title={"Sucesso!"}/>
                        ) : null}

                    </>
                ) : null}
            </Container>
        </Layout>
    )
}
