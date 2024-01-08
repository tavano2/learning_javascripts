const startAddMovieButton = document.querySelector("header button");
// 두번째 방법은 header 마지막에 태그가 추가되면 사용할 수 없다.
// const startAddMovieButton = document.querySelector("header").lastElementChild;

// id로 요소를 선택할 때는 쿼리 선택자보다 getXByY가 괜찮다.
const addMovieModal = document.getElementById("add-modal");
const backDrop = document.getElementById("backdrop");
const cancelAddMovieModal = addMovieModal.children[1].firstElementChild;

const toggleBackDrop = () => {
    backDrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
    addMovieModal.classList.toggle("visible");
    toggleBackDrop();
};

const backDropClickHandler = () => {
    toggleMovieModal();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
cancelAddMovieModal.addEventListener("click", backDropClickHandler);
backDrop.addEventListener("click", backDropClickHandler);