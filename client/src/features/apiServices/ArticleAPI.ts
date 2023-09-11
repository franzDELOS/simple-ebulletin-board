import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const articleAPI = createApi({
  reducerPath: "articleAPI",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  tagTypes: ["article"],
  endpoints: (builder) => ({
    getArticle: builder.query({
      query: () => "article/",
      providesTags: ["article"],
    }),
    postArticle: builder.mutation({
      query: (articleData) => ({
        url: "article/",
        method: "POST",
        body: articleData,
      }),
      invalidatesTags: ["article"],
    }),
    updateArticle: builder.mutation({
      query: ({ articleID, articleData }) => ({
        url: `article/${articleID}`,
        method: "PUT",
        body: articleData,
      }),
      invalidatesTags: ["article"],
    }),
    deleteArticle: builder.mutation({
      query: ({ articleID }) => ({
        url: `article/${articleID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["article"],
    }),
  }),
});

export const {
  useGetArticleQuery,
  usePostArticleMutation,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
} = articleAPI;
