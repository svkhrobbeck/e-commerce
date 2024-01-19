import { Cta, Feature, Product } from "@/components";
import { API_ENDPOINTS } from "@/constants";
import ProductsApi from "@/service/products";

const ProductsPage = async () => {
  const products = await ProductsApi.get(API_ENDPOINTS.PRODUCTS);

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 ">
      <Feature />
      <section className="flex flex-col space-y-12">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map(product => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </section>
      <Cta />
    </main>
  );
};

export default ProductsPage;
