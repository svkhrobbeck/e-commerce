"use client";

import { CustomImage } from "@/components";
import { API_ENDPOINTS } from "@/constants";
import { IProduct } from "@/interfaces";
import { ProductPageProps } from "@/interfaces/props";
import ProductsApi from "@/service/products";
import { Dialog } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/16/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProductParallelPage: FC<ProductPageProps> = ({ params }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    ProductsApi.getOne(API_ENDPOINTS.PRODUCT, params.id)
      .then(product => setProduct(product))
      .finally(() => setLoading(false));
  }, [params.id]);

  const handleCloseDialog = () => {
    setIsOpen(false);
    router.back();
  };

  const handleAddCartClick = () => {
    const products: IProduct[] =
      JSON.parse(localStorage.getItem("carts") as string) || [];

    const isExistProduct = products.find(c => c.id === product?.id);

    if (isExistProduct) {
      const updatedData = products.map(c => {
        if (c.id === product?.id) {
          return {
            ...c,
            quantity: c.quantity + 1,
          };
        }

        return c;
      });

      localStorage.setItem("carts", JSON.stringify(updatedData));
    } else {
      const data = [...products, { ...product, quantity: 1 }];
      localStorage.setItem("carts", JSON.stringify(data));
    }
    toast("Product added to your bag!!");
  };

  return (
    <Dialog open={isOpen} onClose={handleCloseDialog} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className={"mx-auto max-w-3xl rounded bg-white p-10"}>
            {loading ? (
              <div className="h-8 w-8 rounded-full border-2 border-dotted border-blue-600 animate-spin" />
            ) : (
              <div className="flex gap-x-8 h-96">
                {product?.image && (
                  <div className="relative w-72 h-full hidden md:inline">
                    <CustomImage {...product} fill />
                  </div>
                )}
                <div className="flex-1 flex flex-col">
                  <div className="flex-1">
                    <h4 className="font-semibold">{product?.title}</h4>
                    <p className="font-medium text-sm">${product?.price}</p>

                    <div className="flex items-center text-sm my-4">
                      <p>{product?.rating?.rate.toFixed(1)}</p>
                      {product?.rating?.rate && (
                        <div className="flex items-center ml-2 mr-6">
                          {Array.from(
                            {
                              length: Math.round(product.rating?.rate),
                            },
                            (_, i) => (
                              <StarIcon
                                key={i}
                                className="h-4 w-4 text-yellow-500"
                              />
                            )
                          )}
                          {Array.from(
                            {
                              length: 5 - Math.round(product.rating?.rate),
                            },
                            (_, i) => (
                              <StarIconOutline
                                key={i}
                                className="h-4 w-4 text-yellow-500"
                              />
                            )
                          )}
                        </div>
                      )}
                      <p className="text-blue-600 hover:underline cursor-pointer text-xs">
                        See all {product?.rating?.count} reviews
                      </p>
                    </div>
                    <p className="line-clamp-5 text-sm">
                      {product?.description}
                    </p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <button
                      className="button w-full bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black"
                      onClick={handleAddCartClick}
                    >
                      Add to bag
                    </button>
                    <button
                      onClick={() => location.reload()}
                      className="button w-full bg-transparent border-blue-600 hover:bg-blue-600 hover:text-white hover:border-transparent"
                    >
                      View full details
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductParallelPage;
