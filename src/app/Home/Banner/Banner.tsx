import { FC } from "react";
import { Box } from "@mui/material";
import { BannerSlider } from "../../components/BannerSlider/BannerSlider";
import { Banner, GetBannerQueryParams } from "@/app/types";

async function fetchBanners(params: GetBannerQueryParams): Promise<Banner[]> {
  const response = await fetch("https://api.testvalley.kr/main-banner/all");

  if (!response.ok) {
    throw new Error(`Failed to fetch Banner: ${response.statusText}`);
  }

  const data = await response.json();

  return data;
}

export const BannerSection: FC = async () => {
  const banners = await fetchBanners({});
  return (
    <Box
      sx={{
        maxWidth: "960px",
        width: "100%",
        height: "38vh",
        margin: "0 auto",
      }}
    >
      {banners && <BannerSlider banners={banners} />}
    </Box>
  );
};
