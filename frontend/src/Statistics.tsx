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
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatGroup,
  StatArrow,
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
        <Tabs size="lg" variant="enclosed" mt="10">
          <TabList>
            <Tab>Rooms</Tab>
            <Tab>People</Tab>
            <Tab>Finances</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <StatGroup>
                <Stat>
                  <StatLabel>Sent</StatLabel>
                  <StatNumber>345,670</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    23.36%
                  </StatHelpText>
                </Stat>

                <Stat>
                  <StatLabel>Clicked</StatLabel>
                  <StatNumber>45</StatNumber>
                  <StatHelpText>
                    <StatArrow type="decrease" />
                    9.05%
                  </StatHelpText>
                </Stat>
              </StatGroup>{" "}
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
