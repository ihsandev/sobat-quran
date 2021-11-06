import { useState } from 'react'
import Icon from "@chakra-ui/icon";
import { Box } from "@chakra-ui/layout";
import { FiPause, FiPlay } from 'react-icons/fi';

const PlayAudio = ({detail}: any) => {
  const [play, setPlay] = useState(false)

  const handlePlayAudio = (audio: any) => {
    const myAudio : any = document.getElementById(`myAudio-${audio}`);
    const duration : any = (Number(myAudio.duration)*1000).toFixed(0);
    if(myAudio.paused) {
      const playAudio = async () => {
        let play = await myAudio.play()
        if(play !== undefined) {
          await play
        };
      }
      setPlay(true)
      setTimeout(() => {
        setPlay(false)
      }, duration)
      return playAudio()
    } else {
      return myAudio.pause()
    }
  }

  return (
    <>
      <audio id={`myAudio-${detail?.audio?.primary}`} hidden>
        <source src={detail?.audio?.primary} type="audio/ogg" />
      </audio>
      <Box cursor="pointer" onClick={() => handlePlayAudio(detail?.audio?.primary)}>
        <Icon _hover={{fill: 'primary'}} as={play ? FiPause : FiPlay} mr="1rem" />
      </Box>
    </>
  )
}

export default PlayAudio;