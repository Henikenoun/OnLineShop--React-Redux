import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsAPi = createApi({
    reducerPath: "productsAPi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    endpoints: (builder) => ({
        getAllProducts : builder.query({
            query: () => "products",
        }),
    }),
});

export const { useGetAllProductsQuery } = productsAPi ; 