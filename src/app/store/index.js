import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api";
import todosSlice from "../features/todoSlice";
import todosActionsSlice from "../features/actionSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    todos: todosSlice,
    todosActions: todosActionsSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});
