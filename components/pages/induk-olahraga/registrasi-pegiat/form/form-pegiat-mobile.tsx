import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Grid,
  GridItem,
  Textarea,
  HStack,
} from "@chakra-ui/react";

export default function FormPegiatMobile() {
  return (
    <>
      <Box borderWidth="1px" rounded="lg" p={`20px`} w={`100%`} as="form">
        <Grid templateColumns={`repeat(1)`} gap={`20px`} width={`100%`}>
          <FormControl width={`100%`}>
            <FormLabel
              fontSize={`14px`}
              htmlFor="nama-Pegiat"
              fontWeight={"normal"}
            >
              Nama Pegiat
            </FormLabel>
            <Input
              focusBorderColor="teal.300"
              id="nama-Pegiat"
              placeholder="Nama Pegiat"
            />
          </FormControl>
          <FormControl width={`100%`}>
            <FormLabel
              fontSize={`14px`}
              htmlFor="nama-inorga"
              fontWeight={"normal"}
            >
              Nama Inorga
            </FormLabel>
            <Input
              focusBorderColor="teal.300"
              id="nama-inorga"
              placeholder="Nama Inorga"
            />
          </FormControl>
          <GridItem>
            <FormControl width={`100%`}>
              <FormLabel
                fontSize={`14px`}
                htmlFor="alamat-pegiat"
                fontWeight={"normal"}
              >
                Alamat Pegiat
              </FormLabel>
              <Textarea
                focusBorderColor="teal.300"
                id="alamat-pegiat"
                placeholder="Alamat pegiat"
              />
            </FormControl>
          </GridItem>
          <FormControl width={`100%`}>
            <FormLabel
              fontSize={`14px`}
              htmlFor="no-wa-pegiat"
              fontWeight={"normal"}
            >
              No Wa Pegiat
            </FormLabel>
            <Input
              focusBorderColor="teal.300"
              id="no-wa-pegiat"
              placeholder="No Wa Pegiat"
            />
          </FormControl>
          <FormControl width={`100%`}>
            <FormLabel
              fontSize={`14px`}
              htmlFor="email-pegiat"
              fontWeight={"normal"}
            >
              Email Pegiat
            </FormLabel>
            <Input
              focusBorderColor="teal.300"
              id="email-pegiat"
              type="email"
              placeholder="ex: 123@mail.com"
            />
          </FormControl>
          <FormControl width={`100%`}>
            <FormLabel
              fontSize={`14px`}
              htmlFor="prestasi-pegiat"
              fontWeight={"normal"}
            >
              Prestasi Pegiat
            </FormLabel>
            <Input
              focusBorderColor="teal.300"
              id="prestasi-pegiat"
              placeholder="Prestasi Pegiat"
            />
          </FormControl>
          <FormControl width={`100%`}>
            <FormLabel
              fontSize={`14px`}
              htmlFor="sertifikat-piagam-pegiat"
              fontWeight={"normal"}
            >
              Upload Sertifikat / Piagam Pegiat
            </FormLabel>
            <Input
              focusBorderColor="teal.300"
              type="file"
              id="sertifikat-piagam-pegiat"
              pt={`4px`}
              placeholder="Upload Sertifikat / Piagam Pegiat"
            />
          </FormControl>
        </Grid>
        <HStack w={`100%`} mt={`5%`}>
          <Button
            colorScheme="teal"
            variant="solid"
            w="100%"
            transition={`all 0.3s ease`}
            bg={"linear-gradient(145deg, #4FD1C5, #319795)"}
            _hover={{
              bg: "linear-gradient(90deg, #4FD1C5, #319795)",
            }}
          >
            Registrasi
          </Button>
        </HStack>
      </Box>
    </>
  );
}
