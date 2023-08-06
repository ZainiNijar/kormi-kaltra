import React from "react";
import { Text, Card, CardBody, VStack } from "@chakra-ui/react";
import Image from "next/image";
type Props = {};

const FotoCardDesktop = (props: Props) => {
  return (
    <Card w={`100%`} height={`300px`} overflow={`hidden`} position={`relative`}>
      <CardBody>
        <VStack
          position={`absolute`}
          inset={`0`}
          zIndex={9}
          p={`20px`}
          filter="unset"
          _hover={{ filter: "blur(100px)" }}
          cursor={`pointer`}
          color={`white`}
          justifyContent={`end`}
          alignItems={`start`}
          transition={`all 0.3s ease`}
          background={`rgba(0,0,0,0.5)`}
        >
          <Text fontSize={`24px`}>Title</Text>
          <Text fontSize={`12px`}>
            With Chakra UI, I wanted to sync the speed of development with the
            speed of design. I wanted the developer to be just as excited as the
            designer to create a screen.
          </Text>
        </VStack>
      </CardBody>
      <Image
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        src="https://source.unsplash.com/random/dizYwaIjTuukh"
        alt="Chakra UI"
      />
    </Card>
  );
};

export default FotoCardDesktop;
