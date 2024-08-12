
import axios from "axios";

export const BaseUrl = "https://jsearch.p.rapidapi.com/search";


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
      const res = await axios.request(options);
      console.log(res.data);
    } catch (error) {
        console.error(error);
    }
  };

  export default fetchData;