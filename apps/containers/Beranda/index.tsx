import { Box, Flex, useColorMode } from "@chakra-ui/react";
import { Greetings } from "../../components";

const BerandaContainer = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      bgColor={colorMode === "dark" ? "gray.800" : "white"}
      flex={1}
      minH="calc(100vh - 10vh)"
    >
      <Box flex={1}>
        <Greetings />
      </Box>
    </Flex>
  );
};

export default BerandaContainer;
