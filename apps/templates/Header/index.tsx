import Icon from "@chakra-ui/icon";
import { Flex, Heading } from "@chakra-ui/layout";
import { FiSearch } from 'react-icons/fi'

const Header = () => (
  <Flex maxW="414px" m="0 auto" 
    justifyContent="space-between"
    alignItems="center"
    color="darkPrimary"
    position="fixed"
    left={0}
    zIndex="99"
    right={0}
    bgColor="white"
    py="0.5rem"
  >
    <Heading fontSize="1.5rem">
      Quran App
    </Heading>
    <Icon as={FiSearch} fontSize="1.5rem" />
  </Flex>
)

export default Header;