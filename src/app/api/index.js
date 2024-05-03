import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LOCAL_API_URL } from "../../constants";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: LOCAL_API_URL,
  }),
  endpoints: (builder) => ({
    // GET ALL TODOS
    getAllToDos: builder.query({
      query: () => ({
        method: "GET",
        url: `/todos`,
      }),
    }),
    // Delete a single TODO by ID
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        method: "DELETE",
        url: `/todos/${id}`,
      }),
    }),
    // Create a new TODO
    createTodo: builder.mutation({
      query: ({ todo, completed, userId }) => ({
        method: "POST",
        url: `/todos/add`,
        body: { todo, completed, userId },
      }),
    }),
    // Update a single TODO by ID
    updateTodo: builder.mutation({
      query: ({ id, todo }) => ({
        method: "PUT",
        url: `/todos/${id}`,
        body: { todo },
      }),
    }),
    // 
  }),
});

export const { useLazyGetAllToDosQuery, useDeleteTodoMutation, useCreateTodoMutation , useUpdateTodoMutation } = apiSlice;
