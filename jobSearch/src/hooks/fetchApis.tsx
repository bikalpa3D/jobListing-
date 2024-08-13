import axios from "axios";
import { useEffect, useState } from "react";
import { Data } from "../types/Jobs.types";

export const BaseUrl = "https://jsearch.p.rapidapi.com/search";

function useFetchApi(
  endpoint: string,
  query: object,
  deps: React.DependencyList
) {
  const [jobs, setJobs] = useState<Data[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchData = async (endpoint: string, query: object) => {
    const options = {
      method: "GET",
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      params: {
        ...query,
      },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY as string,
        "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST as string,
      },
    };

    try {
      setLoading(true);
      const res = await axios.request(options);

      console.log(res.data.data);
      setJobs(res?.data?.data);
      setLoading(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
      setError(false);
    }
  };

  useEffect(() => {
    fetchData(endpoint, query);
  }, deps);
  return { jobs, loading, error };
}

export default useFetchApi;
