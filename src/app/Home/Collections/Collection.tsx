import { FC } from "react";
import { CollectionSlider } from "../../components/CollectionSlider/CollectionSlider";
import {
  Collection,
  CollectionType,
  GetCollectionQueryParams,
  ViewType,
} from "@/app/types";
const fetchCollections = async (
  params: GetCollectionQueryParams
): Promise<Collection[]> => {
  const response = await fetch(
    "https://api.testvalley.kr/collections?prearrangedDiscount"
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch Collection: ${response.statusText}`);
  }

  const data = await response.json();
  const collections = data.items.filter(
    (item: Collection) =>
      item.type === CollectionType.SINGLE && item.viewType === ViewType.TILE
  );

  return collections;
};
export const CollectionsSection: FC = async () => {
  const collections = await fetchCollections({});
  return (
    <>
      {collections &&
        collections.map((collection: Collection) => (
          <CollectionSlider key={collection.id} collection={collection} />
        ))}
    </>
  );
};
