const startAddMovieButton = document.querySelector("header button");
// 두번째 방법은 header 마지막에 태그가 추가되면 사용할 수 없다.
// const startAddMovieButton = document.querySelector("header").lastElementChild;

// id로 요소를 선택할 때는 쿼리 선택자보다 getXByY가 괜찮다.
const addMovieModal = document.getElementById("add-modal");
const backDrop = document.getElementById("backdrop");
const cancelAddMovieButton = addMovieModal.children[1].firstElementChild;
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSections = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSections.style.display = "block";
  } else {
    entryTextSections.style.display = "none";
  }
};

const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
  updateUI();
  closeMovieDeletion();
};

const closeMovieDeletion = () => {
  toggleBackDrop();
  deleteMovieModal.classList.remove("visible");
};

const deleteMovieHandler = (moveId) => {
  deleteMovieModal.classList.add("visible");
  toggleBackDrop();
  const cancelDeletionButton = deleteMovieModal.querySelector(".btn--passive");
  let confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));

  confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

  cancelDeletionButton.removeEventListener("click", closeMovieDeletion);
  cancelDeletionButton.addEventListener("click", closeMovieDeletion);
  confirmDeletionButton.addEventListener(
    "click",
    deleteMovie.bind(null, moveId)
  );
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}"
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;
  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById("movie-list");
  listRoot.appendChild(newMovieElement);
};

const toggleBackDrop = () => {
  backDrop.classList.toggle("visible");
};

const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};

const showMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackDrop();
};

const cancelAddMovieHnadler = () => {
  showMovieModal();
};

const clearMovieInput = () => {
  for (const item of userInputs) {
    item.value = "";
  }
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid values (rating between 1 and 5).");
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  console.log(movies);
  showMovieModal();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

const backDropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletion();
  clearMovieInput();
};

startAddMovieButton.addEventListener("click", showMovieModal);
backDrop.addEventListener("click", backDropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHnadler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
