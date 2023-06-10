import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

export const VoiceClip = ({
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
    <Box p={4} borderWidth="1px" borderRadius="md" w={"sm"}>
      <Image src={imageSrc} alt="Voice Clip" mb={4} />
      <Heading as="h2" size="md" mb={2}>
        {heading}
      </Heading>
      <Text mb={4}>{description}</Text>
      <audio src={audioSrc} controls />
    </Box>
  );
};
export const VoiceTalentShowcase = () => {
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
    <Stack direction={{ base: "column", md: "row" }} overflowX={"scroll"}>
      {voiceClips.map((clip, index) => (
        <VoiceClip
          key={index}
          imageSrc={clip.imageSrc}
          description={clip.description}
          audioSrc={clip.audioSrc}
          heading={clip.heading}
        />
      ))}
    </Stack>
  );
};
