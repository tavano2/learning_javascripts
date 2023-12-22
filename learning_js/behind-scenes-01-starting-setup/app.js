var name = "Max";

if (name === "Max") {
    // var의 경우 조건문이나 반복문 문장 안에 있는 것들도
    // 전역이나 지역변수 처리가 되어 바깥에서 사용 가능하다.
    // let으로 변경시 맨 바깥에서 찍은 console에서 에러 발생.
    // var hobbies = ["Sports", "Cooking"];
    let hobbies = ["Sports", "Cooking"];
    console.log(hobbies);
}

function greet() {
    var age = 30;
    // 섀도잉 변수
    var name = "Manuel";
    console.log(name, age, hobbies);
}

console.log(name, hobbies);

greet();