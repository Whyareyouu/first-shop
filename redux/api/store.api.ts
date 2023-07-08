import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ProductsModel} from "../../interfaces/product.interface";

export const storeApi = createApi({
    reducerPath: 'storeApi',
    baseQuery: fetchBaseQuery({baseUrl: "https://fakestoreapi.com/"}),
    endpoints: (build) => ({
        getProductById: build.query<ProductsModel, number>({
            query: (productId: number) => ({
                url: `products/${productId}`,
                method: "GET"
            })
        })
    })
})

export const {useGetProductByIdQuery} = storeApi