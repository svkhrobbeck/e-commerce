import { Metadata } from "next";

export const metadata: Metadata = { title: "Ecommerce | Product Not Found" };

const NotFound = () => {
  return (
    <div className="mt-24">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
    </div>
  );
};

export default NotFound;
