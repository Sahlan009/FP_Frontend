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
  Button
} from "@chakra-ui/react";
import FrontEnd from "../components/AboutUs/Frontend";
import BackEnd from "../components/AboutUs/Backend";
import {useHistory} from "react-router"
import Navbar from "../components/AboutUs/Navbar";

function AboutUs() {
  const history = useHistory();

  const BackHandler = () => {
    history.push("/chats");
  };

  return (
    <div style={{ width: "100%" }}>
    <Navbar/>
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="#FFFBE7"
        w="80%"
        m="40px 0 10px 0"
        borderRadius="20px"
        boxShadow="lg"
        >
        <Text d="flex" alignItems="center" justifyContent="center" fontSize="4xl" fontFamily="Work sans">
          About Us
        </Text>
      </Box>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="#FFFBE7"
        w="100%"
        m="10px 0 40px 0"
        borderRadius="20px"
        boxShadow="lg"
        >
        <Text d="flex" textAlign='center' alignItems="center" justifyContent="center" fontSize="md" fontFamily="Work sans">
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat dicta 
         voluptatum amet itaque harum pariatur repudiandae aliquam delectus impedit, 
         voluptate, inventore ut eum, quibusdam temporibus dolorum reprehenderit velit. 
         Impedit, debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, 
         dolor voluptatibus minus odio assumenda voluptates nihil, fuga facilis et perspiciatis
         voluptate possimus, minima ducimus quod adipisci asperiores mollitia illum amet!
        </Text>
      </Box>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="#FFFBE7"
        w="80%"
        m="40px 0 10px 0"
        borderRadius="20px"
        boxShadow="lg"
        >
        <Text d="flex" alignItems="center" justifyContent="center" fontSize="4xl" fontFamily="Work sans">
          Teams
        </Text>
      </Box>
      <Box bg="#FFFBE7" m="10px 0 50px 0" w="100%" p={10} borderRadius="20px" boxShadow="lg">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="0.5em">
            <Tab>Front-End</Tab>
            <Tab>Back-End</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <FrontEnd />
            </TabPanel>
            <TabPanel>
              <BackEnd />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Button
        colorScheme="orange"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={BackHandler}
      >
        Back
      </Button>
      </Box>
    </Container>
        </div>
  );
}

export default AboutUs;