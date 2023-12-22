// var를 선언시에는 undefined가 출력되고
// let,const 선언시에는 엑세스할 수 없다는 에러가 나온다.
// console.log(userName);

// let userName = "Max";

/*
javascript에는 호이스팅이라는 특별한 기능이 존재한다.
호이스팅은 함수나 변수 같은 선언들을 코드라인보다 윗줄로
옮겨 정상적으로 실행될 수 있게 한다.

이 과정에서 let이나 const는 undefined로 초기화하지 않는다.
이는 코드의 가독성을 높이기 위해 ES6부터 강제된 것으로
var는 강제하지 않았기에 만일 위와 같은 코드가 작성되었고 중간 코드가 매우 많다면
해당 로그를 찾기 복잡했을 것이다.
*/

// var userName = "Max";
// var userName = "Manuel";
// console.log(userName);

"use strict";

let userName = "Max";
var undefined = 5;
console.log(userName);