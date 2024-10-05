import { baseApi } from "@/redux/api/baseApi";
import { TOrderDetails } from "@/types";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (orderInfo: TOrderDetails) => ({
        url: "/orders",
        method: "POST",
        body: orderInfo,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const { useCreateOrderMutation } = cartApi;
