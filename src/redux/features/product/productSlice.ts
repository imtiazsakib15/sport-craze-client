import { TProduct } from "@/types/product.type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TProduct[] = [];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

// export const {} = productSlice.actions;

export const productReducers = productSlice.reducer;
