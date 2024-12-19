import { configureStore } from "@reduxjs/toolkit";
import savedReducer from "./features/savedSlice";

const store = configureStore({
  reducer: {
    saved: savedReducer,
  },
});

export default store;
