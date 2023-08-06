import {
  Box,
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Container,
  Center,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import { ArticleCard, Waves } from "../../general";
import { articles } from "../media-informasi/artikel/data";

type BerandaMobileProps = {};

const BerandaMobile = (props: BerandaMobileProps) => {
  return (
    <>
      <VStack
        w={"full"}
        h={"100vh"}
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
          >
            <Stack maxW={"full"} align={"flex-center"} spacing={6}>
              <Box
                color={"white"}
                fontWeight={700}
                lineHeight={1.2}
                textAlign={`center`}
                fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
              >
                <Text color={`teal.500`}>
                  KOMITE OLAHRAGA REKREASI MASYARAKAT INDONESIA (KORMI)
                  <br /> Provinsi Kaltra
                </Text>
                <Text fontSize="lg" mt={4} fontWeight={`light`}>
                  Daftar Akun Untuk Dapat Akses Daftar Inorga / Pegiat
                </Text>
              </Box>
              <Stack direction={"row"} justifyContent={`center`}>
                <Button
                  bg={"linear-gradient(145deg, #4FD1C5, #319795)"}
                  _hover={{
                    bg: "linear-gradient(90deg, #4FD1C5, #319795)",
                  }}
                  shadow={`sm`}
                  rounded={"md"}
                  color={"white"}
                  px={`20px`}
                >
                  Ayo Bergabung
                </Button>
              </Stack>
            </Stack>
          </VStack>
        </Flex>
        <Box width="100%" position={`absolute`} bottom={`-10px`}>
          <Waves />
        </Box>
      </VStack>
      <Container py={`120px`} maxW={`container.xl`} mx={`auto`}>
        <VStack w={"full"} minH={"50vh"}>
          <Text
            color={`teal.400`}
            fontWeight={`semibold`}
            fontSize={`24px`}
            pb={`30px`}
          >
            Artikel / Berita Terbaru
          </Text>
          <Grid w={"full"} templateColumns="repeat(1, 1fr)" gap={3}>
            {articles.slice(0, 6).map((item, key) => (
              <ArticleCard key={key} data={item} isMobile={false} />
            ))}
          </Grid>
          <Center mt={`70px`}>
            <Button
              bg={"linear-gradient(145deg, #4FD1C5, #319795)"}
              _hover={{
                bg: "linear-gradient(90deg, #4FD1C5, #319795)",
              }}
              shadow={`sm`}
              rounded={"md"}
              color={"white"}
            >
              Artikel Lainnya
            </Button>
          </Center>
        </VStack>
      </Container>
    </>
  );
};

export default BerandaMobile;
