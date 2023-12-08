import { createTheme } from "@mui/material";
 
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 375,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1980,
    },
  },

  palette: {
   
    secondary: {
      main: "#F5F5F5",
      light: "#FFFFFF",
      dark: "#D9D9D9",
      contrastText: "#000000",
    },
    error: {
      main: "#f44336",
    },
  },
});
