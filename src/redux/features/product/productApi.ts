import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLatestProducts: builder.query({
      query: () => ({
        url: "/products?page=1&limit=6&sort=-createdAt",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetLatestProductsQuery } = productApi;
