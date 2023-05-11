import { Layout } from "./components/Layout";
import {Box, Center, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from "@chakra-ui/react";
import ReactEChart from "echarts-for-react";

export default function Register() {

    const option = {
        title: {
            text: 'Manage User',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', "April"],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390, 330, 220, 10, 50]
            }
        ]
    };

    const option2 = {
        title: {
            text: 'Number of Reservations By Person',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                    {value: 3, name: 'Zé'},
                    {value: 5, name: 'Maria Antónia'},
                    {value: 2, name: 'Email'},
                    {value: 3, name: 'Union Ads'},
                    {value: 7, name: 'Adelaide Piedade'}
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }

    const option3 = {
        title: {
            text: 'Most Popular Rooms',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['Room 4', 'Room 1', 'Room 3', 'Room 2', 'Room 10', 'Room 7']
        },
        series: [
            {
                name: 'Number of Reservations',
                type: 'bar',
                data: [2, 5, 20, 13, 23, 1]
            },
        ]
    }

    return (
        <Layout>
            <Container maxW="container.xl" mt="10">
                <Center>
                    <Text fontSize="3xl" as="b">
                        Statistics
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
                                <ReactEChart
                                    option={option3}
                                    style={{height: "400px", width: "100%"}}
                                />
                            </Box>
                        </TabPanel>
                        <TabPanel>
                            <Box mt="10">
                                <ReactEChart
                                    option={option2}
                                    style={{height: "400px", width: "100%"}}
                                />
                            </Box>
                        </TabPanel>
                        <TabPanel>
                            <Box mt="10">
                                <ReactEChart
                                    option={option}
                                    style={{height: "400px", width: "100%"}}
                                />
                            </Box>
                        </TabPanel>
                    </TabPanels>
                </Tabs>{" "}
            </Container>
        </Layout>
    );
}
