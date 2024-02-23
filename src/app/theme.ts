"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#00d094",
    },
    background: {
      default: "#f6fafb",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          height: 70,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          [theme.breakpoints.up("xs")]: {
            margin: "auto",
            minWidth: "360px",
            maxWidth: "420px",
          },
          [theme.breakpoints.up("md")]: {
            margin: "auto",
            minWidth: "360px",
            maxWidth: "960px",
          },
        }),
      },
    },
  },
});
