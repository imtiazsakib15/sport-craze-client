import { baseApi } from "@/redux/api/baseApi";
import { TProduct } from "@/types";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (productDetails: Omit<TProduct, "_id">) => ({
        url: "/products",
        method: "POST",
        body: { product: productDetails },
      }),
      invalidatesTags: ["products"],
    }),

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
      providesTags: ["products"],
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
  useCreateProductMutation,
  useGetLatestProductsQuery,
  useGetAllProductsQuery,
  useGetSingleProductQuery,
} = productApi;
