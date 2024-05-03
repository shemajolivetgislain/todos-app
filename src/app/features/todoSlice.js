import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    singleTodo: null,
    allTodosSize: 0,
    incompleteTodosSize: 0,
    completeTodosSize: 0,
  },

  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    setSingleTodo: (state, action) => {
      state.singleTodo = action.payload;
    },
    setAllTodos: (state, action) => {
      state.allTodosSize = action.payload;
    },
    setImcompleteTodos: (state, action) => {
      state.incompleteTodosSize = action.payload;
    },
    setCompleteTodos: (state, action) => {
      state.completeTodosSize = action.payload;
    },
  },
});

export default todosSlice.reducer;
export const {
  setTodos,
  setSingleTodo,
  setAllTodos,
  setCompleteTodos,
  setImcompleteTodos,
} = todosSlice.actions;
