import {
    Alert, AlertIcon, AlertTitle,
    Box,
    Button, Center,
    Checkbox,
    Container,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input, Spinner,
    Stack,
    Text,
} from '@chakra-ui/react'
import {PasswordField} from "./components/PasswordField";
import {Logo} from "./components/Logo";
import { serverUrl } from "./App";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [showError, setShowError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const [showSpinner, setShowSpinner] = useState<boolean>(false);

    const login = async () => {
        if (username === "") {
            setShowError(true);
            setErrorMessage("O username não pode estar vazio!");
            return;
        }
        if (password === "") {
            setShowError(true);
            setErrorMessage("A password não pode estar vazia!");
            return;
        }

        setShowError(false);
        setShowSpinner(true);
        try {
            const response = await fetch(`${serverUrl}/auth/login`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username, password})
            });
            if (response.status === 200) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                navigate('/dashboard');
            } else {
                setShowError(true);
                setErrorMessage('Username ou password incorretos! Tente de novo!');
                setShowSpinner(false);
            }
        } catch (e) {
            setShowError(true);
            setErrorMessage("Conexão à base de dados não estabelecida! Tente de novo!");
            setShowSpinner(false);
        }
    }

    return (
        <Container maxW="lg" py={{base: '12', md: '24'}} px={{base: '0', sm: '8'}}>
            <Stack spacing="8">
                <Stack spacing="6">
                    <Logo h="200"/>
                    <Stack spacing={{base: '2', md: '3'}} textAlign="center">
                        <Heading size={{base: 'xs', md: 'sm'}}>Faça log in na sua conta</Heading>
                        <HStack spacing="1" justify="center">
                            <Text color="muted">Não tem uma conta?</Text>
                            <Button variant="link" colorScheme="blue" onClick={() => navigate('/register')}>
                                Registe-se aqui!
                            </Button>
                        </HStack>
                    </Stack>
                </Stack>
                <Box
                    py={{base: '0', sm: '8'}}
                    px={{base: '4', sm: '10'}}
                    bg={{base: 'transparent', sm: 'bg-surface'}}
                    boxShadow={{base: 'none', sm: 'md'}}
                    borderRadius={{base: 'none', sm: 'xl'}}
                >
                    <Stack spacing="6">
                        <Stack spacing="5">
                            <FormControl>
                                <FormLabel htmlFor="email">Username</FormLabel>
                                <Input id="username" type="username" value={username}
                                       onChange={(e) => setUsername(e.target.value)}/>
                            </FormControl>
                            <PasswordField name="password" label="Password" value={password}
                                           onChange={(e) => setPassword(e.target.value)}/>
                        </Stack>
                        <Button colorScheme="blue" size="lg" fontSize="md" onClick={login}>
                            Log in
                        </Button>
                        {showSpinner && (
                            <Center>
                                <Spinner
                                    color="blue.500"
                                    size="lg"
                                    speed="0.65s"
                                    emptyColor="gray.200"
                                    thickness="4px"
                                />
                            </Center>
                        )}

                        {showError && (
                            <Alert status="error">
                                <AlertIcon/>
                                <AlertTitle mr={2}>{errorMessage}</AlertTitle>
                            </Alert>
                        )}
                    </Stack>
                </Box>
            </Stack>
        </Container>
    );
}
