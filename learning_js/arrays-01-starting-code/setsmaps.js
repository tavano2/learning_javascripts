
// sets 활용
// const ids = new Set(["Hi", "From", "Set"]);
// ids.add(2);
// ids.delete("Hisdfsdf");

// for(const entry of ids.entries()) {
//     console.log(entry[0]);
// }

// maps 활용
// const person1 = {name: "Max"};
// const person2 = {name:"Manuel"};


// // maps 생성 방법
// const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);

// // maps 추가하는 방법
// personData.set(person2, [{ date: "two weeks ago", price: 100}]);



// console.log(personData);
// console.log(personData.get(person1));

// // maps의 모든 데이터 출력 방법
// // 엔트리의 첫번째 요소는 키, 두번째 요소는 값이다.

// for (const entry of personData.entries()) {
//     console.log(entry);
// }

// for (const [key, value] of personData.entries()) {
//     console.log(key, value);
// }

// // 2. 이 방식이 자원소모가 적고 간결함
// for (key of personData.keys()) {
//     console.log(key);
// }

// for (value of personData.values()) {
//     console.log(value);
// }

// // map의 모든 데이터 삭제
// personData.clear();
// // map에 키가 있는지 확인
// personData.has(person1);

// WeekSet 활용
let person = {name : "Max"};
const persons = new WeakSet();
persons.add(person);

// ... 여러 작업후 person 가비지 처리 코드
// 만일 이 시점에서 Set으로 선언했다면
// 객체를 우지 않고 그대로 둔다.
// 하지만 WeekSet은 null 진입시에 가바지로 보내어
// 더 이상 코드의 일부로 남아 있지 않도록 한다.
// person = null;

console.log(persons);

// WeekMap 활용
const personData = new WeakMap();
personData.set(person, "Extra Info!");

person = null;

console.log(personData);


