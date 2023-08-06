import { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  SimpleGrid,
  FormHelperText,
  VStack,
  HStack,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";

const Form1 = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Heading
        w="100%"
        color={`teal.500`}
        textAlign={"center"}
        fontWeight="normal"
        mb="2%"
      >
        Data Inorga
      </Heading>
      <VStack gap={`20px`}>
        <FormControl>
          <FormLabel htmlFor="nama-inorga" fontWeight={"normal"}>
            Nama Inorga
          </FormLabel>
          <Input
            focusBorderColor="teal.300"
            id="nama-inorga"
            placeholder="Nama Inorga"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="alamat-inorga" fontWeight={"normal"}>
            Alamat Inorga
          </FormLabel>
          <Input
            focusBorderColor="teal.300"
            id="alamat-inorga"
            placeholder="Alamat Inorga"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email" fontWeight={"normal"}>
            Email
          </FormLabel>
          <Input
            focusBorderColor="teal.300"
            id="email"
            type="email"
            placeholder="ex: 123@mail.com"
          />
        </FormControl>
      </VStack>
    </>
  );
};

const Form2 = () => {
  return (
    <>
      <Heading
        w="100%"
        color={`teal.500`}
        textAlign={"center"}
        fontWeight="normal"
        mb="2%"
      >
        Struktur Inorga
      </Heading>
      <VStack gap={`20px`}>
        <HStack w={`100%`}>
          <FormControl mr="5%">
            <FormLabel htmlFor="nama-ketua" fontWeight={"normal"}>
              Nama Ketua
            </FormLabel>
            <Input
              focusBorderColor="teal.300"
              id="nama-ketua"
              placeholder="Nama Ketua"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="no-whatsapp" fontWeight={"normal"}>
              No. Whatsapp
            </FormLabel>
            <Input
              focusBorderColor="teal.300"
              id="no-whatsapp"
              placeholder="No. Whatsapp"
            />
          </FormControl>
        </HStack>
        <HStack w={`100%`}>
          <FormControl mr="5%">
            <FormLabel htmlFor="nama-sekretaris" fontWeight={"normal"}>
              Nama Sekretaris
            </FormLabel>
            <Input
              focusBorderColor="teal.300"
              id="nama-sekretaris"
              placeholder="Nama Sekretaris"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="no-whatsapp" fontWeight={"normal"}>
              No. Whatsapp
            </FormLabel>
            <Input
              focusBorderColor="teal.300"
              id="no-whatsapp"
              placeholder="No. Whatsapp"
            />
          </FormControl>
        </HStack>
        <HStack w={`100%`}>
          <FormControl mr="5%">
            <FormLabel htmlFor="nama-bendahara" fontWeight={"normal"}>
              Nama Bendahara
            </FormLabel>
            <Input
              focusBorderColor="teal.300"
              id="nama-bendahara"
              placeholder="Nama Bendahara"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="no-whatsapp" fontWeight={"normal"}>
              No. Whatsapp
            </FormLabel>
            <Input
              focusBorderColor="teal.300"
              id="no-whatsapp"
              placeholder="No. Whatsapp"
            />
          </FormControl>
        </HStack>
      </VStack>
    </>
  );
};

const Form3 = () => {
  return (
    <>
      <Heading
        color={`teal.500`}
        w="100%"
        textAlign={"center"}
        fontWeight="normal"
      >
        File Terkait
      </Heading>
      <SimpleGrid columns={3} spacing={6} mt={`20px`}>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel
              fontSize={`14px`}
              htmlFor="nama-bendahara"
              fontWeight={"normal"}
            >
              Upload Ktp
            </FormLabel>
            <Input
              focusBorderColor="teal.300"
              type="file"
              id="nama-bendahara"
              pt={`4px`}
              placeholder="Upload Ktp"
            />
            <FormHelperText>
              (Ketua, Sekretaris dan Bendahara Jadikan Satu File Pdf)
            </FormHelperText>
          </FormControl>
        </GridItem>

        <FormControl>
          <FormLabel
            fontSize={`14px`}
            htmlFor="nama-bendahara"
            fontWeight={"normal"}
          >
            Upload Sk Kepengurusan
          </FormLabel>
          <Input
            focusBorderColor="teal.300"
            type="file"
            id="nama-bendahara"
            pt={`4px`}
            placeholder="Upload Sk Kepengurusan"
          />
        </FormControl>

        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel
              fontSize={`14px`}
              htmlFor="nama-bendahara"
              fontWeight={"normal"}
            >
              Upload Surat Keterangan Terdaftar Kesbangpol Prov Kaltara
            </FormLabel>
            <Input
              focusBorderColor="teal.300"
              type="file"
              id="nama-bendahara"
              pt={`4px`}
              placeholder="Upload Surat Keterangan Terdaftar Kesbangpol Prov Kaltara"
            />
          </FormControl>
        </GridItem>

        <FormControl>
          <FormLabel
            fontSize={`14px`}
            htmlFor="nama-bendahara"
            fontWeight={"normal"}
          >
            Upload Keterangan Domisili Organisasi
          </FormLabel>
          <Input
            focusBorderColor="teal.300"
            type="file"
            id="nama-bendahara"
            pt={`4px`}
            placeholder="Upload Keterangan Domisili Organisasi"
          />
        </FormControl>

        <FormControl>
          <FormLabel
            fontSize={`14px`}
            htmlFor="nama-bendahara"
            fontWeight={"normal"}
          >
            Upload Sk Inorga
          </FormLabel>
          <Input
            focusBorderColor="teal.300"
            type="file"
            id="nama-bendahara"
            pt={`4px`}
            placeholder="Upload Sk Inorga Anggota Penuh Kormi Nasional"
          />
          <FormHelperText>Anggota Penuh Kormi Nasional</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel
            fontSize={`14px`}
            htmlFor="nama-bendahara"
            fontWeight={"normal"}
          >
            Upload Npwp Atas Nama Inorga
          </FormLabel>
          <Input
            focusBorderColor="teal.300"
            type="file"
            id="nama-bendahara"
            pt={`4px`}
            placeholder="Upload Npwp Atas Nama Inorga"
          />
        </FormControl>

        <FormControl>
          <FormLabel
            fontSize={`14px`}
            htmlFor="nama-bendahara"
            fontWeight={"normal"}
          >
            Upload Nomor Rekening Atas Nama Inorga
          </FormLabel>
          <Input
            focusBorderColor="teal.300"
            type="file"
            id="nama-bendahara"
            pt={`4px`}
            placeholder="Upload Nomor Rekening Atas Nama Inorga"
          />
        </FormControl>
      </SimpleGrid>
    </>
  );
};

export default function FormInorgaDesktop() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);

  return (
    <>
      <Box borderWidth="1px" rounded="lg" p={`80px`} w={`100%`} as="form">
        <Progress
          hasStripe
          value={progress}
          colorScheme="teal"
          mb="5%"
          mx="5%"
          borderRadius={`50px`}
          bgColor={`teal.100`}
          isAnimated
        ></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
                transition={`all 0.3s ease`}
                bg={"linear-gradient(145deg, #4FD1C5, #319795)"}
                _hover={{
                  bg: "linear-gradient(90deg, #4FD1C5, #319795)",
                }}
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                }}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
