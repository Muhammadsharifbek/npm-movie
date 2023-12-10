import "../scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";

import "./modules/axios";
import axios from "axios";
import getMovies from "./modules/request";
import { renderMovies } from "./modules/render";
import * as els from "./modules/elements.js";
import { switchLoader } from "./modules/helpers";
import { PARAMS } from "./modules/constants";

getMovies("/movie/upcoming", PARAMS)
  .then((data) => {
    switchLoader(true, els.elIndexLoader);
    renderMovies(data.results, els.elUpcomingMovies);
    switchLoader(false, els.elIndexLoader);
  })
  .catch((err) => {
    console.log(err);
    switchLoader(false, els.elIndexLoader);
  });

// getMovies("/movie/popular", params)
//   .then((data) => {
//     console.log(data);
//     renderMovies(data.results, els.elPopularMovies);
//   })
//   .catch((err) => console.log(err));

// getMovies("/movie/top_rated", params)
//   .then((data) => renderMovies(data.results, els.elTopRatedMovies))
//   .catch((err) => console.error(err));
