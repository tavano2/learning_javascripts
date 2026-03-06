const button = document.querySelector('button');
// button.onclick = function () {
//
// };

// 아래와 같이 코딩할 경우 첫번째 이벤트가 발생하지 않는다.
// const buttonClickHandler = () => {
//     alert('Button was clicked!');
// };
// const anotherButtonClickHandler = () => {
//     console.log('This was Clicked!');
// }
// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

// 교육자가 추천하는 이벤트 등록 방법
const buttonClickHandler = () => {
    alert('Button was clicked!');
};
const anotherButtonClickHandler = () => {
    console.log('This was Clicked!');
}
button.addEventListener('click', buttonClickHandler);

setTimeout(() => {
    button.removeEventListener('click', buttonClickHandler);
}, 2000);