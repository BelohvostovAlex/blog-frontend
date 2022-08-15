import { $axiosApi } from "../http/axiosApi";

export const getPosts = async (path) => {
  try {
    const { data } = await $axiosApi.get(path);
    return data;
  } catch (error) {
    console.log(error);
  }
};
