import axios from "axios";
import { useState } from "react";

export const BaseUrl = "https://jsearch.p.rapidapi.com/search";


function useFetchApi(dep:string){
const [jobs, setJobs] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);

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
      setLoading(false)
    } catch (error) {
      setError(true);
      console.error(error);
    }finally{
      setLoading(false);
    }
  };

  return {jobs, loading,error, fetchData };
  
}

export default useFetchApi;
