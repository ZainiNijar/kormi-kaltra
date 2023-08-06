import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Container,
} from "@chakra-ui/react";
import { Waves } from "../../../general";
import { data } from "./data";
type DataInorgaDesktopProps = {};

const DataInorgaDesktop = (props: DataInorgaDesktopProps) => {
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
        <VStack w={"full"} minH={"50vh"} gap={`70px`} mb={`50px`}>
          <Stack maxW={"2xl"} align={"flex-center"} spacing={6}>
            <Box
              fontWeight={700}
              lineHeight={1.2}
              textAlign={`center`}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              <Text color={`teal.500`}>Data Induk Olahraga</Text>
              <Text fontSize="lg" mt={4} color={`teal.200`}>
                Data Induk Olahraga yang sudah terdaftar
              </Text>
            </Box>
          </Stack>
          <TableContainer width={`100%`}>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>No</Th>
                  <Th>Nama Inorga</Th>
                  <Th>
                    Nama
                    <Text fontSize={`10px`} fontWeight={`light`}>
                      Ketua, Sekretaris, Bendahara
                    </Text>
                  </Th>
                  <Th>Email Inorga</Th>
                  <Th>
                    Nomor Wa
                    <Text fontSize={`10px`} fontWeight={`light`}>
                      Ketua, Sekretaris, Bendahara
                    </Text>
                  </Th>
                  <Th>Keterangan</Th>
                </Tr>
              </Thead>
              <Tbody fontSize={`13px`}>
                {data.map((data, key) => (
                  <Tr key={key}>
                    <Td textAlign={`center`}>{key + 1}</Td>
                    <Td>{data.namaInorga}</Td>
                    <Td>{data.namaKetua}</Td>
                    <Td>{data.emailInorga}</Td>
                    <Td>{data.nomorWa}</Td>
                    <Td>{data.keterangan}</Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>No</Th>
                  <Th>Nama Inorga</Th>
                  <Th>
                    Nama
                    <Text fontSize={`10px`} fontWeight={`light`}>
                      Ketua, Sekretaris, Bendahara
                    </Text>
                  </Th>
                  <Th>Email Inorga</Th>
                  <Th>
                    Nomor Wa
                    <Text fontSize={`10px`} fontWeight={`light`}>
                      Ketua, Sekretaris, Bendahara
                    </Text>
                  </Th>
                  <Th>Keterangan</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
          {/* {data.map((data, key) => (
            <Card data={data} key={key} />
          ))} */}
        </VStack>
      </Container>
    </>
  );
};

export default DataInorgaDesktop;
