import { ReactNode } from "react";
import { IProduct } from ".";

export interface IRootLayoutProps {
  children: ReactNode;
}

export interface CustomImageProps {
  fill?: boolean;
  width?: number;
  height?: number;
  image: string;
  title: string;
}

export interface ProductPageProps {
  params: { id: string };
}
