import { PItag } from "@/type/tag";
import { PImedia } from "./media";
import { PIproducts } from "./products";
import { PIseoMeta } from "./Seo";
import { PIcomment } from "./comment";
import { PIfaq } from "./faq";

export interface PIproduct {
  seoMeta: PIseoMeta;
  media: PImedia[];
  productData: PIproductData;
  otherProducts: PIproducts[];
  comments: PIcomments;
}
export interface PIproductData {
  title: string;
  isVerified: boolean;
  tags: PItag[];
  descriptionTitle: string;
  productDescription: string;
  separators: PIseparator[];
  authorDescription: string;
  aboutProductTitle: string;
  aboutProduct: string;
  aboutCompanyTitle: string;
  aboutCompany: string;
  faq: PIfaq[];
}

export interface PIseparator {
  id: number;
  title: string;
  description: string;
}

export interface PIcomments {
  items: PIcomment[];
  average_rate: number;
  total_comments: number;
}
