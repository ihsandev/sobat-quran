import { Badge, Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { FiHome } from "react-icons/fi";
import useAction from "../../../hooks/useAction";

interface IMenuIcon {
  label?: string;
  icon?: ReactNode;
  isActive?: boolean;
  link?: string | any;
  counter?: any;
}

const MenuIcon = ({ label, icon, link, isActive, counter }: IMenuIcon) => {
  const { push } = useRouter();
  const { getBookmark } = useAction();
  const { colorMode } = useColorMode();
  useEffect(() => {
    getBookmark();
  }, []);
  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      onClick={() => push(link)}
      position="relative"
      _hover={{ color: "primary" }}
      cursor="pointer"
    >
      {isActive ? (
        <Flex
          backgroundColor="primary"
          color="white"
          w="55px"
          h="55px"
          borderRadius="55px"
          position="absolute"
          top={-8}
          justifyContent="center"
          alignItems="center"
          boxSizing="border-box"
          transition="ease 0.5s"
        >
          {icon || <FiHome size={25} />}
        </Flex>
      ) : (
        <Box>
          {!!counter && counter > 0 && (
            <Badge
              position="absolute"
              bottom={6}
              left={3}
              bgColor="primary"
              color="white"
              fontSize="0.8rem"
              textAlign="center"
              w="18px"
              h="18px"
              rounded="full"
            >
              {counter}
            </Badge>
          )}
          {icon || <FiHome size={25} />}
        </Box>
      )}
      <Text
        mt={isActive ? "1.8rem" : "0.3rem"}
        fontSize="sm"
        fontWeight={isActive ? 600 : "normal"}
        color={isActive || colorMode === "dark" ? "primary" : "darkPrimary"}
      >
        {label}
      </Text>
    </Flex>
  );
};

export default MenuIcon;
