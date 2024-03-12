

// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = new Array("Hi", "Welcome");

// const moreNumbers = new Array(3); -> empty 3배열 생성
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);


// const hobbies = ["Cooking", "Sports"];
// const personalData = [30, "Max", {moreDetail: []}];
// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//     for (const dataPoint of data) {
//         console.log(dataPoint);
//     }
// }

// console.log(personalData[1]);

// const hobbies = ["Cooking", "Sports"];
// hobbies.push("Reading");
// hobbies.unshift("Coding");
// hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = "Coding";
// // hobbies[5] = "Reading";
// console.log(hobbies);

// hobbies.splice(1, 0, "Good Food");
// console.log(hobbies);

// hobbies.splice(0, 1);
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// // const storeResult = testResults.slice(-3, -1);
// const storeResult = testResults.concat([1, 2], [3]);

// testResults.push(1);

// console.log(testResults, storeResult);
// console.log(testResults.lastIndexOf(1.5));

// // includes
// console.log(testResults.includes(10.99));
// console.log(testResults.indexOf(10.99) !== -1);

// const personData = [{name: "Max"}, {name: "Manuel"}];
// console.log(personData.indexOf({name: "Manuel"}));

// const manuel = personData.find((person, idx, persons) => {
//     return person.name === 'Manuel';
// });

// manuel.name = "Anna";

// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//     return person.name === 'Max';
// });
// console.log(maxIndex);

// forEach 활용
// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //     taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//     const priceObj = { index: idx, taxAdjustedPrice: price * (1 + tax) };
//     taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

//map 활용
// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//     const priceObj = { index: idx, taxAdjustedPrice: price * (1 + tax) };
//     return priceObj;
// });

// // console.log(prices, taxAdjustedPrices);

// // sort 활용
// const sortPrices = prices.sort((a, b) => {
//     if (a > b){
//         return 1;
//     } else if (a === b) {
//         return 0;
//     } else {
//         return -1;
//     }
// });
// // console.log(sortPrices.reverse());
// console.log(sortPrices);

// // filter 활용
// // 이와 같이 배열 메서드에서 화살표 함수는 매우 코드를 감소시켜준다.
// const filteredArray = prices.filter(p => p > 6);


// console.log(filteredArray);


// // reduce 활용

// // let sum = 0;
// // prices.forEach(p => sum += p);
// // console.log(sum);

// // prevValue => reduce에 들어가는 첫번째 아규먼트 (초깃값) -> 그 후 최종 return값으로 바인딩됨
// // curValue =>  reduce에 매핑되어 있는 배열의 n번째 요소
// const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);
// console.log(sum);

// // split, join 활용
// const data = "new york;10.99;2000";
// const transformedData = data.split(";");
// console.log(transformedData);

// // 기본 구문자는 ,로 생성됨
// const joinData = transformedData.join(";");
// console.log(joinData);

// // 분산연산자
// // 배열 복사시
// const nameFragments = ["Max", "Schwarz"];
// const copiedNameFragments = [...nameFragments];
// nameFragments.push("Mr");
// console.log(nameFragments, copiedNameFragments);

// // Math와 같은 수학 메소드 사용시 ...args 로 변환하여 사용
// const minValue = Math.min(...prices);
// console.log(minValue);

// // 배열 복사시 자주 실수하는 것들
// const persons = [{name: "Max", age: 30}, {name:"Manuel", age:31}];
// // 객체도 같이 복사하고 싶을시에는 map 메소드 활용
// // const copiedPersons = [...persons];
// const copiedPersons = persons.map(p => ({
//     name: p.name,
//     age: p.age
// }));

// // 추가한 참조 값도 복사된다는 생각 X
// persons.push({name: "Anna", age: 29});
// // 원본 배열 내 객체를 편집할 경우 복사된 배열에도 영향을 미침. 객체는 복사되지 X
// persons[0].age = 31;



// console.log(persons, copiedPersons);

// 배열 구조 분해 구문
const nameFragments = ["Max", "Schwarz", "Mr", 30];

const [firstName, lastName, ...otherInformation] = nameFragments;
console.log(firstName);
console.log(lastName);
console.log(otherInformation);