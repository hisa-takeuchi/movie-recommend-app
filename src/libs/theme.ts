"use client";
import { createTheme } from "@mui/material/styles";
import { Noto_Sans_JP } from "next/font/google";

const NotoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0D1B2A",
    },
    secondary: {
      main: "#FFD700",
    },
    background: {
      default: "#1B263B",
      paper: "#1C1C1C",
    },
    text: {
      primary: "#FFF",
      secondary: "#D3D3D3",
    },
  },
  typography: {
    fontFamily: `${NotoSansJP.style.fontFamily}, "Roboto", "Helvetica", "Arial", sans-serif`,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
