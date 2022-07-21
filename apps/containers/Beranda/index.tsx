import { Box, Flex } from "@chakra-ui/react";
import { Greetings } from "../../components";

const BerandaContainer = () => {
  return (
    <Flex bgColor="white" flex={1} minH="calc(100vh - 10vh)">
      <Box flex={1} bgColor="white">
        <Greetings />
      </Box>
    </Flex>
  );
};

export default BerandaContainer;
