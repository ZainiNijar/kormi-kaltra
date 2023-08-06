import React, { useEffect, useState } from "react";
import {
  Flex,
  useBreakpointValue,
  Box,
  Container,
  Text,
  Stack,
  VStack,
  Center,
} from "@chakra-ui/react";
import { Waves } from "../../../general";
import { data } from "./data";
import HierarchyTreeDesktop from "./hierarchy-desktop";

type StrukturOrganisasiDesktopProps = {};

const StrukturOrganisasiDesktop = (props: StrukturOrganisasiDesktopProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <VStack
        w={"full"}
        h={"30vh"}
        position={`relative`}
        backgroundImage={`url(https://source.unsplash.com/random/temple)`}
        filter={`brightness(120%)`}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <Flex
          w={"full"}
          h={"100%"}
          bg={`linear-gradient(177deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0) 100%)`}
        >
          <VStack
            mt={`30px`}
            justifyContent={`center`}
            paddingBottom={`100px`}
            w={"full"}
            justify={"center"}
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
          ></VStack>
        </Flex>
        <Box width="100%" position={`absolute`} bottom={`-10px`}>
          <Waves />
        </Box>
      </VStack>
      <Container py={`70px`} maxW={`container.xl`} px={`50px`} mx={`auto`}>
        <VStack w={"full"} minH={"50vh"} mb={`50px`}>
          <Stack maxW={"2xl"} align={"flex-center"} spacing={6}>
            <Box
              fontWeight={700}
              lineHeight={1.2}
              textAlign={`center`}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              <Text color={`teal.500`}>Struktur Organisasi KORMI KALTRA</Text>
              <Text fontSize="lg" mt={4} color={`teal.200`}>
                Program Program yang sudah dan akan di jalankan KORMI KALTRA
              </Text>
            </Box>
          </Stack>
          <Center width={`100%`}>
            {isClient ? <HierarchyTreeDesktop data={data} /> : ""}
          </Center>
        </VStack>
      </Container>
    </>
  );
};

export default StrukturOrganisasiDesktop;
