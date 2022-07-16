import { Box } from "@chakra-ui/layout";
import Footer from "./Footer";
import Header from "./Header";

const Template = ({ children }: any) => (
  <>
    <Header />
    <Box maxW="414px" m="0 auto" pt="3rem" overflow="hidden">
      {children}
    </Box>
    <Footer />
  </>
);

export default Template;
