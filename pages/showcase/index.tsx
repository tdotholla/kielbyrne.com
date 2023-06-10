import Navbar from "@/components/Navbar";
import { Box, Container, Heading } from "@chakra-ui/react";
import "react";
import { VoiceTalentShowcase } from "./VoiceTalentShowcase";
import { WDCarousel } from "./WDCarousel";
import { WritingSampleSection } from "./WritingSampleSection";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Container maxWidth="container.xl">
        <Box p={4}>
          <Heading size="lg" mb={4}>
            Web Design
          </Heading>
          <Box borderWidth={1} p={4} mb={4}>
            {/* Web Design content goes here */}
            <WDCarousel />
          </Box>

          <Heading as="h2" size="lg" mb={4}>
            Voice Acting
          </Heading>
          <Box borderWidth={1} p={4} mb={4}>
            {/* Voice Acting content goes here */}
            <VoiceTalentShowcase />
          </Box>

          <Heading as="h2" size="lg" mb={4}>
            Technical Writing
          </Heading>
          <Box borderWidth={1} p={4}>
            {/* Technical Writing content goes here */}
            <WritingSampleSection />
          </Box>
        </Box>
      </Container>
    </>
  );
}
