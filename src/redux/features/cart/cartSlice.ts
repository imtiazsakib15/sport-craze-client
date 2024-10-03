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
    addToCart: (state, action: PayloadAction<string>) => {
      const existingItem = state?.cart?.find(
        (item) => item.productId === action.payload
      );
      if (existingItem) {
        existingItem.quantity = existingItem.quantity + 1;
      } else {
        state?.cart?.push({ productId: action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state?.cart?.filter((item) => item.productId !== action.payload);
    },

    clearCart: (state) => {
      state.cart.length = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
