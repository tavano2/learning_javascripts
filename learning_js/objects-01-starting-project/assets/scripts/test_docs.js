const movieList = document.getElementById("movie-list");
// movieList.style.backgroundColor = "red";
// 대괄호 표기법을 사용하면 기존의 css 프로퍼티도 접근 가능하다.
movieList.style['background-color'] = "red";
movieList.style.display = "block";

const userChosenKeyName = "level";


// 객체는 키값에 문자열을 넣을 수 있기에
// 변수명에서 사용하지 못하는 키값을 셋업할 수 있다.
let person = {
    "first name": "Max",
    age: 30,
    hobbeis: ["Sprots", "Cooking"],
    // 이 경우 userChosenKeyName에 있는 value값이 key로 지정된다.
    [userChosenKeyName]: "...",
    "greet test": function() {
        alert("Hi There!");
    },
    1.5: "hello",
};

// 객체 프로퍼티 추가, 수정, 삭제
// 아래 방법은 사용하지 않음
// person = {
//     name: "Max",
//     age: 30,
//     hobbeis: ["Sprots", "Cooking"],
//     greet: function() {
//         alert("Hi There!");
//     },
//     isAdmin: true
// };

person.age = 31;
person.isAdmin = true;
// 프로퍼티 삭제 1
// delete person.age;
// 프로퍼티 삭제 2 (undefined는 권장하진 않음)
// person.age = undefined;

// 특수한 키값에 접근하는 방법
// console.log(person["first name"]);
// console.log(person["greet test"]());
console.log(person[1.5]);

// 키값이 숫자로 이뤄진 객체는 asc 정렬되어 표시된다.

