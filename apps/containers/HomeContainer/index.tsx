import {useState, useEffect } from 'react'
import { Box } from "@chakra-ui/layout"
import { fetchAllSurah } from '../../../services'
import { Greetings, ListSurah } from '../../components'
import { LoadingListSurah } from '../../../utils/loading'
import { IListSurah } from '../../../utils/data-types'

const HomeContainer = () => {
  const [surah, setSurah] = useState<IListSurah[]>([])
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
      <Box px="1rem">
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
        surah && surah.map((surah: IListSurah) => <ListSurah key={surah.number} surah={surah} />)}
      </Box>
    </>
  )
}

export default HomeContainer;