// heap, stack
function getName() {
    return prompt("Your name: ", "");
}


function greet() {
    const userName = getName();
    console.log("Hello "+ userName);
}

// 해당 함수 호출시 greet와 내부 블럭 코드에서 실행되는 함수가
// heap 메모리로 올라감
greet();

// 1. 스택은 익명 코드 실행에서 부터 시작된다. (스크립트 파일 자체)
// 2. 함수를 평가한 뒤에 실행된다. (greet함수 내 정의 확인 후)
// 3. greet -> getName -> prompt 순으로 스택이 쌓이고 실행되는 구조
// 4. 스택은 FILO이므로 맨 위에 있는 항목이 항상 현재 실행중인 항목이 되며
// 반환이나 종료 후 아래 스택이 이어서 실행되거나 진행된다.
// 이를 동기화 실행이라고 한다.
// 가끔 ajax나 비동기 실행을 하는 경우에는 event loop를 사용하여 동작하게 된다.


