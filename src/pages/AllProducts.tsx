import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import { Input } from "@/components/ui/input";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import { Search } from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    form.reset();
  };

  return (
    <>
      <Container>
        <div className="flex justify-between items-center pt-4 sm:pt-6 lg:pt-8">
          <Select
            onValueChange={(category) =>
              navigate(`/all-products?category=${category}`)
            }
          >
            <SelectTrigger className="w-60">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cricket">Cricket</SelectItem>
              <SelectItem value="football">Football</SelectItem>
              <SelectItem value="hockey">Hockey</SelectItem>
              <SelectItem value="tennis">Tennis</SelectItem>
              <SelectItem value="basketball">Basketball</SelectItem>
              <SelectItem value="archery">Archery</SelectItem>
            </SelectContent>
          </Select>

          <form
            onSubmit={handleSearch}
            className="relative w-full max-w-xs items-center space-x-2"
          >
            <Input name="name" type="text" placeholder="Product Name" />
            <button className="absolute right-2.5 top-2.5 cursor-pointer text-gray-600">
              <Search className="size-5" />
            </button>
          </form>

          <button
            onClick={() => navigate("/all-products")}
            className="px-4 py-2 border rounded-md hover:bg-slate-100"
          >
            Clear Filter
          </button>
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
