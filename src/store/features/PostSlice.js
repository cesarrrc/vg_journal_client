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
    add10Posts: (state, action) => {
      console.log(action.payload, "this is the payload");
      state.allPosts.push(...action.payload);
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
      state.userPosts.sort(
        (a, b) => new Date(b.create_time) - new Date(a.create_time)
      );
    },
    updatePostWithLike: (state, action) => {
      const { user_id, post_id } = action.payload;
      const itemIndex = state.allPosts.findIndex(
        (post) => Number(post.id) === Number(post_id)
      );
      console.log(itemIndex);
      if (itemIndex !== -1) {
        state.allPosts[itemIndex].all_likes.push(user_id);
        state.allPosts[itemIndex].total_likes++;
      }
    },
    updatePostWithoutLike: (state, action) => {
      const { user_id, post_id } = action.payload;
      const itemIndex = state.allPosts.findIndex(
        (post) => Number(post.id) === Number(post_id)
      );
      console.log(itemIndex);
      if (itemIndex !== -1) {
        state.allPosts[itemIndex].all_likes = state.allPosts[
          itemIndex
        ].all_likes.filter((id) => Number(id) !== Number(user_id));
        state.allPosts[itemIndex].total_likes--;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setPosts,
  setUserPosts,
  updateAllPostsWithSinglePost,
  updateUserPostsWithSinglePost,
  updatePostWithLike,
  updatePostWithoutLike,
  add10Posts,
} = postSlice.actions;

export default postSlice.reducer;
