import "react";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  PositionProps,
  ResponsiveValue,
  Stack,
  Text,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const WDCarousel = () => {
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute" as PositionProps["pos"],
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };
  const slides = [
    {
      img: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      label: "The MOBB",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      label: "PWITW",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      label: "Todays Supreme Mathematics",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    {
      img: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      label: "Mask Shop",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      label: "APXPRVLG",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide: number) => {
    setCurrentSlide(slide);
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  return (
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={10}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="full" pos="relative" overflow="hidden">
        <Flex h="400px" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                backgroundSize="cover"
              />
              <Stack
                p="8px 12px"
                pos="absolute"
                bottom="24px"
                textAlign="center"
                w="full"
                mb="8"
                bg={"blackAlpha.700"}
                color="white"
              >
                <Text fontSize="2xl">{slide.label}</Text>
                <Text fontSize="lg">{slide.description}</Text>
              </Stack>
            </Box>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({
            length: slidesCount,
          }).map((_, slideIndex) => (
            <Box
              key={`dots-${slideIndex}`}
              cursor="pointer"
              boxSize={["7px", null, "15px"]}
              m="0 2px"
              bg={
                currentSlide === slideIndex
                  ? "blackAlpha.800"
                  : "blackAlpha.500"
              }
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{
                bg: "blackAlpha.800",
              }}
              onClick={() => setSlide(slideIndex)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
};

const VoiceClip = ({
  imageSrc,
  description,
  audioSrc,
  heading,
}: {
  imageSrc: string;
  description: string;
  audioSrc: string;
  heading: string;
}) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="md">
      <Image src={imageSrc} alt="Voice Clip" mb={4} />
      <Heading as="h2" size="md" mb={2}>
        {heading}
      </Heading>
      <Text mb={4}>{description}</Text>
      <audio src={audioSrc} controls />
    </Box>
  );
};

const VoiceTalentShowcase = () => {
  const voiceClips = [
    {
      imageSrc: "https://picsum.photos/400/150?s=1",
      description: "Characters Clip",
      heading: "Characters",
      audioSrc: "/audio/KielByrne_C.mp3",
    },
    {
      imageSrc: "https://picsum.photos/400/150?s=2",
      description: "Narrative Clip",
      heading: "Narrative",
      audioSrc: "/audio/KielByrne_N.mp3",
    },
    {
      imageSrc: "https://picsum.photos/400/150?s=3",
      description: "Technical Informational Clip",
      heading: "Technical Informational",
      audioSrc: "/audio/KielByrne_NN_NORTA.mp3",
    },
  ];

  return (
    <div>
      {voiceClips.map((clip, index) => (
        <VoiceClip
          key={index}
          imageSrc={clip.imageSrc}
          description={clip.description}
          audioSrc={clip.audioSrc}
          heading={clip.heading}
        />
      ))}
    </div>
  );
};

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
        </Box>
      </Box>
    </>
  );
}
