import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { VAT_PERCENTAGE } from "@/constants/cart.constant";
import {
  clearCart,
  decreaseProductQuantity,
  increaseProductQuantity,
  removeFromCart,
  selectCart,
} from "@/redux/features/cart/cartSlice";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { useAppSelector } from "@/redux/hooks";
import { TCartItem } from "@/types";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cart = useAppSelector(selectCart);
  const dispatch = useDispatch();
  const { data, isLoading } = useGetAllProductsQuery("");
  console.log(cart?.cart, data?.data);

  let subTotal: number = 0;

  cart?.cart?.forEach(
    (product: TCartItem) => (subTotal += product.price * product.quantity)
  );
  const totalVat: number = subTotal * VAT_PERCENTAGE;
  const grandTotal: number = subTotal + totalVat;

  return (
    <div className="py-6 sm:py-8 md:py-10">
      <Container>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center leading-tight font-bold">
          My Cart
        </h1>
        {cart?.cart?.length === 0 && (
          <p className="h-[50vh] flex justify-center items-center sm:text-lg font-semibold">
            Your cart is empty!
          </p>
        )}
        {cart?.cart?.length > 0 && (
          <div className="pt-5">
            {cart.cart.map((item: TCartItem) => (
              <div key={item.productId}>
                <hr />
                <div className="flex items-center gap-5 my-5">
                  <button
                    onClick={() =>
                      dispatch(
                        removeFromCart({
                          productId: item.productId,
                        })
                      )
                    }
                  >
                    <Trash2 className="text-red-500" />
                  </button>
                  <h2 className="font-medium text-center">{item.name}</h2>

                  <div className="flex items-center gap-8 ms-auto">
                    <div className="flex items-center gap-3">
                      <Button
                        onClick={() =>
                          dispatch(
                            decreaseProductQuantity({
                              productId: item.productId,
                            })
                          )
                        }
                        variant={"outline"}
                        disabled={item.quantity === 1}
                      >
                        -
                      </Button>
                      <p>{item.quantity}</p>
                      <Button
                        onClick={() =>
                          dispatch(
                            increaseProductQuantity({
                              productId: item.productId,
                            })
                          )
                        }
                        variant={"outline"}
                      >
                        +
                      </Button>
                    </div>
                    <p className="text-lg font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <hr className="my-6" />
            <div className="flex justify-between">
              <Button
                onClick={() => dispatch(clearCart())}
                variant={"destructive"}
              >
                Clear Cart
              </Button>

              <div>
                <div className="flex justify-between items-center gap-8">
                  <p className="text-lg font-medium text-right">Subtotal:</p>
                  <p className="text-lg font-bold text-right">
                    ${subTotal.toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between items-center gap-8 pt-4">
                  <p className="text-lg font-medium text-right">
                    Vat({VAT_PERCENTAGE * 100}%):
                  </p>
                  <p className="text-lg font-bold text-right">
                    ${totalVat.toFixed(2)}
                  </p>
                </div>

                <hr className="my-5" />

                <div className="flex justify-between items-center gap-8">
                  <p className="text-lg font-medium text-right">Grandtotal:</p>
                  <p className="text-lg font-bold text-right">
                    ${grandTotal.toFixed(2)}
                  </p>
                </div>

                <Button className="mt-6">Proceed to checkout</Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;
