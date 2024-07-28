import { useGetLatestProductsQuery } from "@/redux/features/product/productApi";
import ProductCard from "./ProductCard";
import { TProduct } from "@/types/product.type";
import Container from "./Container";

const FeaturedProducts = () => {
  const { data } = useGetLatestProductsQuery(undefined);

  const products: TProduct[] = data?.data;

  return (
    <div className="py-6 sm:py-8 md:py-10">
      <Container>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center leading-tight font-bold">
          Featured Products
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-6">
          {products?.map((product: TProduct) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FeaturedProducts;
