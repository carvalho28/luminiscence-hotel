import {
    Box,
    Button,
    Checkbox,
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
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

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
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input id="email" type="email"/>
                        </FormControl>
                        <PasswordField name="password" label="Password"/>
                    </Stack>
                    <HStack justify="space-between">
                        <Checkbox defaultChecked>Remember me</Checkbox>
                        <Button variant="link" colorScheme="blue" size="sm">
                            Forgot password?
                        </Button>
                    </HStack>
                    <Button colorScheme="blue" size="lg" fontSize="md">
                        Log in
                    </Button>
                </Stack>
            </Box>
        </Stack>
    </Container>
    );
}