import { configureStore } from "@reduxjs/toolkit";
import exampleSlice from "./ExampleSlice";

export default configureStore({
  reducer: {
    example: exampleSlice,
  },
});
