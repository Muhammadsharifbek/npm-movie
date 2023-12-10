import * as els from "./modules/elements";
import * as render from "./modules/render";
import getMovies from "./modules/request";
import "../scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";
import { setPageTitle } from "./modules/helpers";

const params = new URLSearchParams(window.location.search);
const movieId = params.get("movieId") || 454541;

getMovies(`/movie/${movieId}`).then((data) => {
  setPageTitle(data.original_title || "Movie");
  render.renderMovieBanner(data, els.elBannerWrapper);
  render.renderMovieDetails(data, els.elDetailsWrapper);
});

getMovies(`/movie/${movieId}/videos`).then((data) => {
  render.renderMovieTrailers(data.results, els.elTrailersBanner);
});
