import { useEffect, useState } from "react";

import { getPosts } from "../services/postService.js";

export const useFetchData = (path) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await getPosts(path);
        setData(response);
        setErrorMsg("");
      } catch (error) {
        setErrorMsg("Cant fetch the data");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [path]);

  return { data, isLoading, errorMsg, hasError: !!errorMsg };
};
