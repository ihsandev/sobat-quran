import { Flex, useColorMode } from "@chakra-ui/react";
import useAppContext from "../../../contexts";
import useConstants from "../../../hooks/useConstans";
import { MenuIcon } from "../../components";

const Footer = () => {
  const { colorMode } = useColorMode();
  const { menus } = useConstants();
  return (
    <Flex
      as="footer"
      maxW="414px"
      m="0 auto"
      justifyContent="space-between"
      alignItems="center"
      color={colorMode === "dark" ? "primary" : "darkPrimmary"}
      position="fixed"
      px="1rem"
      left={0}
      zIndex={99}
      right={0}
      bottom={0}
      py="0.5rem"
      bgColor={colorMode === "dark" ? "gray.800" : "white"}
      boxShadow="0px -2px 20px rgba(0,0,0,0.1)"
    >
      {menus.map((menu) => (
        <MenuIcon
          key={menu.id}
          label={menu.label}
          link={menu.link}
          icon={menu.icon}
          isActive={menu.isActive}
          counter={menu.counter}
        />
      ))}
    </Flex>
  );
};

export default Footer;
