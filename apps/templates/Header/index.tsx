import { useRouter } from 'next/router'
import Link from 'next/link'
import Icon from "@chakra-ui/icon";
import { Flex, Box } from "@chakra-ui/layout";
import { FiArrowLeft } from 'react-icons/fi'
import { Image } from '@chakra-ui/image';
import ButtonColorMode from '../../components/ButtonColorMode';
import { useColorMode } from '@chakra-ui/color-mode';

const Header = () => {
  const router = useRouter();
  const { colorMode } = useColorMode()
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
      bgColor={colorMode === 'dark' ? "gray.800" : "white"}
      py="0.5rem"
    >
        <Flex alignItems="center">
          {showArrow && (
            <Box onClick={() => router.back()} mr="0.6rem" cursor="pointer">
              <Icon as={FiArrowLeft} fontSize="1.2rem" />
            </Box>
          )}
        <Link href="/">
          <a>
            <Image 
              src="/icons/icon-192x192.png" 
              alt="logo-sobat-quran"
              w="25px"
              borderRadius="5px"
            />
          </a>
        </Link>
        </Flex>
        <ButtonColorMode />
      {/* <Icon as={FiSearch} fontSize="1.5rem" /> */}
    </Flex>
  )
}

export default Header;