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
    navigate(`/products?searchTerm=${name}`);
    form.reset();
  };

  return (
    <>
      <Container>
        <div className="flex flex-col lg:flex-row w-full gap-5 pt-4 sm:pt-6 lg:pt-8">
          <div className="flex flex-col sm:flex-row w-full gap-5">
            {/* Search by category */}
            <Select
              onValueChange={(category) =>
                navigate(`/products?category=${category}`)
              }
            >
              <SelectTrigger className="">
                <SelectValue placeholder="Search by category" />
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

            {/* Search by rating */}
            <Select
              onValueChange={(rating) => navigate(`/products?rating=${rating}`)}
            >
              <SelectTrigger className="">
                <SelectValue placeholder="Search by rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0</SelectItem>
                <SelectItem value="0.5">0.5</SelectItem>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="1.5">1.5</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="2.5">2.5</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="3.5">3.5</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="4.5">4.5</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col sm:flex-row w-full gap-5">
            {/* Sort by price */}
            <Select
              onValueChange={(sort) => navigate(`/products?sort=${sort}`)}
            >
              <SelectTrigger className="">
                <SelectValue placeholder="Sort by price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="-price">High to low</SelectItem>
                <SelectItem value="price">Low to high</SelectItem>
              </SelectContent>
            </Select>

            {/* Search by name */}
            <form
              onSubmit={handleSearch}
              className="relative w-full  items-center space-x-2"
            >
              <Input name="name" type="text" placeholder="Search by name" />
              <button className="absolute right-2.5 top-2.5 cursor-pointer text-gray-600">
                <Search className="size-5" />
              </button>
            </form>
          </div>

          {/* Clear filter */}
          <button
            onClick={() => navigate("/products")}
            className="px-3 py-2 border rounded-md bg-red-500 hover:bg-red-600 text-white font-medium  shrink-0 w-max ms-auto"
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
