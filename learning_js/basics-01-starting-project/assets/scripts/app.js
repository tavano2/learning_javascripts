/**
자바 스크립트 변수 선언은 두가지가 존재한다.
1. let {name} = {value};
위 let 키워드의 name 변수는 언제든 값을 변경할 수 있다.
2. const {name} = {value};
let 키워드와 다르게 const 키워드는 상수(변하지 않는 값) 선언시에 사용한다.

강의자는 일부 코드의 라이프사이클 전반에 걸쳐 절대 변하지 않은 값이 있다면
const를 적극 사용할 것을 권장한다.
*/
const defaultResult = 0;
let currentResult = defaultResult;

/**
자바스크립트 역시 대소문자를 구분하기 때문에
해당 처리 여부가 중요하다.

변수 선언 가능 예
1. userName -> best. 카멜 케이스 사용
2. ageGroup5 -> 문자로 시작하고 숫자 병합 사용 가능
3. $kindOfSpecial -> $ 특문 사용 가능
4. _internalValue -> _ 특문 사용 가능

사용 하지 못하거나, 할 수 있지만 추천하지 않는 선언
1. user_name -> 허용은 되지만 추천하지 않음 (snake case. python에서는 주로 사용된다.)
2. 21Players -> 숫자로 시작하는 변수는 선언할 수 없음
3. user-b -> $,_ 를 제외한 특수문자는 사용할 수 없다.
4. let let -> 예약어도 사용할 수 없다.
*/


// javasciprt는 초기화 하지 않아도 선언 가능하다.
let test3;

currentResult = (currentResult + 10) * 3 / 2 - 1;

/**
위에서 값을 더할 때 연산자를 사용했다.
연산자란 무엇인가?
연산자는 값을 조종할 수 있도록 해주는 javascript의 구문 기능이다.
익숙한 전형적인 수학 연산지 +,-,*,/가 있고
나누기 연산자 %, 제곱근 연산자 **도 존재한다.
= <- 할당 연산자
*/

outputResult(currentResult, "");


/**
javascript에는 여러 데이터 타입이 있는데
1. 숫자 -> 정수(1,2,-2..) 부동소수 (22.956..)
2. 문자열 -> 'Hi',"Hi",`Hi`..
숫자 타입은 계산을 하거나 숫자적으로 표현해야할 시에 사용하며
문자열 타입은 결과를 출력하거나, 사용자에게 입력을 요구하거나 메세지를 보여줄 때 주로 사용한다.
*/

// let calculationDescription = "(" + defaultResult + " + 10) * 3 / 2 - 1";
/** 
백틱 문자열 구문을 쓰면 특별한 기능이 사용 가능하다.
${value}로 value안에 변수나 값을 참조할 수 있다.
종적인 값이 포함된 문자열을 만들 때는 통상적으로 이 방법을 사용한다.
이와같은 과정 전체를 템플릿 리터럴이라고 부른다.
*/
let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
// 일반 문자열의 경우 \n을 사용하여 개행이 가능하다. \를 문자열에 포함하기 위해선 \\로 입력하면 출력된다.
let errorMessage = "An error \n" +
                   "occurred!";

outputResult(currentResult, calculationDescription);

/**
템플릿 리터럴의 편리한 기능중 하나는 여러 행으로 된 문자열을
쉽게 작성할 수 있다. 따음표 형식으로 문자열을 작성한다면 아래와 같은 형식을 허용하지 않는다.
해당 형식을 사용할 때는 여분의 공란이나 줄 바꿈이 있는 문자열을 생성하는 경우에만
줄 바꿈과 여분의 공란 기능을 사용해야 하고, 가독성의 이유로 사용하지 말자.
*/
let test = `hello



what????
`;
