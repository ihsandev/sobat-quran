import {useState, useEffect } from 'react'
import { Box } from "@chakra-ui/layout"
import { fetchAllSurah } from '../../../services'
import { Greetings, ListSurah } from '../../components'
import { LoadingListSurah } from '../../../utils/loading'

const HomeContainer = () => {
  const [surah, setSurah] = useState([])
  const [loading, setLoading] = useState(false)

  const getSurah = async () => {
    const result = await fetchAllSurah(setLoading)
    setSurah(result.data)
  }

  useEffect(() => {
    getSurah()    
  }, [])

  return (
    <>
      <Greetings />
      <Box bgColor="white" px="1rem">
        { loading ? (
          <>
            <LoadingListSurah />
            <LoadingListSurah />
            <LoadingListSurah />
            <LoadingListSurah />
            <LoadingListSurah />
            <LoadingListSurah />
          </>
        ) :
        surah && surah.map((surah: any) => <ListSurah key={surah.number} surah={surah} />)}
      </Box>
    </>
  )
}

export default HomeContainer;