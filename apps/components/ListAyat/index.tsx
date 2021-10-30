import { Box, Flex, Text } from "@chakra-ui/layout";

const ListAyat = ({surah}) => {
  const { number } = surah;
  return (
    <Box>
      <Flex>
        <Text>{number}</Text>
      </Flex>
    </Box>
  )
}

export default ListAyat;