"use client";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Shortcut } from "../../types";
import { FC } from "react";
import { ShortcutCard } from "@/app/components/ShortcutCard/ShortcutCard";

type ShortcutViewProps = {
  shortcuts: Shortcut[];
};
export const ShortcutView: FC<ShortcutViewProps> = (props) => {
  const { shortcuts } = props;
  const theme = useTheme();
  const desktopDevice = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      {desktopDevice ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          {shortcuts &&
            shortcuts.map((shortcut: Shortcut) => {
              return (
                <ShortcutCard key={shortcut.mainShortcutId} {...shortcut} />
              );
            })}
        </Box>
      ) : (
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: 2,
            marginBottom: 2,
            paddingLeft: 2,
          }}
        >
          {shortcuts &&
            shortcuts.map((shortcut: Shortcut) => {
              return (
                <Grid item xs={2.2} key={shortcut.mainShortcutId}>
                  <ShortcutCard {...shortcut} />
                </Grid>
              );
            })}
        </Grid>
      )}
    </>
  );
};
