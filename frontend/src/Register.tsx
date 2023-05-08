import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
} from '@chakra-ui/react'
import {PasswordField} from "../components/PasswordField";
import {Logo} from "../components/Logo";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');

    return (
        <Container maxW="lg" py={{base: '12', md: '12'}} px={{base: '0', sm: '8'}}>
            <Stack spacing="8">
                <Stack spacing="6">
                    <Logo h="180"/>
                    <Stack spacing={{base: '2', md: '3'}} textAlign="center">
                        <Heading size={{base: 'xs', md: 'sm'}}>
                            Create an account
                        </Heading>
                        <HStack spacing="1" justify="center">
                            <Text color="muted">
                                Already have an account?
                            </Text>
                            <Button variant="link" colorScheme="blue" onClick={() => navigate('/login')}>
                                Log in
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
                                <FormLabel htmlFor="name">Name</FormLabel>
                                <Input id="name" type="name" value={name} onChange={(e) => setName(e.target.value)}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="username">Username</FormLabel>
                                <Input id="username" type="username" value={username}
                                       onChange={(e) => setUsername(e.target.value)}/>
                            </FormControl>
                            <PasswordField name="password" label="Password" value={password}
                                           onChange={(e) => setPassword(e.target.value)}/>
                            <PasswordField name="password" label="Confirm Password" value={passwordConfirmation}
                                           onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                        </Stack>
                        <Button colorScheme="blue" size="lg" fontSize="md">
                            Sign up
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    )
}