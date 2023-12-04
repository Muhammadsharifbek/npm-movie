import "../scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";

import "./modules/axios";
import axios from "axios";
import { getMovies } from "./modules/request";
import { renderMovies } from "./modules/render";

const params = { params: { page: 2 } };

getMovies("/movie/upcoming", params)
  .then((data) => {
    console.log(data);
    renderMovies(data.results, document.querySelector("[data-upcoming]"));
  })
  .catch((err) => console.log(err));
