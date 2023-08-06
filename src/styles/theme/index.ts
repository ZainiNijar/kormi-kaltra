import { extendTheme } from "@chakra-ui/react";
import { config } from "./config";
import { foundations } from "./foundations";

export const theme = extendTheme({
  config,
  ...foundations,
  // components,
  styles: {
    global: {
      body: {
        bg: "#ffffff",
        color: "gray.800",
      },
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  colors: {
    dark: '#03001C',
    primary: '#301E67',
    secondary: '#5B8FB9',
    light: '#B6EADA',
  },
});
