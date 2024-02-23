import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";
import { Publication } from "../../../types";
import StarRateIcon from "@mui/icons-material/StarRate";

export const CollectionCard: FC<Publication> = (props) => {
  const { media, title, priceInfo, applyCoupon, rating } = props;
  return (
    <Card elevation={0}>
      <CardMedia sx={{ height: 140 }} image={media[0].uri} title={title} />
      <CardContent>
        <Typography>{title}</Typography>
        <Typography>
          {priceInfo.discountRate} % {priceInfo.discountPrice}
        </Typography>
        {applyCoupon && <Typography>coupon</Typography>}
        <Typography>
          <StarRateIcon />
          {rating}
        </Typography>
      </CardContent>
    </Card>
  );
};
