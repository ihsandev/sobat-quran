import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "gray.50",
      },
    },
  },
  fonts: {
    heading: `Poppins, sans-serif`,
    body: `Poppins, sans-serif`,
  },
  colors: {
    primary: "#874abd",
    secondary: "#87709c",
    border: "#eae4f0",
    darkPrimary: "#493957",
    soft: "#f8f2fd",
  },
});

export default theme;
