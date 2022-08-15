import { $axiosApi } from "../http/axiosApi";

export const getData = async (path) => {
  try {
    const { data } = await $axiosApi.get(path);
    return data;
  } catch (error) {
    console.log(error);
  }
};
