import { Layout } from "./components/Layout";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
  Text,
  Container,
} from "@chakra-ui/react";

export default function Register() {
  return (
    <Layout>
      <Container maxW="container.xl" mt="10">
        <Center>
          <Text fontSize="2xl" as="b">
            Statistics
          </Text>
        </Center>
        <Tabs size="md" variant="enclosed" mt="10">
          <TabList>
            <Tab>Rooms</Tab>
            <Tab>People</Tab>
            <Tab>Finances</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>{" "}
      </Container>
    </Layout>
  );
}
