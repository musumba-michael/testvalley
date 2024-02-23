export type Banner = {
  title: string;
  sort: number;
  linkUrl: string;
  mainBannerId: number;
  mobileImageUrl: string;
  pcImageUrl: string;
  startDate: string;
  updater: string;
  updatedAt: string;
  endDate: string;
  creator: string;
  createdAt: string;
  deletedAt?: string;
  deleter?: string;
};

export type GetBannerQueryParams = {};

export type Shortcut = {
  title: string;
  sort: number;
  linkUrl: string;
  imageUrl: string;
  mainShortcutId: number;
  updater: string;
  updatedAt: string;
  creator: string;
  createdAt: string;
  deletedAt?: string;
  deleter?: string;
};

export type GetShortcutQueryParams = {};

export enum TypeMedia {
  COVER = "COVER",
  THUMBNAIL = "THUMBNAIL",
  DETAIL = "DETAIL",
}

export type Thumbnail = {
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  uuid: string;
  mimeType: string;
  uri?: string;
  fileName: string;
  objectKey: string;
  deviceType?: string;
  collectionId: number;
  seq: number;
  itemKey?: string;
  type: TypeMedia;
};

export enum EntityType {
  PUBLICATION = "PUBLICATION",
}

export type PublicationMedia = {
  seq: number;
  type: TypeMedia;
  uri: string;
  mimeType: string;
  deviceType?: string;
};
export enum DicountType {
  INIT = "INIT",
}
export enum CalcMethod {
  AMOUNT = "AMOUNT",
}
export type Discount = {
  id: number;
  name?: string;
  type: DicountType;
  calcMethod: CalcMethod;
  value: number;
  activeFrom?: string;
  activeTo?: string;
  qty: number;
  remain?: number;
};
export type PriceInfo = {
  price: number;
  discountPrice: number;
  discountRate: number;
};
export enum OfferingType {
  PUBLICATION = "publication",
}
export enum DetailEntity {
  MEDIA = "MEDIA",
}
export type Publication = {
  id: number;
  title: string;
  code: string;
  productId: number;
  prdType: number;
  detailEntity: DetailEntity;
  content?: string;
  offeringType: OfferingType;
  rating: number;
  isExistResidual: boolean;
  isAdult: number;
  preface: string;
  prefaceIconUrl: string;
  productName: string;
  brandName: string;
  media: PublicationMedia[];
  isTrial: boolean;
  tagsOnImage: string[];
  tagsOnDesc: string[];
  priceInfo: PriceInfo;
  discounts: Discount[];
  applyCoupon: boolean;
};
export type Item = {
  body?: string;
  createdAt: string;
  deletedAt?: string;
  collectionId: number;
  entityId: number;
  entityType: EntityType;
  key: string;
  name: string;
  optionKey?: string;
  prdType: number;
  publication: Publication;
  seq: number;
  updatedAt: string;
  uuid: string;
};

export type Media = {
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  uuid: string;
  mimeType: string;
  uri: string;
  fileName: string;
  objectKey: string;
  deviceType?: string;
  collectionId: number;
  seq: number;
  itemKey?: string;
  type: TypeMedia;
};
export type Tagging = {};

export type SingleCollection = {};

export enum CollectionType {
  SINGLE = "SINGLE",
  BUNDLE = "BUNDLE",
}
export enum ViewType {
  TILE = "TILE",
}
export type Collection = {
  id: number;
  type: CollectionType;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  trialPeriod?: string;
  installmentPrice?: string;
  installmentPeriod?: string;
  rating: number;
  startDate?: string;
  endDate?: string;
  viewType?: ViewType;
  createdAt: string;
  items: Item[];
  media: Media[];
  thumbnail?: Thumbnail;
  taggings: Tagging[];
  singleCollections: SingleCollection[];
};

export type GetCollectionQueryParams = {};
