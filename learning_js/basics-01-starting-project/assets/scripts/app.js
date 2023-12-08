/*
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
let logEntreis = [];

/*
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

// currentResult = (currentResult + 10) * 3 / 2 - 1;

/*
위에서 값을 더할 때 연산자를 사용했다.
연산자란 무엇인가?
연산자는 값을 조종할 수 있도록 해주는 javascript의 구문 기능이다.
익숙한 전형적인 수학 연산지 +,-,*,/가 있고
나누기 연산자 %, 제곱근 연산자 **도 존재한다.
= <- 할당 연산자
*/

// outputResult(currentResult, "");

/*
javascript에는 여러 데이터 타입이 있는데
1. 숫자 -> 정수(1,2,-2..) 부동소수 (22.956..)
2. 문자열 -> 'Hi',"Hi",`Hi`..
숫자 타입은 계산을 하거나 숫자적으로 표현해야할 시에 사용하며
문자열 타입은 결과를 출력하거나, 사용자에게 입력을 요구하거나 메세지를 보여줄 때 주로 사용한다.
*/

// let calculationDescription = "(" + defaultResult + " + 10) * 3 / 2 - 1";
/*
백틱 문자열 구문을 쓰면 특별한 기능이 사용 가능하다.
${value}로 value안에 변수나 값을 참조할 수 있다.
종적인 값이 포함된 문자열을 만들 때는 통상적으로 이 방법을 사용한다.
이와같은 과정 전체를 템플릿 리터럴이라고 부른다.
*/
let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
// 일반 문자열의 경우 \n을 사용하여 개행이 가능하다. \를 문자열에 포함하기 위해선 \\로 입력하면 출력된다.
let errorMessage = "An error \n" + "occurred!";

// outputResult(currentResult, calculationDescription);

/*
템플릿 리터럴의 편리한 기능중 하나는 여러 행으로 된 문자열을
쉽게 작성할 수 있다. 따음표 형식으로 문자열을 작성한다면 아래와 같은 형식을 허용하지 않는다.
해당 형식을 사용할 때는 여분의 공란이나 줄 바꿈이 있는 문자열을 생성하는 경우에만
줄 바꿈과 여분의 공란 기능을 사용해야 하고, 가독성의 이유로 사용하지 말자.
*/
let test = `hello



what????
`;

/*
- 함수

다음은 함수에 대해 알아보자
강의자는 함수를 온디맨드 코드라 일컫는다.
온디맨드 코드란 무엇일까?
함수는 javascript 이외에도 많은 언어에서 존재하는 기능으로
개발자가 추후에 실행할 수 있는 코드를 정의해준다.
*/

// (1)define function
function greetUser(name) {
  alert("Hi " + name);
}

/*
- 함수(2)

함수가 정의되면, 재미있는 것은 스크립트가 처음 실행 될 때
함수가 즉시 실행되는 점이 아니라, 인식한 함수를 메모리에 저장한다.
그 후에 함수를 호출함으로써 함수내 코드를 실행하게 된다.
함수를 활용함으로써 훨씬 융퉁적인 작업이 가능하다는게 큰 장점이다.
이를 컴포넌트(버튼, 탭)에 연결하여 액션이 일어났을 때만 함수를 동작하게 할 수 있다.
*/

// (2) call function
// greetUser("Leem");

/*
- 함수 선언 위치

자바스크립트의 함수들은 맨 하단에 작성되어도
컴파일시에 자동적으로 스크립트 맨 위로 옮겨진다.
하여 스크립트 태그 어느 위치에서도 함수를 작성할 수 있다. 
*/

// 짧은(한줄) 표현식에서는 세미콜론을 붙여야하고, 함수와 같은 중괄호 표현식은 붙이지 않는다.
// 섹션1 37 강의까지 add 함수
/*
function add() {
    const calDescription = `${currentResult} + ${userInput.value}`;
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, calDescription);
}
*/

// const additionResult = add(1, 2);

// currentResult = add(1, 2);
// outputResult(currentResult, calculationDescription);

// 강의자는 보통 스크립트 전체를 구상할 때 함수를 윗부분에 두고
// 스크립트 코드를 이후 아래에 작성한다고 한다.

/*
- 함수 활용

추가적으로 전역변수를 함수 내에서 사용하는 것은 권장하지 않는다.
해당 전역변수가 늘어날 시에 함수를 이해하기 어렵게 만들고 
어떤 일이 발생할지 예측하기 어렵기 때문이다.
이처럼 함수 내에서만 변수를 사용하고 반환하는 함수를 순수함수라 부른다.

javascript의 또 하나 중요 개념은
함수는 주변의 모든 컨텍스트에 엑세스가 가능하지만
변수는 스코프에 따라 엑세스가 불가능 할 수 있다 (내부 변수를 외부에서 사용하려 할 때)
*/

/*
- 섀도잉 변수

만일 전역과 로컬에 같은 변수명을 사용하고 사용하면 어떻게 될까?
이 때 javascript는 섀도잉이라는 작업을 수행하며
함수나 특정 로컬 내에서 전역 변수명과 같은 변수가 있다면 항상 로컬 섀도우 변수를 참조하고
존재하지 않는 경우에만 전역 변수를 사용한다고 이해하자.
*/

/*
- 함수 간접 실행

아래와 같은 함수로 작성시 스크립트 컴파일 진행할 때 add 함수가 실행된다.
addBtn.addEventListener("click", add(1, 2))

아래와 같이 함수를 ()로 호출하지 않고 함수명을 정의한다면 
스크립트 엔진에서 해당 엘리먼트의 click 이벤트가 발생했을시 add 함수를 호출한다. 
이를 함수의 간접 실행이라고 일컫는다.
*/
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

/*
- 함수 활용(2)

변경한 add 함수를 살펴보면 전역 변수를 참조한다.
이런 함수에서와 같이 내부 상수와 외부 전역 값을 섞어서 사용하지 않고
전역 값을 이용해서만 작동해 이벤트 리스너로만 사용하는 경우에는 괜찮은 함수라 정의할 수 있다.
즉 명확한 함수를 생성하되, 내부 데이터, 일부 반환 값들과 과도하게 혼합해 사용하는 것이 좋지 않은 함수이다.
*/

/*
- 데이터 타입에 관하여

지금 상태로 함수를 호출하면, 결과값이 계산되어 나오는게 아니라 문자열 끝 부분에 합쳐서 나온다.
index.html input 태그를 살펴보면 type이 number로 되어 있지만 
사용자의 javascript 코드 html 입력에서 무엇을 가져오던 간에 항상 문자열을 반환한다.
왜냐하면 input에 받은 값이 숫자로 사용할지 안할지 확실하지 않고 숫자로 사용할 수 없는 텍스트인지도 모르기 때문이다.

반환 받은 문자열을 수학적 계산을 하도록 어떻게 만들까?
alert처럼 내장함수로 포함되어 있는 parseInt 함수를 사용하면 된다.
부동소수로 변활할 때는 parseFloat 함수를 사용하자.
혹은 문자열 앞에 + 기호를 사용하면 숫자로 반환되는데 사용하기 나름이다.

반대로 숫자를 문자열로 변환하려면 어떻게 해야할까?
{value}.toString() 함수로 변환하면 된다.
*/

/*
- 숫자 & 문자열 섞기에 관하여

수학 연산자중 + 는 특별하게도 문자열을 접합하는 기능을 제공한다.
만일 "hi" - "i"를 코딩시에 NaN이라는 값이 출력되는 것을 확인 가능하다.
또한 javascript는 + 가 아닌 수학 연산자를 사용하여 숫자 - 문자열 숫자를 사용 했을시
자동으로 문자열 숫자를 숫자로 변환하여 계산해준다.
3 - "3" => 0
3 + "3" => "33"
+ 연산자만 문자열을 접합할 수 있다.
*/

// input tag에서 값 가져오는 기능
function getUserInput() {
  return parseInt(userInput.value);
}

/*
- 리펙토링, 재활용

38번 이후 add 함수를 보면 userInput을 여러 군데에서 사용하는 것을 확인할 수 있다.
이는 반복적인 변수를 활용하므로 기존 변수가 변경된다면 모두 변경해야하는 불편함과
프로그래밍은 기본적으로 중복 코드를 줄여야 하는 습관을 들여야 한다.
userInput을 여러 군데에서 사용하는 것을 막기 위해 add 함수에
상수를 추가하여 할당해준다면, 최소한의 반복으로 줄일 수 있다.

혹은 getUserInput() 함수와 같이 공유하려 하는 로직이 여러 줄일 때
아웃소싱 함수로 빼서 사용하면 유용하다.
*/

// 계산식 로그 및 결과 로그 출력
function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
  const calDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calDescription); // from vendor file
}

// 코드 포맷팅 shift + alt + f
function wrietToLog(
  operationIdentifier,
  prevResult,
  opertaionNumber,
  newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        operand: opertaionNumber,
        result: newResult,
      };
      logEntreis.push(logEntry);
      console.log(logEntreis);
}

// 섹터 1 -> 38번 이후 add 함수
function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  // currentResult = currentResult + enteredNumber; 와 동일
  currentResult += enteredNumber;
  createAndWriteLog("+", initialResult, enteredNumber);
  wrietToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  // currentResult = currentResult - enteredNumber; 와 동일
  currentResult -= enteredNumber;
  createAndWriteLog("-", initialResult, enteredNumber);
  wrietToLog('SUBTARCT', initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  // currentResult = currentResult * enteredNumber; 와 동일
  currentResult *= enteredNumber;
  createAndWriteLog("*", initialResult, enteredNumber);
  wrietToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  // currentResult = currentResult / enteredNumber; 와 동일
  currentResult /= enteredNumber;
  createAndWriteLog("/", initialResult, enteredNumber);
  wrietToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

/*
- 주석

javascript에서 주석 다는 방법은 //와 현재 사용한 주석 두가지가 존재한다.
주석을 작성할 떄는 짧고 요점이 확싫하게 작성해야 한다.
너무 긴 주석은 좋지 않다.

코드 줄 뒷부분에 주석을 작성하는 것을 인라인 주석이라고 하는데
다른 사람이 이 코드를 읽으려 하거나, 이해하려 할 때
어느 위치에 있는지 도움을 주는 주석 정도는 유용할 수 있다.
*/

/* 
- 연산자에 대해서 좀 더 알아보기

a = a + b 라는 연산이 있을 때
a += b 로 축약하여 연산도 가능하다.
이를 축약 연산자라고 부른다.

a = a + 1라는 연산을 축약할 수도 있다.
a++; 혹은 ++a;
++,-- 가 앞에 사용되어 질 때는 반환 전에 값이 변경되고
뒤에 사용되어 질 떄는 반환 후에 값이 변경된다.
*/

/*
- 자바스크립트 데이터 타입

Number -> 1,2,3 (정수) , 22.956 (부종 소수)
String(text) -> "hi", 'hi', `hi`
Booleans -> true/false
Objects -> {name:"Max", age:31}
오브젝트는 데이터를 그룹화하거나 연관 지을때 자주 사용한다.
Arrays -> [1, 3, 5]
배열의 데이터의 목록화 시킨 것이다.
*/

/*
- 배열의 기초 개념

배열의 주소는 0부터 시작한다.
배열을 덮어쓸 때는 
testA = [value]로 덮어쓸 수 있다
기존 배열에 항목을 추가하고 싶다면
testA.push(value)로 추가 가능하다.
특정 항목 검색
valueA = testA[index]
여기서 valueA는 배열이 아닌 배열안의 항목 값이 도출된다.
이런 작업은 프로그래밍에서 매우 흔한 작업인지를 알고 있으니 복습겸 개념을 다시 기억하자.
*/

/* 
- 객체 기초 개념
객체는 키-값 쌍으로 이뤄진 데이터 자료 구조이다.
선언은 objects = {} 중괄호로 선언하고
중괄호 내부에 key:value 값으로 항목들을 저장하고 ,로 값을 구분한다.
키는 문자열, value는 어떤 값이든 들어갈 수 있어 매우 강력한 자료구조이다.

객체 내부의 값을 추출하고 싶을 때는
objects.key 로 호출하면 된다.
객체 내부에 함수를 저장할 수도 있지만, 지금은 기초 설명으로 다음에 알아보자

*/

/*
- null / undefined / NaN
이 3개는 특별한 값이다.
null과 undefined는 값인 동시에 데이터 유형이다.
undefined -> 초기화 되지 않은 변수의 기본 값
해당값은 직접 할당하면 안된다.
null -> undefined과 유사하지만 데이터가 없다는 의미의 값이다.
null은 절대 기본값으로 설정될 수 없다.

undefined와 null은 빈 데이터를 관리할 때 중요하다
이는 한번도 설정한 적이 없거나, 빈 데이터 즉 null로 설정해야 하는 데이터이기 때문이다.

NaN -> 숫자가 아니라는 의미의 값이다
NaN은 숫자 유형이기 때문에 계산하는 유형에서 사용할 수 있다.
현재는 기초적인 개념만 머리에 넣고 추후 깊게 공부하자.
*/

/*
- typeof
typeof는 런타임에 해당 변수의 타입을 확인할 수 있다.

userName = "Max";
typeof userName
'string'
typeof 1
'number'
typeof 1.1
'number'
typeof true
'boolean'
typeof [1, 2, 3]
'object'
typeof {max:"max"}
'object'
typeof undefined
'undefined'
typeof null
'object'
typeof NaN
'number'
*/

