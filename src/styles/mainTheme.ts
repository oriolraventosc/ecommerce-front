import { createTheme } from "@mui/material";

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#002e34",
      dark: "#004443",
      contrastText: "#00c16c",
      light: "#90ff17",
    },
  },
  shape: {
    borderRadius: 5,
  },
});

export default mainTheme;
