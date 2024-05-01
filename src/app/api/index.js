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
  }),
});

// export const {} = apiSlice;
