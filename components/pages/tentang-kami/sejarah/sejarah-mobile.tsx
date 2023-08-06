import React from "react";
import {
  Box,
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Container,
  Heading,
} from "@chakra-ui/react";
import { Waves } from "../../../general";

type SejarahMobileProps = {};

const SejarahMobile = (props: SejarahMobileProps) => {
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
      <Container py={`70px`} maxW={`container.xl`} mx={`auto`}>
        <VStack w={"full"} minH={"50vh"} gap={`70px`} mb={`50px`}>
          <Stack maxW={"2xl"} align={"flex-center"} spacing={6}>
            <Box
              fontWeight={700}
              lineHeight={1.2}
              textAlign={`center`}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              <Text color={`teal.500`}>Sejarah KORMI KALTRA</Text>
              <Text fontSize="lg" mt={4} color={`teal.200`}>
                Asal Muasal Terbentuknya Kormi Kaltra
              </Text>
            </Box>
          </Stack>
          <Box>
            <Text textAlign={`justify`}>
              Kormi Kaltara lahir pada tanggal 15 Desember 2015 dengan Surat
              Keputusan Nomor: 17/Sk/Forminas/Xii/2015 tentang Pengukuhan
              Pengurus Federasi Olahraga Rekreasi-Masyarakat Indonesia Provinsi
              Kalimantan Utara masa bakti 2014-2019. Saat itu, organisasi
              tersebut masih bernama Formi, yang sebelumnya juga dikenal dengan
              nama Fomi.
            </Text>
            <Text textAlign={`justify`}>
              Seiring berjalannya waktu dan dengan berbagai pertimbangan melalui
              Musyawarah Luar Biasa, organisasi ini kemudian mengubah namanya
              menjadi Kormi, yaitu Komite Olahraga Masyarakat Indonesia.
            </Text>
          </Box>
          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Peran dan Kegiatan
            </Heading>
            <Text textAlign={`justify`}>
              Kormi Kaltara memiliki peran yang sangat penting dalam memajukan
              dan mengembangkan kegiatan olahraga dan rekreasi masyarakat di
              wilayah Provinsi Kalimantan Utara. Dalam masa bakti 2014-2019,
              Kormi Kaltara telah bekerja keras dalam menyelenggarakan berbagai
              kegiatan olahraga, mulai dari kompetisi lokal hingga ke tingkat
              nasional.
            </Text>
            <Text textAlign={`justify`}>
              Dalam menjalankan tugasnya, Kormi Kaltara juga berperan aktif
              dalam menyelenggarakan pelatihan dan pembinaan bagi para atlet dan
              pelatih olahraga di wilayahnya. Upaya ini bertujuan untuk mencetak
              atlet-atlet berprestasi yang dapat mewakili Kalimantan Utara dalam
              berbagai ajang olahraga di tingkat regional maupun nasional.
            </Text>
            <Text textAlign={`justify`}>
              Selain itu, Kormi Kaltara juga telah menjalin kerjasama dengan
              berbagai pihak, termasuk pemerintah daerah dan lembaga olahraga
              lainnya, guna meningkatkan sinergi dalam pengembangan olahraga di
              daerah ini. Kegiatan-kegiatan olahraga yang diselenggarakan oleh
              Kormi Kaltara juga menjadi sarana untuk mempererat tali
              persaudaraan dan kebersamaan antar masyarakat.
            </Text>
          </Box>
          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Visi dan Misi
            </Heading>
            <Text textAlign={`justify`}>
              Pengurus Kormi Kaltara yang terpilih dalam masa bakti tersebut
              berkomitmen untuk terus bekerja keras dan berinovasi dalam
              menghadirkan program-program olahraga yang berkualitas dan berdaya
              saing. Dalam upaya mencapai visi dan misi organisasi, Kormi
              Kaltara mengedepankan aspek pengembangan SDM, pemberdayaan
              masyarakat, dan pembinaan atlet potensial.
            </Text>
            <Text textAlign={`justify`}>
              Tidak hanya itu, Kormi Kaltara juga terus berupaya untuk
              meningkatkan fasilitas olahraga di wilayahnya agar lebih
              representatif dan mendukung kelancaran pelaksanaan
              kegiatan-kegiatan olahraga. Peningkatan infrastruktur olahraga ini
              diharapkan dapat menarik minat masyarakat untuk lebih aktif
              berpartisipasi dalam kegiatan olahraga dan rekreasi.
            </Text>
          </Box>
          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Komitmen dan Dedikasi
            </Heading>
            <Text textAlign={`justify`}>
              Dalam menjalankan roda organisasi, Kormi Kaltara selalu
              mengedepankan prinsip kebersamaan, transparansi, dan
              akuntabilitas. Para pengurus dan anggota Kormi Kaltara bekerja
              sebagai tim yang solid dan saling mendukung demi kesuksesan
              organisasi.
            </Text>
            <Text textAlign={`justify`}>
              Dengan semangat dan dedikasi yang tinggi, Kormi Kaltara terus
              berkomitmen untuk menjadi garda terdepan dalam pengembangan dan
              promosi olahraga di Provinsi Kalimantan Utara. Melalui berbagai
              program dan kegiatan yang dijalankannya, Kormi Kaltara berharap
              dapat menginspirasi masyarakat untuk hidup lebih sehat, aktif, dan
              bergairah dalam menjalani gaya hidup olahraga.
            </Text>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default SejarahMobile;
