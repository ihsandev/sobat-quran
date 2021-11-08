import { Box } from "@chakra-ui/layout";
import MetaTag from "../components/Meta";
import Header from "./Header";

const Template = ({children}: any) => (
  <>
    <MetaTag />
    <Header />
    <Box maxW="414px" m="0 auto" pt="3rem">
      {children}
    </Box>
  </>
)

export default Template;