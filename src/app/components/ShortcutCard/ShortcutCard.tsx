import { FC } from "react";
import { Shortcut } from "../../types";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const ShortcutCard: FC<Shortcut> = (props) => {
  const { title, imageUrl } = props;
  const theme = useTheme();
  const desktopDevice = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        gap: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={imageUrl}
        alt={title}
        height={desktopDevice ? 62 : 48}
        width={desktopDevice ? 62 : 48}
      />
      <Typography
        sx={{ fontSize: desktopDevice ? "13px" : "11px", lineHeight: "15px" }}
      >
        {title}
      </Typography>
    </Box>
  );
};
