import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import { useLocation } from "react-router-dom";

const AllProducts = () => {
  const location = useLocation();
  const { data } = useGetAllProductsQuery(location.search);
  const products: TProduct[] = data?.data;

  return (
    <>
      <Container>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center leading-tight font-bold pt-4 sm:pt-6 lg:pt-8">
          Products
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-6">
          {products?.map((product: TProduct) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default AllProducts;
