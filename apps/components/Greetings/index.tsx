import { Image } from "@chakra-ui/image";
import { Box, Heading, Text } from "@chakra-ui/layout";

const Greetings = () => {
  return (
    <Box my="1rem">
      <Box mb="0.5rem">
        <Text fontSize="0.8rem" fontWeight="500" color="secondary">{`Assalamu'alaikum`}</Text>
        <Heading fontSize="1.3rem" color="darkPrimary">{`Sobat Qu'ran`}</Heading>
      </Box>
      <Box 
        position="relative" 
        overflow="hidden"
        h="100px"
        borderRadius="10px"
        bgColor="#672cbc"
        display="flex"
        alignItems="center"
      >
        <Box px="1rem" w="280px">
          <Heading color="white" mb="0.3rem" fontSize="0.7rem">{`Keutamaan Membaca Al-Qur'an`}</Heading>
          <Text color="whiteAlpha.800" fontSize="0.5rem" lineHeight="13px">
            {`
              “ Seorang yang lancar membaca Al Quran akan bersama para malaikat yang mulia dan senantiasa selalu taat kepada Allah, adapun yang membaca Al Quran dan terbata-bata di dalamnya dan sulit atasnya bacaan tersebut maka baginya dua pahala ” (HR. Muslim)
            `}
          </Text>
        </Box>
        <Image
          right="-10px"
          top="10px"
          w="150px"
          position="absolute" 
          src="/images/quran_logo.png" alt="Logo Quran" />
      </Box>
    </Box>
  )
}

export default Greetings;