import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../../../services/postService";

export const fetchTags = createAsyncThunk(
  "posts/fetchTags",
  async (_, thunkApi) => {
    try {
      const data = await getData("/tags");

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
