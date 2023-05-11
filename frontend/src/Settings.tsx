// import { Layout } from "./components/Layout";
// import {
//     Box, Button,
//     Center,
//     Container,
//     Input,
//     InputGroup,
//     Tab,
//     TabList,
//     TabPanel,
//     TabPanels,
//     Tabs,
//     Text
// } from "@chakra-ui/react";
// import ReactEChart from "echarts-for-react";
// import {useEffect, useState} from "react";
// import {serverUrl} from "./App";
//
// type Cliente = {
//     id: number,
//     name: string,
//     nif: string,
// }
//
export default function Settings() {
    return
    (
        <></>
    );
}
//
//     const [nif, setNif] = useState<string>('');
//     const [cliente, setCliente] = useState<null | Cliente>(null);
//
//     const procurarCliente = async () => {
//         console.log(nif);
//         fetch(`${serverUrl}/user/nif`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 nif: nif
//             })
//         }).then(res => res.json())
//             .then(data => {
//                 const {id, name, nif} = data[0];
//                 const newCliente: Cliente = {id, name, nif};
//                 console.log("new", newCliente);
//                 setCliente(newCliente);
//             })
//     }
//     useEffect(() => {
//         console.log("cliente", cliente);
//     }, [cliente])
//
//     return (
//         <Layout>
//             <Container maxW="container.xl" mt="10">
//                 <Center>
//                     <Text fontSize="3xl" as="b">
//                         Statistics
//                     </Text>
//                 </Center>
//                 <Tabs size="lg" variant="enclosed" mt="10">
//                     <TabList>
//                         <Tab>Manage Users</Tab>
//                         <Tab>Manage Rooms</Tab>
//                         <Tab>Manage Reservations</Tab>
//                     </TabList>
//                     <TabPanels>
//                         <TabPanel>
//                             <Box mt="10">
//                                 <Center>
//                                     <InputGroup w="22%" mt={10}>
//                                         <Input type='text' placeholder='Insira o NIF do cliente' maxLength={9} value={nif}
//                                                onChange={(e) => setNif(e.target.value)}/>
//                                         <Button colorScheme='blue' onClick={procurarCliente}> Procurar</Button>
//                                     </InputGroup>
//                                 </Center>
//                                 {cliente ? (
//                                     <input type='text' maxLength={9} value={nif} onChange={(e) => setNif(e.target.value)}/>
//                                     <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
//                                 ) :  null}
//                             </Box>
//                         </TabPanel>
//                         <TabPanel>
//                             <Box mt="10">
//                                 <ReactEChart
//                                     option={option2}
//                                     style={{height: "400px", width: "100%"}}
//                                 />
//                             </Box>
//                         </TabPanel>
//                         <TabPanel>
//                             <Box mt="10">
//                                 <ReactEChart
//                                     option={option}
//                                     style={{height: "400px", width: "100%"}}
//                                 />
//                             </Box>
//                         </TabPanel>
//                     </TabPanels>
//                 </Tabs>{" "}
//             </Container>
//         </Layout>
//     );
// }
