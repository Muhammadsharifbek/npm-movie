import "../css/style.css";
import "bootstrap/dist/css/bootstrap.css";

import "./modules/axios";
import axios from "axios";
import upcomingMovies from "./modules/upcomingMovies";
import { renderMovies } from "./modules/render";

const params = { params: { page: 2 } };

upcomingMovies("/movie/upcoming", params)
  .then((data) => {
    renderMovies(data.results, document.querySelector("[data-upcoming]"));
  })
  .catch((err) => console.log(err));
