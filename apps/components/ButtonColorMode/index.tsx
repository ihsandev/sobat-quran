import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'


export default function ButtonColorMode() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button onClick={toggleColorMode} variant="ghost" color="primary" size="sm">
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}