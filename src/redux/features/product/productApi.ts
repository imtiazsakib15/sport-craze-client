import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLatestProducts: builder.query({
      query: () => ({
        url: "/products?page=1&limit=6&sort=-createdAt",
        method: "GET",
      }),
    }),

    getAllProducts: builder.query({
      query: (filterParams: string) => ({
        url: filterParams ? `/products${filterParams}` : "/products",
        method: "GET",
      }),
    }),

    getSingleProduct: builder.query({
      query: (id: string) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetLatestProductsQuery,
  useGetAllProductsQuery,
  useGetSingleProductQuery,
} = productApi;
