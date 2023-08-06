import React from "react";
import { Stack, Box, useColorModeValue, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Article } from "../../../pages/media-informasi/artikel/data";

type ArticleCardDesktopProps = {
  data: Article;
};

const ArticleCardDesktop = (props: ArticleCardDesktopProps) => {
  const { data } = props;

  return (
    <Stack maxW={"2xl"} align={"flex-center"} spacing={6}>
      <Box
        maxW={"full"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image
            src={data.image}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            alt="Example"
          />
        </Box>
        <Stack>
          <Text
            color={"teal.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            Artikel
          </Text>
          <Text
            color={useColorModeValue("gray.700", "white")}
            fontSize={"xl"}
            fontFamily={"body"}
          >
            {data.title.substring(0, 17)}
          </Text>
          <Text color={"gray.500"}>{data.desc.substring(0, 80)}....</Text>
        </Stack>
      </Box>
    </Stack>
  );
};

export default ArticleCardDesktop;
