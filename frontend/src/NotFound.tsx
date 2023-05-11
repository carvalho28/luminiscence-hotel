import { Box, Container, Img, Center, Heading } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Container maxW="container.xl" mt="10">
      <Center mt="100">
        <Box h="30em" w="30em" bg="black">
          <Img
            src="https://images.unsplash.com/photo-1609743522653-52354461eb27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt="404"
            h="100%"
            w="100%"
            objectFit="cover"
          />
        </Box>
      </Center>
      <Center mt="10">
        <Heading as="h1" size="4xl">
          404 - Page Not Found
        </Heading>
      </Center>
    </Container>
  );
}
