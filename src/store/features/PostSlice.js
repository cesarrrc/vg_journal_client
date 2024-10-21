import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      console.log("setting posts");
      console.log(action.payload);
      if (state.length > 0) {
        return [action.payload, ...state];
      }
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPosts } = postSlice.actions;

export default postSlice.reducer;
