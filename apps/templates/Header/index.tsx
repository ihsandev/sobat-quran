import { useRouter } from 'next/router'
import Icon from "@chakra-ui/icon";
import { Flex, Heading, Box } from "@chakra-ui/layout";
import { FiSearch, FiArrowLeft } from 'react-icons/fi'

const Header = () => {
  const router = useRouter();
  const { pathname } = router;
  const showArrowPath = ['/surah/[number]']
  const showArrow = showArrowPath.includes(pathname)
  return (
    <Flex maxW="414px" m="0 auto" 
      justifyContent="space-between"
      alignItems="center"
      color="darkPrimary"
      position="fixed"
      px="1rem"
      left={0}
      zIndex="99"
      right={0}
      bgColor="white"
      py="0.5rem"
    >
        <Flex alignItems="center">
          {showArrow && (
            <Box onClick={() => router.back()} mr="1rem" cursor="pointer">
              <Icon as={FiArrowLeft} fontSize="1.2rem" />
            </Box>
          )}
          <Heading fontSize="1.5rem" color="primary">
            Quran App
          </Heading>
        </Flex>
      <Icon as={FiSearch} fontSize="1.5rem" />
    </Flex>
  )
}

export default Header;