// import { splitVendorChunk } from "vite";
import moment from "moment";
import { API_IMG_URL, API_BG_URL } from "./constants";
import { calcVoteAverage } from "./helpers";

export const renderMovies = (movies = [], elWrapper) => {
  elWrapper.innerHTML = "";
  let html = "";

  movies.forEach((movie) => {
    const img = movie.poster_path ? API_IMG_URL + movie.poster_path : NOT_FOUND_IMG;
    html += `
    <div class="details-wrapper position-relative movie-card">
    <img class="movie-card__img" src="${img}" alt=${movie.original_title}/>
    <div class="position-absolute movie-card__badge movie-card__badge--${calcVoteAverage(movie.vote_average)}">${movie.vote_average.toFixed(1)}</div>
    <h2 class="movie-card__title">${movie.original_title}</h2>
    <a class="movie-card__link" href="/movie.html?movieId=${movie.id}"></a>
  </div>



    `;
  });

  if (!movies.length) {
    html = `
    <h2 class="text-center"> Movies Not Found </h2>
    `;
  }
  elWrapper.innerHTML = html;
};

export const renderMovieBanner = (movie = {}, elWrapper, slider = false) => {
  elWrapper.innerHTML = `
  <div class="movie-banner">
  <img src="${API_BG_URL + movie.backdrop_path}"/>
  <div class="movie-banner__content">
  <h2>${movie.original_title}</h2>
  <p>${movie.overview}</p>
  ${slider ? `<a href="/movie.html?movieId=${movie.id}">READ MORE</a>` : ""}
  </div>
</div>

  `;
};

export const renderMovieDetails = (movie = {}, elWrapper) => {
  elWrapper.innerHTML = `
  <span>budget: ${movie.budget.toLocaleString()}$</span>
  <br/>
  <span>release date: ${moment(movie.release_date).format("MMM Do YY")}</span>
  `;
};

export const renderMovieTrailers = (trailers = [], elWrapper) => {
  elWrapper.innerHTML = "";
  let html = "";

  trailers.forEach((trailer) => {
    html += `
          <li
            class="splide__slide"
          >
          <iframe src="https://www.youtube.com/embed/${trailer.key}"></iframe>
          </li>
    `;
  });

  elWrapper.innerHTML = html;
};

export const renderPagination = (movies, currentPage, page, totalPages, totalResults, elWrapper) => {
  elWrapper.innerHTML = "";
  let html = "";

  const pagesArr = new Array(totalPages).fill("").map((_, idx) => idx + 1);

  pagesArr.forEach((page) => {
    const isActive = page === currentPage;

    html += `
 <li class="page-item ${isActive ? "active" : ""}"><a class="page-link" href="/?page=${page}">${page}</a></li>
`;
  });

  elWrapper.innerHTML = html;
};
