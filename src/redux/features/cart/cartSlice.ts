import { RootState } from "@/redux/store";
import { TCartItem } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  cart: TCartItem[];
} = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<TCartItem, "quantity">>) => {
      const { productId, name, price } = action.payload;
      const existingItem = state?.cart?.find(
        (item) => item.productId === productId
      );
      if (existingItem) {
        existingItem.quantity = existingItem.quantity + 1;
      } else {
        state?.cart?.push({ productId, name, quantity: 1, price });
      }
    },

    removeFromCart: (state, action: PayloadAction<{ productId: string }>) => {
      state.cart = state?.cart?.filter(
        (item) => item.productId !== action.payload.productId
      );
    },

    increaseProductQuantity: (
      state,
      action: PayloadAction<{ productId: string }>
    ) => {
      const existingItem = state?.cart?.find(
        (item) => item.productId === action.payload.productId
      );
      if (existingItem) {
        existingItem.quantity = existingItem.quantity + 1;
      }
    },

    decreaseProductQuantity: (
      state,
      action: PayloadAction<{ productId: string }>
    ) => {
      const existingItem = state?.cart?.find(
        (item) => item.productId === action.payload.productId
      );
      if (existingItem) {
        existingItem.quantity = existingItem.quantity - 1;
      }
    },

    clearCart: (state) => {
      state.cart.length = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseProductQuantity,
  decreaseProductQuantity,
  clearCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

export const selectCart = (state: RootState) => state.cart;
