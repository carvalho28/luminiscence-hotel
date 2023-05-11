import {Layout} from "./components/Layout";
import {
    Center, Container, Text, InputGroup, InputLeftAddon, Input, Button, Box, Card, Badge,
    Image, Stack, Flex, Heading, useColorModeValue, Link
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {serverUrl} from "./App";
import {useLocation} from "react-router-dom";

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
    const {room_id, price, start_date, end_date} = location.state;

    const [nif, setNif] = useState<string>('');
    const [cliente, setCliente] = useState<null | Cliente>(null);

    const [nDays, setNDays] = useState<number>(0);
    const [nNights, setNNights] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        // calculate nDays between start_date and end_date
        const start = new Date(start_date);
        const end = new Date(end_date);
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setNDays(diffDays);
        setNNights(diffDays - 1);
        console.log("nDays", nDays);
        console.log("nNights", nNights);
        // calculate price
        const total = nNights * price;
        setTotalPrice(total);
        console.log("price", price);
        console.log("room_id", room_id);
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
                const {id, name, nif} = data[0];
                const newCliente: Cliente = {id, name, nif};
                console.log("new", newCliente);
                setCliente(newCliente);
            })
    }
    useEffect(() => {
        console.log("cliente", cliente);
    }, [cliente])

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
                    <InputGroup w="22%" mt={10}>
                        <Input type='text' placeholder='Insira o NIF do cliente' maxLength={9} value={nif}
                               onChange={(e) => setNif(e.target.value)}/>
                        <Button colorScheme='blue' onClick={procurarCliente}> Procurar</Button>
                    </InputGroup>
                </Center>

                {cliente ? (
                    <Center py={6}>
                        <Stack
                            borderWidth="1px"
                            borderRadius="lg"
                            w={{sm: '100%', md: '400px'}}
                            height={{sm: '476px', md: '8rem'}}
                            direction={{base: 'column', md: 'row'}}
                            bg={useColorModeValue('white', 'gray.900')}
                            boxShadow={'2xl'}
                            padding={4}>
                            <Stack
                                flex={1}
                                flexDirection="column"
                                justifyContent="center"
                                alignItems="center"
                                p={1}
                                pt={2}>
                                <Heading fontSize={'2xl'} fontFamily={'body'}>
                                    {cliente.name}
                                </Heading>
                                <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                                    NIF: {cliente.nif}
                                </Text>
                            </Stack>
                        </Stack>
                    </Center>
                ) : null}

                {cliente ? (
                    <>
                        <Text fontSize="xl">
                            Resumo da reserva
                        </Text>
                        <Center>
                            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                    alt="hotel"/>
                                <Box p="6">
                                    <Box alignItems="baseline">

                                        <Box
                                            color="gray.500"
                                            fontWeight="semibold"
                                            letterSpacing="wide"
                                            fontSize="xs"
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
                        <Center mt={"4"}>
                            <Button colorScheme='blue'>Confirmar</Button>
                            <Button colorScheme='red' ml={"4"}>Cancelar</Button>
                        </Center>
                    </>
                ) : null}
            </Container>
        </Layout>
    )
}