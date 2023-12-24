import * as els from "./modules/elements";
import * as render from "./modules/render";
import getMovies from "./modules/request";
import "../scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";
import { setPageTitle } from "./modules/helpers";

const params = new URLSearchParams(window.location.search);
const movieId = params.get("movieId") || 454541;

const fetches = async () => {
  //1
  const movie = await getMovies(`/movie/${movieId}`).setPageTitle(movie.original_title || "Movie");
  render.renderMovieBanner(movie, els.elBannerWrapper);
  render.renderMovieDetails(movie, els.elDetailsWrapper);

  //2
  const videos = await getMovies(`/movie/${movieId}/videos`);
  render.renderMovieTrailers(videos.results, els.elTrailersBanner);
};

fetches();
