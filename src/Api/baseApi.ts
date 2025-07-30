import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi(
    {
        reducerPath: "baseApi",
        baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
        endpoints: (builder) => ({
            getBooks: builder.query({
                query: () => "/books"
            }),
            addBook: builder.mutation({
                query: (bookData) => ({
                    url: "/books",
                    method: "POST",
                    body: bookData,
                }),
            }),

            getBookById: builder.query({
                query: (id) => `/books/${id}`,
            }),

            updateBook: builder.mutation({
                query: ({ id, ...patch }) => ({
                    url: `/books/${id}`,
                    method: "PATCH",
                    body: patch,
                }),
            }),


        })
    }
)

export const { useGetBooksQuery, useAddBookMutation, useUpdateBookMutation, useGetBookByIdQuery } = baseApi;