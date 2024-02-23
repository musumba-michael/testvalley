"use client";

import { FC, useEffect, useState } from "react";
import { Banner } from "../../types";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CircleIcon from "@mui/icons-material/Circle";
import "./slider.css";
type BannerSliderProps = {
  banners: Banner[];
};
export const BannerSlider: FC<BannerSliderProps> = (props) => {
  const { banners } = props;
  const [bannerIndex, setBannerIndex] = useState(0);
  function showNextImage() {
    setBannerIndex((index) => {
      if (index === banners.length - 1) return 0;
      return index + 1;
    });
  }
  function showPreviousImage() {
    setBannerIndex((index) => {
      if (index === 0) return banners.length - 1;
      return index - 1;
    });
  }
  useEffect(() => {
    const fetchData = () => {
      showNextImage();
    };

    const intervalId = setInterval(fetchData, 4000);

    return () => clearInterval(intervalId);
  }, []);
  const theme = useTheme();
  const desktopDevice = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
          backgroundColor: "green",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            overflow: "hidden",
          }}
        >
          {banners.map((banner, index) => (
            <img
              key={banner.mainBannerId}
              src={banners[bannerIndex].pcImageUrl}
              alt={banners[bannerIndex].title}
              aria-hidden={bannerIndex !== index}
              className="img-slider-img"
            />
          ))}
        </Box>
        {desktopDevice && (
          <>
            <IconButton
              aria-label="View Previous Image"
              className="img-slider-btn left"
              onClick={showPreviousImage}
            >
              <ChevronLeftIcon />
            </IconButton>
            <IconButton
              aria-label="View Next Image"
              className="img-slider-btn right"
              onClick={showNextImage}
            >
              <ChevronRightIcon />
            </IconButton>
          </>
        )}
        <Box
          style={{
            position: "absolute",
            bottom: ".5rem",
            left: "50%",
            translate: "-50%",
            display: "flex",
            gap: ".25rem",
          }}
        >
          {banners.map((_, index) => (
            <button
              key={index}
              className="img-slider-dot-btn"
              aria-label={`View Image ${index + 1}`}
              onClick={() => setBannerIndex(index)}
            >
              {index === bannerIndex ? (
                <CircleIcon aria-hidden sx={{ color: "white" }} />
              ) : (
                <CircleIcon aria-hidden sx={{ color: "gray" }} />
              )}
            </button>
          ))}
        </Box>
      </Box>
    </>
  );
};
