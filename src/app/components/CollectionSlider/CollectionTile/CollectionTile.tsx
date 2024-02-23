"use client";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
type CollectionTileProps = { title: string; subtitle: string };
export const CollectionTile: FC<CollectionTileProps> = (props) => {
  const { title, subtitle } = props;
  const theme = useTheme();
  const desktopDevice = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Card elevation={0}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </CardContent>
      {desktopDevice && (
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <ChevronLeftIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ChevronRightIcon />
          </IconButton>
        </CardActions>
      )}
    </Card>
  );
};
