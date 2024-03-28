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
    console.log(otherProps);
    // 분해한 객체를 다시 분해해보기
    // 객체 구조 분해에서 새롭게 변수명을 지정하고 싶다면 : 키워드를 사용하자
    // const { title: movieTitle } = info;

    // 만일 이처럼 대문자 변환 함수를 사용할땐 정상 작동하지 않는다.
    // this 키워드는 해당 메서드를 참조한 주체를 바라보므로
    // movie. 를 명시 하지 않았을 때 this는 전역 실행 컨텍스트이다.
    // 만일 객체 분해로 정상적인 this를 사용하려면 bind 혹은 call,apply 메소드를 이용한다.
    // call과 apply의 차이는 this args 뒤에 넣을 수 있는 인자의 차이이다.
    let { getFormaatedTitle } = movie;
    // getFormaatedTitle = getFormaatedTitle.bind(movie);
    let text = getFormaatedTitle.call(movie) + " - ";
    for (const key in info) {
      if (key !== "title" && key !== "_title") {
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
      set title(value) {
        if (value.trim() === "") {
          this._title = "DEFAULT";
          return;
        }
        this._title = value;
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    // 객체 내부에서 사용할 수 있는 메서드 축약어
    getFormaatedTitle() {
      return this.info.title.toUpperCase();
    },
  };

  newMovie.info.title = title;
  console.log(newMovie.info.title);

  movies.push(newMovie);
  console.log(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  console.log(this);
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
serachBtn.addEventListener("click", searchMovieHandler);
