import {
  Avatar,
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  Link,
  VStack,
  VisuallyHidden,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
const Links = ["Showcase", "Resume", "Skills", "Blog"];
const Navbar = () => {
  const bg = useColorModeValue("whitesmoke", "gray.800");
  const mobileNav = useDisclosure();
  return (
    <nav>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
        boxShadow={"md"}
        bg={bg}
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
            {Links.map((link: string) => (
              <Link href={`/${link.toLowerCase()}`} key={link}>
                <Button variant="outline" colorScheme={"purple"}>
                  {link}
                </Button>
              </Link>
            ))}

            <Button colorScheme="yellow" variant="outline">
              Contact Me
            </Button>
          </HStack>
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
              bg={bg}
              spacing={3}
              rounded="sm"
              shadow={{ base: "sm", sm: "md" }}
              zIndex={"1"}
            >
              <Flex width="full" justifyContent={"space-between"}>
                <Avatar />
                <Box>
                  {Links.map((link: string) => (
                    <Link key={link} href={`/${link.toLowerCase()}`}>
                      <Button w="full" variant="ghost" key={link}>
                        {link}
                      </Button>
                    </Link>
                  ))}
                </Box>
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                  margin={2}
                />
              </Flex>
            </VStack>
          </Box>
        </HStack>
      </Flex>
    </nav>
  );
};

export default Navbar;
