import { TCartItem } from "./cart.type";

export type TOrderDetails = {
  order: {
    name: string;
    email: string;
    phoneNo: string;
    deliveryAddress: string;
    orderInfo: Pick<TCartItem, "productId" | "quantity">[];
  };
};
