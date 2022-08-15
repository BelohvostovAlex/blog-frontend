import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./asyncActions/fetchPosts";

const initialState = {
  posts: {
    items: [],
    isLoading: false,
    isError: "",
  },
  tags: {
    items: [],
    isLoading: false,
    isError: "",
  },
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.posts.isLoading = true;
      state.posts.isError = "";
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts.isLoading = false;
      state.posts.items = action.payload;
      state.posts.isError = "";
    },
    [fetchPosts.rejected]: (state) => {
      state.posts.isLoading = false;
      state.posts.items = [];
      state.posts.isError = "failed to fetch posts";
    },
  },
});

// export {} = postsSlice.actions
export default postsSlice.reducer;
