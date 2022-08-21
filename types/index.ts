export interface Product {
  id: string;
  badge: string;
  label: string;
  title: string;
  price: string;
  rating: string;
  isLike: boolean;
}

interface Tag {
  [index: string]: Array<string>;
}

interface Rating {
  nickName: string;
  rating: string;
  date: string;
  comment: string;
}

interface Detail {
  description: string;
  tag: Tag;
  rule: string;
  ratingList: Array<Rating>;
}

export type ProductDetail = Product & Detail;
