import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi(
    {
        reducerPath: "baseApi",
        baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
        tagTypes: ["Book", "Borrow"],
        endpoints: (builder) => ({
            getBooks: builder.query({
                query: () => "/books",
                providesTags: (result) =>
                    result?.data
                        ? [...result.data.map(({ _id }: any) => ({ type: "Book" as const, id: _id })), { type: "Book", id: "LIST" }]
                        : [{ type: "Book", id: "LIST" }],
            }),
            addBook: builder.mutation({
                query: (bookData) => ({
                    url: "/books",
                    method: "POST",
                    body: bookData,
                }),
                invalidatesTags: [{ type: "Book", id: "LIST" }],
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
                invalidatesTags: ({ id }) => [{ type: "Book", id }, { type: "Book", id: "LIST" }],
            }),

            deleteBook: builder.mutation({
                query: (id) => ({
                    url: `/books/${id}`,
                    method: "DELETE",
                }),
                invalidatesTags: (id) => [{ type: "Book", id }, { type: "Book", id: "LIST" }],
            }),

            borrowBook: builder.mutation({
                query: (data) => ({
                    url: "/borrow",
                    method: "POST",
                    body: data,
                }),
                invalidatesTags: ["Book", "Borrow"],
            }),
            getBorrowSummary: builder.query({
                query: () => "/borrow",
                providesTags: ["Borrow"],

            }),





        })
    }
)

export const { useGetBooksQuery, useAddBookMutation, useUpdateBookMutation, useGetBookByIdQuery, useDeleteBookMutation, useBorrowBookMutation, useGetBorrowSummaryQuery } = baseApi;