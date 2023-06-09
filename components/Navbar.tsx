import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  useColorModeValue,
  useDisclosure,
  VisuallyHidden,
  VStack,
  CloseButton,
  Avatar,
} from "@chakra-ui/react";

const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  return (
    <nav>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
        boxShadow={"md"}
        p={{ base: 1, sm: 2 }}
        mb={4}
      >
        <Flex>
          <Link
            href="/"
            title="Choc Home Page"
            display="flex"
            alignItems="center"
          >
            {/* <Logo /> */}
            <Avatar />
            <VisuallyHidden>Kiel H. Byrne</VisuallyHidden>
          </Link>
          {/* <Heading fontSize="xl" fontWeight="medium" ml="2">
                Kiel H. Byrne
              </Heading> */}
        </Flex>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack
            spacing={1}
            mr={1}
            color="brand.500"
            display={{
              base: "none",
              md: "inline-flex",
            }}
          >
            <Link href="/showcase">
              <Button variant="ghost">Showcase</Button>
            </Link>
            <Link href="/resume">
              <Button variant="ghost">Resume</Button>
            </Link>
            <Link href="/blog">
              <Button variant="ghost">Blog</Button>
            </Link>
            <Link href="/skill">
              <Button variant="ghost">Skills</Button>
            </Link>
          </HStack>
          <Button colorScheme="brand" size="sm">
            Get Started
          </Button>
          <Box
            display={{
              base: "inline-flex",
              md: "none",
            }}
          >
            <IconButton
              display={{
                base: "flex",
                md: "none",
              }}
              aria-label="Open menu"
              fontSize="20px"
              color="gray.800"
              _dark={{
                color: "inherit",
              }}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />

            <VStack
              pos="absolute"
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? "flex" : "none"}
              flexDirection="column"
              p={2}
              pb={4}
              m={2}
              bg={bg}
              spacing={3}
              rounded="sm"
              shadow="sm"
            >
              <CloseButton
                aria-label="Close menu"
                onClick={mobileNav.onClose}
              />
              <Button w="full" variant="ghost">
                Features
              </Button>
              <Button w="full" variant="ghost">
                Pricing
              </Button>
              <Button w="full" variant="ghost">
                Blog
              </Button>
              <Button w="full" variant="ghost">
                Company
              </Button>
              <Button w="full" variant="ghost">
                Sign in
              </Button>
            </VStack>
          </Box>
        </HStack>
      </Flex>
    </nav>
  );
};

export default Navbar;
