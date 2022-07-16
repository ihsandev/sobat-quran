import { Flex, Heading, Image } from "@chakra-ui/react";

interface INotFound {
  label?: string;
}

const NotFound = ({ label }: INotFound) => {
  return (
    <Flex flex={1} minH="80vh" justifyContent="center">
      <Flex justifyContent="center" flexDirection="column" alignItems="center">
        <Image src="/illustrations/il-no-data.svg" w="200px" />
        <Heading fontSize="large" mt="1rem" color="gray.500">
          {label || "Data Tidak ditemukan!"}
        </Heading>
      </Flex>
    </Flex>
  );
};

export default NotFound;
