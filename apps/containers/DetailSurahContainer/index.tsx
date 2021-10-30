import { useEffect, useState } from 'react'
import { Text } from "@chakra-ui/layout";
import { useRouter } from "next/dist/client/router";
import { fetchSpecificSurah } from '../../../services';

const DetailSurahContainer = () => {
  const router = useRouter()
  const number = Number(router?.query?.number);
  const [detailSurah, setDetailSurah] = useState({})

  
  useEffect(() => {
    const getSpecificSurah = async () => {
      const result = await fetchSpecificSurah(number);
      setDetailSurah(result.data)
    }
    getSpecificSurah()
  }, [number])

  console.log(detailSurah)

  return (
    <>
      <Text>
        Detail {number}
      </Text>
    </>
  )
}

export default DetailSurahContainer;