import { useEffect, useState } from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { useRouter } from "next/dist/client/router";
import { fetchSpecificSurah } from "../../../services";
import { Spinner } from "@chakra-ui/spinner";
import { Image } from "@chakra-ui/image";
import { FiBookmark, FiShare2 } from "react-icons/fi";
import Icon from "@chakra-ui/icon";
import PlayAudio from "./partials/Play";
import { Skeleton } from "@chakra-ui/react";
import { IDetailSurah, IVerses } from "../../../utils/data-types";

const DetailSurahContainer = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const { number }: any = router?.query;
  const [loading, setLoading] = useState(false);
  const [detailSurah, setDetailSurah] = useState<IDetailSurah | any>({});
  const isLight = colorMode === "light";

  useEffect(() => {
    const getSpecificSurah = async () => {
      const result = await fetchSpecificSurah(number, setLoading);
      setDetailSurah(result.data);
    };
    getSpecificSurah();
  }, [number]);

  return (
    <Box pb="8rem">
      <Box p="1rem">
        <Box
          bgColor="#672cbc"
          p="1rem"
          borderRadius="10px"
          position="relative"
          display="flex"
          overflow="hidden"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            display="grid"
            justifyItems="center"
            position="relative"
            zIndex="1"
            textAlign="center"
          >
            {loading ? (
              <Skeleton w="80%" h="10px" mb="1rem" />
            ) : (
              <Text fontSize="1.5rem" color="whiteAlpha.900">
                Surah {detailSurah?.name?.transliteration.id}
              </Text>
            )}
            {loading ? (
              <Skeleton w="50%" h="10px" mb="1rem" />
            ) : (
              <Text mb="1rem" fontSize="1rem" color="whiteAlpha.700">
                ({detailSurah?.name?.translation.id})
              </Text>
            )}
            {loading ? (
              <Skeleton w="30%" h="10px" />
            ) : (
              <Text fontSize="0.7rem" color="whiteAlpha.700">
                Ayat 1 - {detailSurah?.numberOfVerses}
              </Text>
            )}
            {Number(detailSurah?.number) !== 9 && (
              <Text
                mt="1rem"
                fontSize="1.8rem"
                fontWeight="bold"
                fontFamily="Scheherazade"
                color="whiteAlpha.900"
              >
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </Text>
            )}
          </Box>
          <Image
            right="-10px"
            bottom="-10px"
            w="125px"
            opacity={0.2}
            zIndex="0"
            position="absolute"
            src="/images/quran_logo.png"
            alt="Logo Quran"
          />
        </Box>
      </Box>
      {loading ? (
        <Flex justifyContent="center" px="1rem">
          <Spinner />
        </Flex>
      ) : (
        detailSurah?.verses &&
        detailSurah?.verses?.map((detail: IVerses, i: number) => {
          if (Number(detailSurah?.number) === 1) {
            delete detailSurah?.verses[0];
          }
          return (
            <Box
              key={i}
              borderBottom="1px solid"
              borderColor={isLight ? "border" : "darkPrimary"}
              px="1rem"
              py="2rem"
            >
              <Box
                bgColor={isLight ? "soft" : "darkPrimary"}
                color="primary"
                p="0.5rem"
                borderRadius="5px"
                mb="1rem"
              >
                <Flex alignItems="center" justifyContent="space-between">
                  <Box>
                    <Text
                      bgColor="primary"
                      color="white"
                      borderRadius="50%"
                      w="23px"
                      h="23px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontSize="0.7rem"
                    >
                      {detail?.number?.inSurah}
                    </Text>
                  </Box>
                  <Box>
                    <Flex alignItems="center" fontSize="1.2rem">
                      <Box cursor="pointer">
                        <Icon
                          color={isLight ? "purple.200" : "purple.900"}
                          as={FiShare2}
                          mr="1rem"
                        />
                      </Box>
                      <PlayAudio detail={detail} />
                      <Box cursor="pointer">
                        <Icon
                          color={isLight ? "purple.200" : "purple.900"}
                          as={FiBookmark}
                        />
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <Text
                fontSize="1.7rem"
                fontWeight="bold"
                mb="1rem"
                fontFamily="Scheherazade"
                textAlign="right"
                color={isLight ? "darkPrimary" : "soft"}
              >
                {detail.text.arab}
              </Text>
              <Text color="secondary" fontWeight="500" fontSize="0.8rem">
                {detail.translation.id}
              </Text>
            </Box>
          );
        })
      )}
    </Box>
  );
};

export default DetailSurahContainer;
