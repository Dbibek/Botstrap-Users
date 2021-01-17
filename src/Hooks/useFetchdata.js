import axios from "axios";
import { useState, useEffect } from "react";


const URL="https://jsonplaceholder.typicode.com/users"

const useFetchdata = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchdeData = axios
      .get(URL)
      .then((response) => setUsers(response.data));
    return () => {
      fetchdeData();
    };
  }, []);
  return { users };
};
export default useFetchdata;
