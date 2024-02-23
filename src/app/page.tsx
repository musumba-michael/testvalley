"use client";
import Image from "next/image";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
  InputBase,
  Paper,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import logo from "./images/logo-mobile-new.svg";
import { BannerSection } from "./Home/Banner/Banner";
import { ShortcutSection } from "./Home/Shortcut/Shortcut";
import { CollectionsSection } from "./Home/Collections/Collection";

export default function Home() {
  const theme = useTheme();
  const desktopDevice = useMediaQuery(theme.breakpoints.up("md"));
  if (desktopDevice) {
    return (
      <Paper>
        <AppBar position="static" elevation={0}>
          <Toolbar variant="dense">
            <Image src={logo} alt="logo" />
            <Box flexGrow={1} />
            <Box
              sx={{
                position: "relative",
                borderRadius: theme.shape.borderRadius,
                backgroundColor: alpha(theme.palette.common.white, 0.15),
                "&:hover": {
                  backgroundColor: alpha(theme.palette.common.white, 0.25),
                },
                marginRight: theme.spacing(2),
                marginLeft: 0,
                width: "100%",
                [theme.breakpoints.up("sm")]: {
                  marginLeft: theme.spacing(3),
                  width: "auto",
                },
              }}
            >
              <Box
                sx={{
                  padding: theme.spacing(0, 2),
                  height: "100%",
                  position: "absolute",
                  pointerEvents: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SearchIcon />
              </Box>
              <InputBase
                placeholder="살까말까 고민된다면 검색해보세요!"
                inputProps={{ "aria-label": "search" }}
                sx={{
                  color: "inherit",
                  "& .MuiInputBase-input": {
                    padding: theme.spacing(1, 1, 1, 0),
                    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                    transition: theme.transitions.create("width"),
                    width: "100%",
                    [theme.breakpoints.up("md")]: {
                      width: "20ch",
                    },
                  },
                }}
              />
            </Box>
          </Toolbar>
        </AppBar>
        <BannerSection />
        <Container>
          <ShortcutSection />
          <CollectionsSection />
        </Container>
      </Paper>
    );
  }
  return (
    <Container>
      <Paper elevation={0}>
        <AppBar position="static" elevation={0}>
          <Toolbar variant="dense">
            <Image src={logo} alt="logo" />
            <Box flexGrow={1} />
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <NotificationsIcon />
            </IconButton>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <SearchIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <BannerSection />
        <ShortcutSection />
        <CollectionsSection />
      </Paper>
    </Container>
  );
}
