import { configureStore } from "@reduxjs/toolkit";
import dragOnDrop from "../features/slices/issuesSlice"

const store = configureStore({
    reducer:dragOnDrop,
});
  
  export default store;