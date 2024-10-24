import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPosts: [],
  userPosts: [],
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      console.log(state);
      if (state.length > 0) {
        state.allPosts = [action.payload, ...state.allPosts];
      }
      state.allPosts = action.payload;
    },
    updateAllPostsWithSinglePost: (state, action) => {
      state.allPosts.push(action.payload);
      state.allPosts.sort(
        (a, b) => new Date(b.create_time) - new Date(a.create_time)
      );
    },
    setUserPosts: (state, action) => {
      console.log(action.payload);
      state.userPosts = action.payload;
      state.userPosts.sort((a, b) => {
        console.log(new Date(a.create_time));
        return new Date(b.create_time) - new Date(a.create_time);
      });
    },
    updateUserPostsWithSinglePost: (state, action) => {
      state.userPosts.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setPosts,
  setUserPosts,
  updateAllPostsWithSinglePost,
  updateUserPostsWithSinglePost,
} = postSlice.actions;

export default postSlice.reducer;
