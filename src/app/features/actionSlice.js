import { createSlice } from "@reduxjs/toolkit";

const todosActionsSlice = createSlice({
  name: "todoAction",
  initialState: {
    openTodosAction: false,
    languageChange: false,
  },
  reducers: {
    setOpenTodosAction: (state, action) => {
      state.openTodosAction = action.payload;
    },
    setLanguageChange: (state, action) => {
      state.languageChange = action.payload;
    },
  },
});

export default todosActionsSlice.reducer;

export const { setOpenTodosAction, setLanguageChange } =
  todosActionsSlice.actions;
