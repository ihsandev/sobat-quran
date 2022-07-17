import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { addToLocalStorage } from "../../../utils/function";

interface IProps {
  title?: string;
  arabic?: string;
  desc?: string;
  number?: number | string;
  bookmark?: ReactNode;
  id?: string;
  numberAyat?: number | string;
}

const ListSurah = ({
  title,
  arabic,
  desc,
  number,
  bookmark,
  numberAyat,
}: IProps) => {
  const { push } = useRouter();
  const { colorMode } = useColorMode();
  return (
    <Box position="relative">
      {bookmark && bookmark}
      <Box
        onClick={() => {
          if (bookmark) {
            const idAyat = `ayat-${numberAyat}-${number}`;
            addToLocalStorage("id-ayat", idAyat);
          }
          push(`/surah/${number}`);
        }}
      >
        <a>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            borderBottom="1px solid"
            borderColor={colorMode === "light" ? "soft" : "darkPrimary"}
            _hover={{
              bgColor: colorMode === "light" ? "soft" : "darkPrimary",
            }}
            p="1rem"
          >
            <Flex alignItems="center">
              {!bookmark && (
                <Text
                  mr="1rem"
                  border="1px solid"
                  borderColor="primary"
                  color={colorMode === "light" ? "darkPrimary" : "soft"}
                  w="30px"
                  fontWeight="medium"
                  fontSize="0.7rem"
                  h="30px"
                  display="flex"
                  justifyContent="center"
                  borderRadius="50%"
                  alignItems="center"
                >
                  {number}
                </Text>
              )}
              <Box ml={bookmark ? "2.5rem" : "0"}>
                <Heading
                  color={colorMode === "light" ? "darkPrimary" : "soft"}
                  fontSize="1rem"
                >
                  {title}
                </Heading>
                <Text fontSize="0.7rem" color="secondary">
                  {desc}
                </Text>
              </Box>
            </Flex>
            <Heading
              fontSize="1.8rem"
              color="primary"
              fontFamily="Scheherazade"
            >
              {arabic?.slice(0, 30)}
            </Heading>
          </Flex>
        </a>
      </Box>
    </Box>
  );
};

export default ListSurah;
