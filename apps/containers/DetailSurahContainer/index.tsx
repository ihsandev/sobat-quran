import { useEffect, useState } from 'react'
import { Box, Text } from "@chakra-ui/layout";
import { useRouter } from "next/dist/client/router";
import { fetchSpecificSurah } from '../../../services';
import { Spinner } from '@chakra-ui/spinner';
import { Image } from '@chakra-ui/image';

const DetailSurahContainer = () => {
  const router = useRouter()
  const { number } : any = router?.query;
  const [detailSurah, setDetailSurah] = useState<any>({})
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const getSpecificSurah = async () => {
      const result = await fetchSpecificSurah(number, setLoading);
      setDetailSurah(result.data)
    }
    getSpecificSurah()
  }, [number])

  return (
    <>
      <Box>
        <Box p="1rem">
          <Box bgColor="#672cbc" p="1rem" borderRadius="10px"
            position="relative"
            display="flex"
            overflow="hidden"
            alignItems="center"
            justifyContent="center"
          >
            <Box position="relative" zIndex="1" textAlign="center">
              <Text fontSize="1.5rem" color="whiteAlpha.900">Surah {detailSurah?.name?.transliteration.id}</Text>
              <Text fontSize="0.7rem" color="whiteAlpha.700">Ayat 1 - {detailSurah?.numberOfVerses}</Text>
              {Number(detailSurah?.number) !== 9 && (
                <Text mt="1rem" fontSize="1.5rem" color="whiteAlpha.900">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</Text>
              )}
            </Box>
            <Image
              right="-10px"
              bottom="-10px"
              w="125px"
              opacity={0.2}
              zIndex="0"
              position="absolute" 
              src="/images/quran_logo.png" alt="Logo Quran" />
          </Box>
        </Box>
        { loading ? <Box px="1rem"><Spinner /></Box> :
          detailSurah?.verses &&
          detailSurah?.verses?.map((detail: any, i: number) => {
            if(Number(detailSurah?.number) === 1) {
              delete detailSurah?.verses[0]
            }
            return (
              <Box key={i}
                borderBottom="1px solid"
                borderColor="border"
                bgColor={i % 2 === 0 ? "white" : "border"}
                p="1rem"
              >
                <Text 
                  fontSize="1.3rem" 
                  fontWeight="500"
                  mb="0.5rem" 
                  textAlign="right"
                  color="darkPrimary"
                >{detail.text.arab}</Text>
                <Text color="secondary" fontSize="0.8rem">{detail.translation.id}</Text>
              </Box>
            )
          })
        }
      </Box>
    </>
  )
}

export default DetailSurahContainer;