import { Hero, Product } from "@/components";
import { API_ENDPOINTS } from "@/constants";
import { IProduct } from "@/interfaces";
import ProductsApi from "@/service/products";

const HomePage = async () => {
  const products: IProduct[] = await ProductsApi.get(API_ENDPOINTS.PRODUCTS);

  return (
    <div className="max-w-7xl container px-8 xl:px-0 mt-52">
      <Hero />
      <section className="flex flex-col space-y-12">
        <h1 className="text-5xl font-bold text-center uppercase">
          E-Commerce Shop Deals
        </h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map(product => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
