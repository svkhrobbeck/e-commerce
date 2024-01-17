import { IProduct } from "@/interfaces";
import Link from "next/link";
import { FC } from "react";
import { CustomImage } from ".";

const Product: FC<IProduct> = product => {
  return (
    <Link
      className="bg-gray-100 p-4 rounded-lg flex flex-col group hover:scale-105 transition-transform ease-out duration-200 border"
      href={`/products/${product.id}`}
    >
      <div className="w-full relative max-h-[300px] h-full bg-white overflow-hidden rounded-md mb-6">
        <CustomImage {...product} />
      </div>
      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
        {product.category}
      </h3>
      <div className="font-semibold flex items-center justify-between mt-4 mb-1">
        <p className="w-44 truncate">{product.title}</p>
        <p>${product.price}</p>
      </div>
      <p className="leading-relaxed text-base line-clamp-2">
        {product.description}
      </p>
    </Link>
  );
};

export default Product;
