const addMovieBtn = document.getElementById("add-movie-btn");
const serachBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filterMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filterMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    // 객체에 특정 한목이 포함되었는지 확인하는 방법
    if ("info" in movie) {}
    // 객체 구조 분해
    const { info, ...otherProps } = movie;
    // 분해한 객체를 다시 분해해보기
    // 객체 구조 분해에서 새롭게 변수명을 지정하고 싶다면 : 키워드를 사용하자
    const { title: movieTitle } = info;
    console.log(otherProps);
    let text = movieTitle + " - ";
    for (const key in info) {
      if (key !== "title") {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    // 값이 "title"과 같이 변수에 하드코딩 되어 있는 경우에는 생략이 불가능하다.
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
  };

  movies.push(newMovie);
  console.log(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
serachBtn.addEventListener("click", searchMovieHandler);
