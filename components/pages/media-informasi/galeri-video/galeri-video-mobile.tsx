import React from "react";
import {
  Box,
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Container,
  Grid,
} from "@chakra-ui/react";
import { Waves, YoutubeCard } from "../../../general";
import { data } from "./data";

type GaleriVideoMobileProps = {};

const GaleriVideoMobile = (props: GaleriVideoMobileProps) => {
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
        <VStack w={"full"} minH={"50vh"} gap={`30px`} mb={`50px`}>
          <Stack maxW={"2xl"} align={"flex-center"} spacing={6}>
            <Box
              fontWeight={700}
              lineHeight={1.2}
              textAlign={`center`}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              <Text color={`teal.500`}>Galeri Video</Text>
              <Text fontSize="lg" mt={4} color={`teal.200`}>
                Galeri Video kegiatan Kormi Kaltra
              </Text>
            </Box>
          </Stack>
          <Grid w={"full"} templateColumns="repeat(1, 1fr)" gap={6}>
            {data.map((item, key) => (
              <YoutubeCard key={key} videoId={item.id} />
            ))}
          </Grid>
        </VStack>
      </Container>
    </>
  );
};

export default GaleriVideoMobile;
