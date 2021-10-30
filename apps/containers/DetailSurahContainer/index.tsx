import { useEffect, useState } from 'react'
import { Box, Text } from "@chakra-ui/layout";
import { useRouter } from "next/dist/client/router";
import { fetchSpecificSurah } from '../../../services';
import { Spinner } from '@chakra-ui/spinner';

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

  console.log(detailSurah)

  return (
    <>
      <Box px="1rem">
        { loading ? <Spinner /> :
          detailSurah?.verses &&
          detailSurah?.verses?.map((detail: any, i: number) => {
            return (
              <Box key={i}
                borderBottom="1px solid"
                borderColor="border"
                py="1rem"
              >
                <Text 
                  fontSize="1.5rem" 
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