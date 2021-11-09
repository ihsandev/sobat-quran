import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Heading, Text } from "@chakra-ui/layout";

const Greetings = () => {
  const { colorMode } = useColorMode()
  return (
    <Box my="1rem" px="1rem">
      <Box mb="0.5rem">
        <Text fontSize="0.8rem" fontWeight="500" color="secondary">{`Assalamu'alaikum`}</Text>
        <Heading 
          fontSize="1.3rem" 
          color={colorMode === 'light' ? "darkPrimary" : "soft"}
        >
          {`Sobat Qu'ran`}
        </Heading>
      </Box>
      <Box 
        position="relative" 
        overflow="hidden"
        h="120px"
        px="0.5rem"
        borderRadius="10px"
        bgColor="#672cbc"
        display="flex"
        alignItems="center"
      >
        <Box px="0.7rem" w="229px" position="relative" zIndex="1">
          <Heading color="white" mb="0.3rem" fontSize="0.7rem">{`Keutamaan Membaca Al-Qur'an`}</Heading>
          <Text color="whiteAlpha.800" fontSize="0.4rem" lineHeight="15px" fontStyle="italic">
            {`
              “Seorang yang lancar membaca Al Quran akan bersama para malaikat yang mulia dan senantiasa selalu taat kepada Allah, adapun yang membaca Al Quran dan terbata-bata di dalamnya dan sulit atasnya bacaan tersebut maka baginya dua pahala ” (HR. Muslim)
            `}
          </Text>
        </Box>
        <Image
          right="-15px"
          bottom="15px"
          w="125px"
          opacity={0.7}
          position="absolute" 
          src="/images/quran_logo.png" alt="Logo Quran" />
      </Box>
    </Box>
  )
}

export default Greetings;