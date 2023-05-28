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
  Box,
} from "@chakra-ui/react";

import ReactEChart from "echarts-for-react";
import { useEffect, useState } from "react";
import { serverUrl } from "./App";
import { verifyAuth } from "./auth/Authenticator";
import { useNavigate } from "react-router-dom";

type PeopleReservation = {
  value: number;
  name: string;
};

// convert month number to month name
const monthNames = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

const getMonthName = (monthNumber: number) => {
  return monthNames[monthNumber - 1];
};

export default function Statistics() {
  const navigate = useNavigate();
  const [popularRoomsIds, setPopularRoomsIds] = useState([]);
  const [popularRoomsValues, setPopularRoomsValues] = useState([]);

  const [numberOfReservations, setNumberOfReservations] = useState<
    PeopleReservation[]
  >([]);

  const [financesByMonthIds, setFinancesByMonthIds] = useState([]);
  const [financesByMonthValues, setFinancesByMonthValues] = useState([]);

  useEffect(() => {
    const getMostPopularRooms = async () => {
      fetch(`${serverUrl}/reservation/count/rooms`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setPopularRoomsIds(data.map((room: any) => "Room " + room.room_id));
          setPopularRoomsValues(data.map((room: any) => room.room_count));
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    const getMostReservationPeople = async () => {
      fetch(`${serverUrl}/reservation/count/people`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // numberOfReservationsByPersonNames(data.map((person: any) => person.name));
          // numberOfReservationsByPersonValues(data.map((person: any) => person.person_count));
          setNumberOfReservations(
            data.map((person: any) => {
              return {
                value: person.person_count,
                name: person.name,
              };
            })
          );
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    const getFinancesByMonth = async () => {
      fetch(`${serverUrl}/reservation/count/money`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // setFinancesByMonthIds(data.map((index: any) => index.month));
          console.log(data);
          setFinancesByMonthIds(
            //     ordered
            data
              .sort((a: any, b: any) => a.month - b.month)
              .map((index: any) => getMonthName(index.month))
          );
          // order by month
          setFinancesByMonthValues(data.map((index: any) => index.revenue));
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    getMostPopularRooms();
    getMostReservationPeople();
    getFinancesByMonth();
  }, []);

  const option = {
    title: {
      text: "Finances By Month",
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: financesByMonthIds,
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Direct",
        type: "bar",
        barWidth: "60%",
        data: financesByMonthValues,
      },
    ],
  };

  const option2 = {
    title: {
      text: "Number of Reservations By Person",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: numberOfReservations,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  const option3 = {
    title: {
      text: "Most Popular Rooms",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: "category",
      data: popularRoomsIds,
    },
    series: [
      {
        name: "Number of Reservations",
        type: "bar",
        data: popularRoomsValues,
      },
    ],
  };

  useEffect(() => {
    if (!verifyAuth()) {
      navigate("/");
    }
  }, []);

  return (
    <Layout selected="Estatísticas">
      <Container maxW="container.xl" mt="10">
        <Center>
          <Text fontSize="4xl" as="b">
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
              <Box mt="10">
                <ReactEChart
                  option={option3}
                  style={{ height: "400px", width: "100%" }}
                />
              </Box>
            </TabPanel>
            <TabPanel>
              <Box mt="10">
                <ReactEChart
                  option={option2}
                  style={{ height: "400px", width: "100%" }}
                />
              </Box>
            </TabPanel>
            <TabPanel>
              <Box mt="10">
                <ReactEChart
                  option={option}
                  style={{ height: "400px", width: "100%" }}
                />
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Layout>
  );
}
