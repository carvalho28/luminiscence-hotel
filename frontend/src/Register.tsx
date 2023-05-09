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
  Spinner,
  Center,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { PasswordField } from "../components/PasswordField";
import { Logo } from "../components/Logo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { serverUrl } from "./App";
import { AlertPopup } from "../components/AlertPopup";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [showSpinner, setShowSpinner] = useState<boolean>(false);

  const [showDialog, setShowDialog] = useState<boolean>(true);

  const register = async () => {
    if (name === "") {
      setShowError(true);
      setErrorMessage("Name cannot be empty");
      return;
    }
    if (username === "") {
      setShowError(true);
      setErrorMessage("Username cannot be empty");
      return;
    }
    if (password === "") {
      setShowError(true);
      setErrorMessage("Password cannot be empty");
      return;
    }
    if (password !== passwordConfirmation) {
      setShowError(true);
      setErrorMessage("Passwords do not match");
      return;
    }

    setShowError(false);
    setShowSpinner(true);
    const response = await fetch(`${serverUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        username,
        password,
      }),
    });

    if (response.status === 200) {
      setShowSpinner(false);
      setShowDialog(true);
      // navigate("/login");
    } else {
      setShowSpinner(false);
      setShowError(true);
      setErrorMessage("An error occurred");
    }
  };

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "12" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Logo h="180" />
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>Create an account</Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Already have an account?</Text>
              <Button
                variant="link"
                colorScheme="blue"
                onClick={() => navigate("/login")}
              >
                Log in
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg-surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="name"
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input
                  id="username"
                  type="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
              <PasswordField
                name="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <PasswordField
                name="ConfirmPassword"
                label="Confirm Password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </Stack>
            <Button colorScheme="blue" size="lg" fontSize="md" onClick={register}>
              Sign up
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
                <AlertIcon />
                <AlertTitle mr={2}>{errorMessage}</AlertTitle>
              </Alert>
            )}
          </Stack>
        </Box>
      </Stack>
      {showDialog && (
        <AlertPopup title="Registration Successful" message="You can now log in." onClose={() => navigate("/login")} />
      )}
    </Container>
  );
}
