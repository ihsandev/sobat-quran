import {useState, useEffect } from 'react'
import { Box } from "@chakra-ui/layout"
import { fetchAllSurah } from '../../../services'
import { Greetings, ListSurah } from '../../components'

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
        { loading ? "loading..." :
        surah.map(surah => <ListSurah key={surah.number} surah={surah} />)}
      </Box>
    </>
  )
}

export default HomeContainer;