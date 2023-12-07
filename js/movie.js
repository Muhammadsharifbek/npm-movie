import { renderMovieTrailers, renderMovieBanner, renderMovieDetails } from "./modules/render";
import { getMovies } from "./modules/request";
import "../scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";

const movieId = new URLSearchParams(window.location.search).get("movieId") || 432145;

getMovies(`/movie/${movieId}`).then((data) => {
  document.title = data.original_title || "Movie";
  renderMovieBanner(data, document.querySelector("[data-wrapper]"));
  renderMovieDetails(data, document.querySelector("[data-details]"));
});

getMovies(`/movie/${movieId}/videos`).then((data) => {
  renderMovieTrailers(data.results, document.querySelector("[data-trailers]"));
});
