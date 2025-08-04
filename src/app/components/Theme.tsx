import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000",
      paper: "#1d1d1d",
    },
  },
});

export default darkTheme;
