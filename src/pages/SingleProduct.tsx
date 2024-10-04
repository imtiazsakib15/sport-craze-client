import AddToCartButton from "@/components/AddToCartButton";
import Container from "@/components/Container";
import { useGetSingleProductQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import { PhotoView } from "react-photo-view";
import { useParams } from "react-router-dom";
import ReactStars from "react-stars";
import "react-photo-view/dist/react-photo-view.css";
import SingleProductSkeleton from "@/components/SingleProductSkeleton";

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
          {isLoading && <SingleProductSkeleton />}
          {product && (
            <>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center leading-tight font-bold">
                {product.name}
              </h1>
              <PhotoView src={product.image}>
                <img
                  className="w-full max-w-2xl mx-auto aspect-video rounded-md cursor-pointer mt-4 sm:mt-6 lg:mt-8"
                  src={product.image}
                  alt={product.name}
                />
              </PhotoView>
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
              <div className="mt-5 sm:mt-6 lg:mt-8">
                <AddToCartButton
                  id={product._id}
                  name={product.name}
                  price={product.price}
                />
              </div>
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
