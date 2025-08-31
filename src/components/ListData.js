import axios from "axios";
import { useEffect, useState } from "react";

const ListData = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const fetchApi = async () => {
        const res = await axios.get(url);
        console.log(res.data);
        setData(res.data);
        setLoading(false);
      };
      fetchApi();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return { data, loading };
};
export default ListData;
