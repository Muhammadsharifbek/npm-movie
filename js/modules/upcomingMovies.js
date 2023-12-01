import renderMovies from "./render";
const elWrapper = document.querySelector("[data-upcoming]");

const upcomingMovies = (movie) => {
  renderMovies(movie, elWrapper);
};

export default upcomingMovies;
