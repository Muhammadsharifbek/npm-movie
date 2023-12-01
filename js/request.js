import axios from "axios";

export const getUpcomingMovies = async (url, params = {}) => {
  const { data } = await axios.get(url, params);
};
