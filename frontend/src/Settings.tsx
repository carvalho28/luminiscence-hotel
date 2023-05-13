import { Layout } from "./components/Layout";
import {
    Box, Button,
    Center,
    Container,
    Input,
    InputGroup,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text
} from "@chakra-ui/react";
import ReactEChart from "echarts-for-react";
import {useEffect, useState} from "react";
import {serverUrl} from "./App";

type Cliente = {
    id: number,
    name: string,
    nif: string,
}

type Room = {
    id: string,
    type: string,
    price: string
}

export default function Settings() {

    const [nif, setNif] = useState<string>('');
    const [name, setName] = useState<string>('')
    const [cliente, setCliente] = useState<null | Cliente>(null);

    const [id, setId] = useState<string>('')
    const [type, setType] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [room, setRoom] = useState<null | Room>(null);

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

    const atualizarCliente = async () => {
        fetch(`${serverUrl}/user/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nif: nif,
                name: name
            })
        }).then(res => res.json())
            .then(data => {
                // cliente = null;
                if (data === true) {
                    document.getElementById("response").innerHTML = "Cliente atualizado com sucesso!";
                } else {
                    document.getElementById("response").innerHTML = "Houve um problema! Tente de novo!";
                }
            })
    }

    const apagarCliente = async () => {
        fetch(`${serverUrl}/user/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nif: nif
            })
        }).then(res => res.json())
            .then(data => {
                // cliente = null;
                if (data === true) {
                    document.getElementById("response").innerHTML = "Cliente apagado com sucesso!";
                } else {
                    document.getElementById("response").innerHTML = "Houve um problema! Tente de novo!";
                }
            })
    }

    const procurarQuarto = async () => {
        console.log(nif);
        fetch(`${serverUrl}/room/room`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id
            })
        }).then(res => res.json())
            .then(data => {
                const {id, type, price} = data[0];
                const newRoom: Room = {id, type, price};
                console.log("new", newRoom);
                setRoom(newRoom);
            })
    }

    const atualizarQuarto = async () => {
        fetch(`${serverUrl}/room/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                type: type,
                price: price
            })
        }).then(res => res.json())
            .then(data => {
                // room = null;
                if (data === true) {
                    document.getElementById("response").innerHTML = "Quarto atualizado com sucesso!";
                } else {
                    document.getElementById("response").innerHTML = "Houve um problema! Tente de novo!";
                }
            })
    }

    const apagarQuarto = async () => {
        fetch(`${serverUrl}/user/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id
            })
        }).then(res => res.json())
            .then(data => {
                // room = null;
                if (data === true) {
                    document.getElementById("response").innerHTML = "Quarto apagado com sucesso!";
                } else {
                    document.getElementById("response").innerHTML = "Houve um problema! Tente de novo!";
                }
            })
    }

    return (
        <Layout selected="Settings">
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
                        <Tab>Manage Reservations</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Box mt="10">
                                <Center>
                                    <InputGroup w="22%" mt={10}>
                                        <Input type='text' placeholder='Insira o NIF do cliente' maxLength={9} value={nif}
                                               onChange={(e) => setNif(e.target.value)}/>
                                        <Button colorScheme='blue' onClick={procurarCliente}> Procurar</Button>
                                        <p id={"response"}></p>
                                    </InputGroup>
                                </Center>
                                {cliente ? (
                                    <center>
                                        <input type='text' maxLength={9} value={nif} onChange={(e) => setNif(e.target.value)}/>
                                        <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
                                        <Button colorScheme='yellow' onClick={atualizarCliente}> Atualizar Dados</Button>
                                        <Button colorScheme='red' onClick={apagarCliente}> Eliminar Cliente</Button>
                                    {/*    TODO: Parte bonita, funcao atualizar*/}
                                    </center>
                                ) :  null}
                            </Box>
                        </TabPanel>
                        <TabPanel>
                            <Box mt="10">
                                <Center>
                                    <InputGroup w="22%" mt={10}>
                                        <Input type='text' placeholder='Insira o numero do quarto' value={"1"}
                                               onChange={(e) => setId(e.target.value)}/>
                                        <Button colorScheme='blue' onClick={procurarQuarto}> Procurar</Button>
                                        <p id={"response"}></p>
                                    </InputGroup>
                                </Center>
                                {room ? (
                                    <center>
                                        <input type='text' value={"Tipo do quarto"} onChange={(e) => setType(e.target.value)}/>
                                        <input type='number' value={"100"} onChange={(e) => setPrice(e.target.value)}/>
                                        <Button colorScheme='yellow' onClick={atualizarQuarto}> Atualizar Dados</Button>
                                        <Button colorScheme='red' onClick={apagarQuarto}> Eliminar Quarto</Button>
                                        {/*    TODO: Parte bonita, funcao atualizar*/}
                                    </center>
                                ) :  null}
                            </Box>
                        </TabPanel>
                        {/*<TabPanel>*/}
                        {/*    <Box mt="10">*/}
                        {/*    </Box>*/}
                        {/*</TabPanel>*/}
                    </TabPanels>
                </Tabs>{" "}
            </Container>
        </Layout>
    );
}
