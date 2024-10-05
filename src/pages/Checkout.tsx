import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Container from "@/components/Container";
import {
  CONTACT_FORM_FIELDS,
  CONTACT_FORM_SCHEMA,
} from "@/constants/checkout.constant";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Loader2 } from "lucide-react";
import { TContactFormField, TOrderDetails } from "@/types";
import { useCreateOrderMutation } from "@/redux/features/cart/cartApi";
import { clearCart, selectCart } from "@/redux/features/cart/cartSlice";
import { toast } from "@/components/ui/use-toast";

const Checkout = () => {
  const form = useForm<z.infer<typeof CONTACT_FORM_SCHEMA>>({
    resolver: zodResolver(CONTACT_FORM_SCHEMA),
    defaultValues: { name: "", email: "", phoneNo: "", deliveryAddress: "" },
  });
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);

  const onSubmit = async (data: z.infer<typeof CONTACT_FORM_SCHEMA>) => {
    try {
      const orderDetails: TOrderDetails = {
        order: {
          ...data,
          orderInfo: cart.cart.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
          })),
        },
      };
      const result = await createOrder(orderDetails).unwrap();
      if (result?.success) {
        toast({
          title: result.message || "Order created successfully",
        });
        dispatch(clearCart());
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      toast({
        title: error?.data?.message || "An error occured",
      });
    }
  };

  return (
    <Container>
      <div className="py-6 sm:py-8 lg:py-12">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center">
          Checkout
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="sm:w-2/3 space-y-6 mx-auto"
          >
            {CONTACT_FORM_FIELDS.map((formField: TContactFormField) => (
              <FormField
                control={form.control}
                name={formField.formName}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{formField.formLabel}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            {isLoading ? (
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button type="submit">Place Order</Button>
            )}
          </form>
        </Form>
      </div>
    </Container>
  );
};

export default Checkout;
