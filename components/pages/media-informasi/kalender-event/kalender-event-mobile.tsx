import React from "react";
import {
  Flex,
  useBreakpointValue,
  Box,
  Container,
  SimpleGrid,
  Text,
  Stack,
  HStack,
  VStack,
  IconButton,
  useColorModeValue,
  Input,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Waves } from "../../../general";
import Image from "next/image";

type KalenderEventDesktopProps = {};

const KalenderEventDesktop = (props: KalenderEventDesktopProps) => {
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
      <Container py={`50px`} maxW={`container.xl`} mx={`auto`}>
        <VStack w={"full"} minH={"50vh"} mb={`50px`}>
          <Stack align={"flex-center"} spacing={6}>
            <Box
              fontWeight={700}
              lineHeight={1.2}
              textAlign={`center`}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              <Text color={`teal.500`}>Kalender Event KORMI KALTRA</Text>
              <Text
                fontSize="lg"
                mt={4}
                color={`teal.200`}
                fontWeight={`light`}
              >
                Event-event yang di selenggarakan KORMI KALTRA
              </Text>
            </Box>
          </Stack>
          <Stack align={"flex-start"} width={`100%`}>
            <VStack width={`100%`} gap={`5px`} wrap={`wrap`}>
              <HStack width={`100%`}>
                <Input
                  placeholder={"Your email address"}
                  bg={`gray.200`}
                  color={`gray.400`}
                  type="datetime-local"
                  border={0}
                  _focus={{
                    bg: "whiteAlpha.300",
                  }}
                />
                <Input
                  placeholder={"Your email address"}
                  bg={`gray.200`}
                  color={`gray.400`}
                  type="datetime-local"
                  border={0}
                  _focus={{
                    bg: "whiteAlpha.300",
                  }}
                />
              </HStack>
              <HStack width={`100%`}>
                <Input
                  placeholder={"Your email address"}
                  bg={`gray.200`}
                  color={`gray.400`}
                  border={0}
                  _focus={{
                    bg: "whiteAlpha.300",
                  }}
                />
                <IconButton
                  bg={useColorModeValue("teal.400", "teal.800")}
                  color={useColorModeValue("white", "gray.800")}
                  _hover={{
                    bg: "teal.600",
                  }}
                  aria-label="Subscribe"
                  icon={<SearchIcon />}
                />
              </HStack>
            </VStack>
          </Stack>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 2 }}
            spacing={5}
            py={`70px`}
          >
            {features.map((feature) => (
              <HStack
                key={feature.id}
                align={"top"}
                border={`1px solid`}
                borderColor={`gray.200`}
                p={`20px`}
                borderRadius={`md`}
                boxShadow={`2px 2px 4px -3px rgba(79,209,197,0.5)`}
              >
                <Box
                  color={"green.400"}
                  px={2}
                  position={`relative`}
                  overflow={`hidden`}
                  width={"40%"}
                  rounded={`md`}
                >
                  <Image
                    fill
                    src={`https://source.unsplash.com/random`}
                    alt="Event"
                  ></Image>
                </Box>
                <VStack align={"start"}>
                  <Text color={`gray.800`} fontWeight={600}>
                    {feature.title}
                  </Text>
                  <Text color={"gray.600"}>{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </>
  );
};

export default KalenderEventDesktop;

// Replace test data with your own
const features = Array.apply(null, Array(8)).map(function (x, i) {
  return {
    id: i,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  };
});
