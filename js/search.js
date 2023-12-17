import "../scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";

import { elIndexLoader, elMoviesWrapper } from "./modules/elements";
import { getSearchParams, switchLoader } from "./modules/helpers";
import { renderMovies } from "./modules/render";
import getMovies from "./modules/request";
import { elUpcomingMovies } from "./modules/elements";

const query = getSearchParams("query");

const url = `/search.html?query=${query}&`;

const fatches = async () => {
  const data = await getMovies("/search/movie", { query });

  switchLoader(true, elIndexLoader);
  renderMovies(data.results, elUpcomingMovies);
  switchLoader(false, elIndexLoader);
};

fatches();
