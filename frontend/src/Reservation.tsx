import {Layout} from "./components/Layout";
import {
    Center, Container, Text, InputGroup, InputLeftAddon, Input, Button, Box, Card, Badge,
    Image, Stack, Flex, Heading, useColorModeValue, Link, Divider, AlertIcon, AlertTitle, AlertDescription, Alert
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {serverUrl} from "./App";
import {useLocation, useNavigate} from "react-router-dom";

type Cliente = {
    id: number,
    name: string,
    nif: string,
}

interface ReservationProps {
    room_id: number,
    price: number,
    start_date: string,
    end_date: string,
}

export default function Reservation() {
    const location = useLocation();
    const navigate = useNavigate();
    const {room_id, price, start_date, end_date} = location.state || {};
    useEffect(() => {
        if (!room_id || !price || !start_date || !end_date) {
            navigate("/rooms");
        }
    } , [room_id, price, start_date, end_date]);

    const [nif, setNif] = useState<string>('');
    const [cliente, setCliente] = useState<null | Cliente>(null);

    const [nDays, setNDays] = useState<number>(0);
    const [nNights, setNNights] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    const [showError, setShowError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        // calculate nDays between start_date and end_date
        const start = new Date(start_date);
        const end = new Date(end_date);
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setNDays(diffDays);
        setNNights(diffDays - 1);
        // calculate price
        const total = nNights * price;
        setTotalPrice(total);
    }, [])

    const procurarCliente = async () => {
        console.log(nif);
        fetch(`${serverUrl}/user/nif`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nif: nif
            })
        }).then(res => res.json())
            .then(data => {
                if (data.length === 0) {
                    setShowError(true);
                    setErrorMessage("Cliente não encontrado");
                    return;
                }
                const {id, name, nif} = data[0];
                setShowError(false);
                const newCliente: Cliente = {id, name, nif};
                console.log("new", newCliente);
                setCliente(newCliente);
            })
            .catch(err => {
                console.log(err);
            }
        )
    }
    useEffect(() => {
    }, [cliente, nNights, nDays, totalPrice]);

    return (
        <Layout>
            <Container maxW="container.xl" mt="10">
                <Center>
                    <Text fontSize="3xl" as="b">
                        Reservation
                    </Text>
                </Center>

                <Text fontSize="xl">
                    Procurar cliente
                </Text>
                <Center>
                    <InputGroup w="25%" mt={10}>
                        <Input type='text' placeholder='Insira o NIF do cliente' maxLength={9} value={nif}
                               onChange={(e) => setNif(e.target.value)}/>
                        <Button colorScheme='blue' onClick={procurarCliente} ml={"6"}> Procurar</Button>
                    </InputGroup>
                </Center>

                {showError ? (
                    <Center>
                        <Alert status='error' w={"25%"} mt={10}>
                            <AlertIcon />
                            <AlertTitle>
                                Erro:
                            </AlertTitle>
                            <AlertDescription>{errorMessage}</AlertDescription>
                        </Alert>
                    </Center>
                ) : null}

                {cliente === null ? (
                    // render the image
                    <Center mt={20}>
                        <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                alt="hotel"/>
                        </Box>
                    </Center>
                ) : null}

                {cliente ? (
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
                                    <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="md"
                                        textTransform="uppercase" ml="2">
                                        {cliente.name} &bull; {cliente.nif}
                                    </Box>

                                    <Divider orientation='horizontal' borderWidth={'1px'} borderColor={'gray.400'} mt={2} mb={2}/>


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
                                            {nDays} dias &bull; {nNights} noites &bull; {totalPrice}€
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Center>

                        {/*    buttons to confirm and cancel*/
                        }
                        <Center mt={"10"}>
                            <Button colorScheme='blue'>Confirmar</Button>
                            <Button colorScheme='red' ml={"4"}>Cancelar</Button>
                        </Center>
                    </>
                ) : null}
            </Container>
        </Layout>
    )
}