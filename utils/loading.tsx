import { Box, Flex } from "@chakra-ui/layout";
import { Skeleton, SkeletonCircle } from "@chakra-ui/react";

export const LoadingListSurah = () => (
  <Flex 
    alignItems="center" 
    justifyContent="space-between" 
    mb="1rem" py="1rem"
    borderBottom="1px solid"
    bgColor="white"
    px="1rem"
    borderColor="border"
    >
    <Flex alignItems="center" flex="1">
      <SkeletonCircle w="23px" h="23px" />
        <Box ml="1rem" flex="1">
          <Skeleton w="20%" h="10px" mb="0.5rem" />
          <Skeleton w="40%" h="5px" />
        </Box>
    </Flex>
    <Skeleton w="20%" h="10px" />
  </Flex>
)