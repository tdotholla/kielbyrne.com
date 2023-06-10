import {
  Box,
  Flex,
  HStack,
  Image,
  PositionProps,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
export const WDCarousel = () => {
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
      url: "https://mobb.kielbyrne.com",
      img: "/img/screencapture-mobb.png",
      label: "The MOBB",
      description:
        "The Map of Black Businesses (MoBB) allows clients to locate black owned businesses in their immediate vicinity, allowing increased support and patronage for visitors of new areas.",
    },
    {
      url: "https://pwitw.kielbyrne.com",
      img: "/img/screencapture-pwitw.png",
      label: "PWITW",
      description: `"PerkinsWill Where In The World" - An asset-tracking dashboard for 1000+ devices across 20+ offices. Utilizes powershell scripts and MS Windows Rules to send location and OS data to secure database startup.`,
    },
    {
      url: "https://todaysMath.kielbyrne.com",
      img: "/img/screencapture-todaysMath.png",
      label: "Todays Supreme Mathematics",
      description: `Supreme Calculus - An online 365 day calendar giving you "Today's Mathematics" everyday, with room to discuss & build.`,
    },
    {
      url: "https://shop.kielbyrne.com",
      img: "/img/screencapture-shop.png",
      label: "Mask Shop",
      description:
        "E-commerce static site to sell PPE (K95 Facemasks & Accessories)",
    },
    {
      url: "https://thisweeksplays.kielbyrne.com",
      img: "/img/screencapture-thisweeksplays.png",
      label: "This Week's Plays",
      description: `Create and view stock plays from community members, track performance and follow members; leaderboard for "plays of the week"`,
    },
    {
      url: "https://pullup.kielbyrne.com",
      img: "/img/screencapture-pullup.png",
      label: "Pull Up!",
      description: `Pull up to a destination location i.e. downtown; open the "PullUp App" and find live reviews/posts or messages left for you in the immediate area.`,
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
            <Box
              key={`slide-${sid}`}
              boxSize="full"
              shadow="md"
              flex="none"
              overflowY={"scroll"}
            >
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
                boxSize="max-content"
                // backgroundSize="contain"
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
