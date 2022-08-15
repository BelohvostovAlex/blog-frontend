import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../../../services/postService";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkApi) => {
    try {
      const data = await getData("/posts");

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
