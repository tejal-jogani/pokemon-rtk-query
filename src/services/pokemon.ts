import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiEndpoint = import.meta.env.VITE_API_ENDPOINT

/* RTK Query for pokemon apis */
export const pokemonApi = createApi({
    reducerPath: "pokemon",
    baseQuery: fetchBaseQuery({ baseUrl: apiEndpoint }),
    endpoints: (builder) => ({
        getAllPokemon: builder.query({
            query: () => `/pokemon`
        }),
        getProductById: builder.query({
            query: (id) => `/pokemon/${id}`
        })
    })
})

export const { useGetAllPokemonQuery, useGetProductByIdQuery } = pokemonApi
