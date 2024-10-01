import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetSingleProductQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import { useParams } from "react-router-dom";
import ReactStars from "react-stars";

const SingleProduct = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id as string, {
    pollingInterval: 30000,
  });
  const product: TProduct = data?.data;

  return (
    <>
      <Container>
        <div className="py-4 sm:py-6 lg:py-8">
          {isLoading && (
            <>
              <Skeleton className="h-6 sm:h-8 lg:h-10 max-w-xs mx-auto" />
              <Skeleton className="w-full max-w-2xl mx-auto aspect-video rounded-md mt-4 sm:mt-6 lg:mt-8" />

              <Skeleton className="mt-4 max-w-60 h-6" />
              <Skeleton className="mt-4 max-w-40 h-6" />
              <Skeleton className="mt-4 max-w-40 sm:pt-3 lg:pt-4 font-semibold h-6" />

              <Skeleton className="mt-2 h-6" />
              <Skeleton className="mt-2 h-6" />
              <Skeleton className="mt-2 h-6" />
              <Skeleton className="mt-2 h-6" />
              <Skeleton className="mt-2 h-6" />

              <Skeleton className="max-w-28 h-10 mt-5 sm:mt-6 lg:mt-8" />
            </>
          )}
          {product && (
            <>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center leading-tight font-bold">
                {product.name}
              </h1>
              <img
                className="w-full max-w-2xl mx-auto aspect-video rounded-md mt-4 sm:mt-6 lg:mt-8"
                src={product.image}
                alt={product.name}
              />
              <p className="pt-4 sm:pt-6 lg:pt-8 font-medium flex items-center">
                Price: ${product.price}
                {" ("}
                <ReactStars
                  className="w-max"
                  count={5}
                  value={product.rating}
                  edit={false}
                  size={16}
                  color2={"#ffbb00"}
                />
                {")"}
              </p>

              <p className="pt-2 font-medium">Quantity: {product.quantity}</p>
              <p className="pt-2 sm:pt-3 lg:pt-4 font-semibold ">
                Description:
              </p>
              <p>{product.description}</p>
              <Button className="bg-green-700 hover:bg-green-600 mt-5 sm:mt-6 lg:mt-8">
                Add to Cart
              </Button>
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
