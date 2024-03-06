import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import { StepsTheme as Steps } from "chakra-ui-steps";

/* extendTheme accepts array of theme extensions which can 
be either an object or some of built-in  theme extensions*/

/* The chakra ui is an object that contains the following keys  
colors , fonts , components , styles , config  , etc ... */
const theme = extendTheme(
  {
    components: {
      Steps,
    },
    fonts: {
      heading: `Tajawal, ${base.fonts?.heading}`,
      body: `Tajawal, ${base.fonts?.body}`,
    },

    colors: {
      brand: {
        50: "#edfff4",
        100: "#daffe8",
        200: "#a4fec6",
        300: "#6dfea4",
        400: "#36fe82",
        500: "#018D36",
        600: "#017b2f",
        700: "#015822",
        800: "#003514",
        900: "#001207",
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
  })
);

export default theme;
