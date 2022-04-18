import React from "react";
import { Text, Image, Link } from "@chakra-ui/react";
import { VStack, Stack } from "@chakra-ui/layout";
import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from "react-icons/fa";
const BackEnd = () => {

  return (
    <VStack spacing="4px">
      <Image
              src="https://via.placeholder.com/300"
              borderRadius="full"
              boxSize="150px"
            />
            <Text
              fontSize='30px'
              fontFamily="Work sans"
              color='#1A1A40'
            >
              Hazrina T.N.
            </Text>
            <Text d="flex" textAlign='center' alignItems="center" justifyContent="center" fontSize="sm" fontFamily="Work sans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Placeat dicta voluptatum amet itaque harum pariatur repudiandae
          aliquam delectus impedit, voluptate, inventore ut eum, quibusdam
          temporibus dolorum reprehenderit velit. Impedit, debitis.
        </Text>
            <Stack
            spacing='4px' 
            w='100%'
            direction='row'
            justifyContent='space-evenly'
            display='flex'
            alignItems='center'>
              <Link display='flex' alignItems='center'>
              <FaLinkedin size='30px' icon="fa-brands fa-linkedin"/>
              Linked-In
              </Link>
              <Link display='flex' alignItems='center'>
              <FaGithub size='30px' icon="fa-brands fa-github" />
              Github
              </Link>
              <Link display='flex' alignItems='center'>
              <FaEnvelope  size='30px' icon="fa-brands fa-envelope" />
              Email
              </Link>
              <Link display='flex' alignItems='center'>
              <FaInstagram  size='30px' icon="fa-brands fa-instagram" />
              Instagram
              </Link>
            </Stack>
    </VStack>
  );
};

export default BackEnd;
