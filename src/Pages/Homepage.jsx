import React from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import Logo from "../assets/logo.svg"

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <>
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        alignItems="center"
        p={3}
        bg="#FFFBE7"
        w="85%"
        m="80px 0 10px 0"
        borderRadius="20px"
        borderWidth="2px"
        borderColor="orange"
        >
        <Text d="flex" alignItems="center" justifyContent="center" fontSize="4xl" fontFamily="Work sans">
          <Image h="4rem" src={Logo} alt="logo" />
          Chat App
        </Text>
      </Box>
      <Box bg="#FFFBE7" m="10px 0 50px 0" w="85%" p={10} borderRadius="20px" borderWidth="2px" borderColor="orange">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="0.5em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
        </>
  );
}

export default Homepage;
