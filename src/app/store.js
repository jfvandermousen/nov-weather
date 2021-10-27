import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/city/citySlice";

const store = configureStore({
  reducer: {
    city: dataReducer,
  },
});

export default store;
