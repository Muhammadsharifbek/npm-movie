import calcVoteAverage from "./calcVoteAverage";
import { API_IMG_URL } from "./constants";

export const renderMovies = (movies = [], elWrapper) => {
  elWrapper.innerHTML = "";
  let html = "";

  movies.forEach((movie) => {
    html += `
    <div class="movie-card">
    <img class="movie-card__img" src=${API_IMG_URL + movie.poster_path}  alt=${movie.original_title} />
    <div class="movie-card__badge--${calcVoteAverage(movie.vote_average)}"${movie.vote_average.toFixed(1)}></div>

    <h2 class="movie-card__title">${movie.original_title}</h2>
  </div>



    `;
  });
  elWrapper.innerHTML = html;
};

export default renderMovies;

// Check the type of movies
