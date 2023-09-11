import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const dummyApi = createApi({
    reducerPath: "dummyApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
     }),
    tagTypes: ["item"],
    endpoints: (builder) => ({
        getDummy: builder.query({
            query: () => "item/",
            providesTags: ["item"],
        }),
})
})
export const { useGetDummyQuery } = dummyApi;