import { useAppDispatch } from "@/redux/hooks";
import { Button } from "./ui/button";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { toast } from "./ui/use-toast";

const AddToCartButton = ({
  id,
  name,
  price,
}: {
  id: string;
  name: string;
  price: number;
}) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = ({
    id,
    name,
    price,
  }: {
    id: string;
    name: string;
    price: number;
  }) => {
    dispatch(addToCart({ productId: id, name, price }));
    toast({
      title: "Item Added to Cart",
      description: "Check your cart to see the item",
    });
  };
  return (
    <>
      <Button
        onClick={() =>
          handleAddToCart({
            id,
            name,
            price,
          })
        }
      >
        Add to Cart
      </Button>
    </>
  );
};

export default AddToCartButton;
