import React, { useState, useEffect } from "react";
import NavbarMobile from "./navbar-mobile";
import NavbarDesktop from "./navbar-desktop";
import {
  Box,
  Button,
  Collapse,
  Container,
  Flex,
  IconButton,
  Stack,
  useColorModeValue,
  useDisclosure,
  Fade,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import Logo from "components/general/images/logo/kormi-kaltra.png";
import LogoWhite from "components/general/images/logo/kormi-kaltra-white.png";
import Image from "next/image";
import { CSIcon } from "../icons/default-icons";

type NavbarProps = {
  isMobile: boolean;
};

const Navbar = (props: NavbarProps) => {
  const { isMobile } = props;

  const { isOpen, onToggle } = useDisclosure();

  const [scrollTopValue, setScrollTopValue] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY || 0;
    setScrollTopValue(scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      bg={scrollTopValue > 0 ? "white" : "rgba(225, 225, 225, 0.2)"}
      color={useColorModeValue("gray.600", "white")}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={scrollTopValue > 0 ? "gray.200" : "transparent"}
      position={"fixed"}
      zIndex={99}
      insetX={0}
      transition={"all 0.3s ease"}
      py={scrollTopValue > 0 ? "0px" : "10px"}
      backdropBlur={"3xl"}
    >
      <Container maxW={`container.xl`} px={isMobile ? `20px` : "50px"}>
        <Flex
          width={`100%`}
          minH={"60px"}
          align={"center"}
          justifyContent={`space-between`}
        >
          <Flex ml={{ base: -2 }} display={{ base: "flex", lg: "none" }}>
            <IconButton
              color={scrollTopValue > 0 ? "gray.500" : "white"}
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              _hover={{
                bg: "transparent",
              }}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", lg: "start" }}>
            <Stack
              width={`150px`}
              height={`60px`}
              justifyContent={`center`}
              alignItems={`center`}
              position={`relative`}
            >
              <Image
                src={scrollTopValue ? Logo : LogoWhite}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                alt="Logo Kormi Kaltra"
              />
            </Stack>

            <Flex
              display={{ base: "none", lg: "flex" }}
              ml={10}
              alignItems={`center`}
            >
              <NavbarDesktop
                textColor={scrollTopValue ? "gray.800" : "white"}
              />
            </Flex>
          </Flex>

          <Stack w={`auto`} direction={"row"} justifyContent={`end`}>
            {isMobile ? (
              <Button
                as={"a"}
                fontWeight={600}
                color={"white"}
                bg={"teal.400"}
                height={"40px"}
                width={"40px"}
                borderRadius={"50%"}
                href={"#"}
                _hover={{
                  bg: "teal.300",
                }}
              >
                <CSIcon width={5} height={5} />
              </Button>
            ) : (
              <Button
                as={"a"}
                gap={2}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                href={"#"}
                transition={`all 0.3s ease`}
                bg={"linear-gradient(145deg, #4FD1C5, #319795)"}
                _hover={{
                  bg: "linear-gradient(90deg, #4FD1C5, #319795)",
                }}
                shadow={`sm`}
              >
                <CSIcon width={5} height={5} />
                Hubungi Kami
              </Button>
            )}
          </Stack>
        </Flex>
      </Container>

      <Collapse in={isOpen} animateOpacity>
        <NavbarMobile />
      </Collapse>
    </Box>
  );
};

export default Navbar;
