import "react";
import { Box, Heading } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Box p={4}>
        <Heading size="lg" mb={4}>
          Web Design
        </Heading>
        <Box borderWidth={1} p={4} mb={4}>
          {/* Web Design content goes here */}
        </Box>

        <Heading as="h2" size="lg" mb={4}>
          Voice Acting
        </Heading>
        <Box borderWidth={1} p={4} mb={4}>
          {/* Voice Acting content goes here */}
        </Box>

        <Heading as="h2" size="lg" mb={4}>
          Technical Writing
        </Heading>
        <Box borderWidth={1} p={4}>
          {/* Technical Writing content goes here */}
        </Box>
      </Box>
    </>
  );
}
