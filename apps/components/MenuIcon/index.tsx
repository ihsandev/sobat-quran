import { Flex, Text, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { FiChrome } from "react-icons/fi";

interface IMenuIcon {
  label?: string;
  icon?: ReactNode;
  isActive?: boolean;
  link?: string | any;
}

const MenuIcon = ({ label, icon, link, isActive }: IMenuIcon) => {
  const { push } = useRouter();
  const { colorMode } = useColorMode();
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
          {icon || <FiChrome size={25} />}
        </Flex>
      ) : (
        <> {icon || <FiChrome size={25} />}</>
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
