import { FC } from "react";
import { Collection } from "../../types";
import { Grid } from "@mui/material";
import { CollectionCard } from "./CollectionCard/CollectionCard";
import { CollectionTile } from "./CollectionTile/CollectionTile";
type CollectionSliderProps = {
  collection: Collection;
};
export const CollectionSlider: FC<CollectionSliderProps> = (props) => {
  const { collection } = props;
  const { items, title, subtitle } = collection;
  return (
    <Grid container spacing={2}>
      <Grid item md={4} xs={12}>
        <CollectionTile title={title} subtitle={subtitle} />
      </Grid>
      <Grid item md={8} xs={12}>
        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid item xs={6} md={3} key={item.collectionId}>
              <CollectionCard {...item.publication} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
