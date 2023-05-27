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
            setErrorMessage("Name cannot be empty");
            return;
        }
        if (password === "") {
            setShowError(true);
            setErrorMessage("Password cannot be empty");
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
                setErrorMessage('Invalid username or password');
                setShowSpinner(false);
            }
        } catch (e) {
            setShowError(true);
            setErrorMessage("Could not connect to database");
            setShowSpinner(false);
        }
    }

    return (
        <Container maxW="lg" py={{base: '12', md: '24'}} px={{base: '0', sm: '8'}}>
            <Stack spacing="8">
                <Stack spacing="6">
                    <Logo h="200"/>
                    <Stack spacing={{base: '2', md: '3'}} textAlign="center">
                        <Heading size={{base: 'xs', md: 'sm'}}>Log in to your account</Heading>
                        <HStack spacing="1" justify="center">
                            <Text color="muted">Don't have an account?</Text>
                            <Button variant="link" colorScheme="blue" onClick={() => navigate('/register')}>
                                Sign up
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
                        <HStack justify="space-between">
                            <Checkbox defaultChecked>Remember me</Checkbox>
                            <Button variant="link" colorScheme="blue" size="sm">
                                Forgot password?
                            </Button>
                        </HStack>
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
