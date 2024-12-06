import { configureStore } from "@reduxjs/toolkit";
import savedReducer from "./features/savedSlice";

const store = configureStore({
  reducer: {
    saved: savedReducer,
    // Tambahkan slice lain di sini jika diperlukan
  },
});

export default store;
