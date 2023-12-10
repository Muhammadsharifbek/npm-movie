import "./axios";
import axios from "axios";

const getMovies = async (url, params = {}) => {
  const { data } = await axios.get(url, params);
  return data;
};

export default getMovies;
