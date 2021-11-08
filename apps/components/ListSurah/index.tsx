import { useColorMode } from '@chakra-ui/color-mode';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Link from 'next/link'
import { IListSurah } from '../../../utils/data-types';
const ListSurah = ({surah}: {surah: IListSurah}) => {
  const { colorMode } = useColorMode()
  return (
    <Link key={surah.number} href={`/surah/${surah.number}`}>
      <a>
        <Flex 
          justifyContent="space-between" 
          alignItems="center"
          borderBottom="1px solid"
          borderColor={colorMode === 'light' ? "soft" : "darkPrimary"}
          _hover={{bgColor: colorMode === 'light' ? "soft" : "darkPrimary"}}
          p="1rem"
        >
          <Flex alignItems="center">
            <Text 
              mr="1rem"
              border="1px solid"
              borderColor="primary"
              color={colorMode === 'light' ? "darkPrimary" : "soft"}
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
              <Heading 
                color={colorMode === 'light' ? "darkPrimary" : "soft"} 
                fontSize="1rem">{surah.name.transliteration.id}</Heading>  
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