import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import { Input } from "@/components/ui/input";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import { Search } from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AllProducts = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data, isLoading } = useGetAllProductsQuery(location.search, {
    pollingInterval: 30000,
  });
  const products: TProduct[] = data?.data;

  const handleSearch = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");
    navigate(`/all-products?searchTerm=${name}`);
    console.log(name);
  };

  return (
    <>
      <Container>
        <div className="flex justify-between items-center pt-4 sm:pt-6 lg:pt-8">
          <div></div>
          <form
            onSubmit={handleSearch}
            className="relative w-full max-w-sm items-center space-x-2"
          >
            <Input name="name" type="text" placeholder="Product Name" />
            <button className="absolute right-2.5 top-2.5 cursor-pointer text-gray-600">
              <Search className="size-5" />
            </button>
          </form>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 py-4 sm:py-6 lg:py-8">
          {isLoading ? (
            <>
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
            </>
          ) : (
            products?.map((product: TProduct) => (
              <ProductCard key={product._id} {...product} />
            ))
          )}
        </div>
      </Container>
    </>
  );
};

export default AllProducts;
