import {useState, useEffect } from 'react'
import { Box } from "@chakra-ui/layout"
import { fetchAllSurah } from '../../../services'
import { Greetings, ListSurah } from '../../components'
import { Spinner } from '@chakra-ui/react'

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
      <Box flex="1" bgColor="white">
        { loading ? <Spinner /> :
        surah.map((surah: any) => <ListSurah key={surah.number} surah={surah} />)}
      </Box>
    </>
  )
}

export default HomeContainer;