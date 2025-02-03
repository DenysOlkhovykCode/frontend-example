import { createSlice } from "@reduxjs/toolkit";

const exampleSlice = createSlice({
  name: "example",
  initialState: { example: [], name: "puzzle" },
  reducers: {
    addExample(state, action) {
      state.example.push({
        id: new Date().toISOString(),
        value: action.payload.value,
      });
    },
    removeExample(state, action) {
      state.example = state.example.filter((ex) => ex.id !== action.payload.id);
    },
    logExample(state, action) {
      state.example.map((obj) => console.log(obj.value));
    },
  },
});

export const { addExample, removeExample, logExample } = exampleSlice.actions;
export default exampleSlice.reducer;
