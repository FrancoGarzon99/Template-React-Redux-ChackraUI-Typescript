// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  xs: "400px",
  sm: "576px",
  md: "768px",
  lg: "1000px",
  xl: "1200px",
  xxl: "1400px",
});

const ThemeChakra = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontSize: {
          base: "11px",
          xs: "13px",
          sm: "14px",
          md: "16px",
        },
        fontFamily: "Poppins",
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
      },
    },
  },
  colors: {
    fontPrimary: "#fff",
    fontSecondary: "#3D5170",
    colorPrimary: "#FF0042",
    colorSecondary: "#E97F00",
    colorGradient: "linear-gradient(90deg, #FF0042 0%, #E97F00 101.62%)",
  },
  fonts: {
    primary: "Poppins",
    secondary: "Roboto",
  },
  breakpoints,
});

export default ThemeChakra;
