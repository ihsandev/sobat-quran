import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Link from 'next/link'
const ListSurah = ({surah}: any) => {
  return (
    <Link key={surah.number} href={`/surah/${surah.number}`}>
      <a>
        <Flex 
          justifyContent="space-between" 
          alignItems="center"
          borderBottom="1px solid"
          bgColor="white"
          borderColor="border"
          _hover={{bgColor: 'soft'}}
          p="1rem"
        >
          <Flex alignItems="center">
            <Text 
              mr="1rem"
              border="1px solid"
              borderColor="primary"
              color="darkPrimary"
              w="30px"
              fontWeight="medium"
              fontSize="0.7rem"
              h="30px"
              display="flex"
              justifyContent="center"
              borderRadius="50%"
              alignItems="center"
            >
              {surah.number}</Text>
            <Box>
              <Heading color="darkPrimary" fontSize="1rem">{surah.name.transliteration.id}</Heading>  
              <Text fontSize="0.7rem" color="secondary">{surah.name.translation.id}</Text>
            </Box>
          </Flex>
          <Heading fontSize="1.8rem" color="primary" fontFamily="Scheherazade">{surah.name.short}</Heading>
        </Flex>
      </a>
    </Link>
  )
}

export default ListSurah;