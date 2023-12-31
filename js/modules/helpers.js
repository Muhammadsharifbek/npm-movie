// import { renderMovies } from "./render";
import { elSearchedMovies } from "./elements";
import getMovies from "./request";
let timeoutId = 0;

export const setPageTitle = (title) => {
  document.title = title;
};

export const calcVoteAverage = (rate) => {
  if (rate > 7) {
    return "green";
  } else if (rate < 7 && rate >= 6) {
    return "yellow";
  } else if (rate < 6 && rate >= 5) {
    return "orange";
  } else if (rate < 5) {
    return "crimson";
  }
};

export const switchLoader = (isLoading, elLoader) => {
  if (isLoading === true) {
    elLoader.classList.remove("loader--hidden");
  } else {
    elLoader.classList.add("loader--hidden");
  }
};

export const debonce = (callback, timeout = 400) => {
  clearTimeout(timeoutId);

  timeoutId = setTimeout(callback, timeout);
};

export const onSearchInput = async (e) => {
  const query = e.target.value;

  const data = await getMovies("/search/movie", { query, page: 1 });

  elSearchedMovies.previousElementSibling.classList.remove("d-none");

  if (!query) {
    elSearchedMovies.previousElementSibling.classList.add("d-none");
  }
  debonce(() => renderMovies(data.result, elSearchedMovies));
};

export const getSearchParams = (param) => {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
};
