import "../scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";

import "./modules/axios";
import axios from "axios";
import getMovies from "./modules/request";
import { renderMovies, renderPagination } from "./modules/render";
import * as els from "./modules/elements.js";
import { getSearchParams, switchLoader } from "./modules/helpers";

const fetches = async () => {
  const currentPage = getSearchParams("page");
  const { results, page, total_pages, total_results } = await getMovies("/movie/upcoming", { page: currentPage ? currentPage : 1 });

  switchLoader(true, els.elIndexLoader);
  renderMovies(results, els.elUpcomingMovies);
  renderPagination(results, currentPage, page, total_pages, total_results, els.elPagination);
  switchLoader(false, els.elIndexLoader);
};
fetches();
// getMovies("/movie/popular", PARAMS)
//   .then((data) => {
//     console.log(data);
//     renderMovies(data.results, els.elPopularMovies);
//   })
//   .catch((err) => console.log(err));

// getMovies("/movie/top_rated", PARAMS)
//   .then((data) => renderMovies(data.results, els.elTopRatedMovies))
//   .catch((err) => console.error(err));

// els.elSearchForm.addEventListener("input", onSearchInput);
