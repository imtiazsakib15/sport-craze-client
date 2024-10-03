import { useAppDispatch } from "@/redux/hooks";
import { Button } from "./ui/button";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { toast } from "./ui/use-toast";

const AddToCartButton = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const handleAddToCart = (id: string) => {
    dispatch(addToCart(id));
    toast({
      title: "Item Added to Cart",
      description: "Check your cart to see the item",
    });
  };
  return (
    <>
      <Button
        onClick={() => handleAddToCart(id)}
        className="bg-green-700 hover:bg-green-600"
      >
        Add to Cart
      </Button>
    </>
  );
};

export default AddToCartButton;
