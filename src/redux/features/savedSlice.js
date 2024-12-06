import { createSlice } from "@reduxjs/toolkit";

const savedSlice = createSlice({
  name: "saved",
  initialState: {
    savedArticles: [],
  },
  reducers: {
    addArticle: (state, action) => {
      state.savedArticles.push(action.payload);
    },
    removeArticle: (state, action) => {
      state.savedArticles = state.savedArticles.filter(
        (article) => article._id !== action.payload._id
      );
    },
  },
});

export const { addArticle, removeArticle } = savedSlice.actions;
export default savedSlice.reducer;
