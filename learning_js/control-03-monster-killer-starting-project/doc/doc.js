/*
- 조건적 코드에서 전역 상수 식별자로 활용하기
    가끔 함수 파라미터를 조건식으로 사용할 때가 있고
    그것을 어떤 값에 비교하는 경우가 있을 것이다.
    어떤 값을 매번 하드코딩으로 작성한다면 버그가 발생할 확률이 높아 상수로 지정하는 것이 좋다.
    ex) app.js 내부 mode === "ATTACK" -> mode === ATTACK_VAL


- 삼항 연산자 & 연산식
    IF문에서는 값이 반환되지 않고 조건식에 따라 코드가 덤프되어 실행되는 방식이다.
    하지만 사용자 이름이나 다른 상수 또는 변수를 다른 값으로 사용하는 코드가 있는 경우에는
    상수에 저장하려는 실제 값이 일부 조건 마다 다른 경우가 있다.

    이럴 경우 편리하게 연산식으로 반환할 수 있는 방법이 삼항 연산자 & 연산식이다.
    ex) const userName = isLogin ? "Max" : null
    isLogin이 참일 때 "MAX"라는 값을, 거짓일 때 null이라는 값을 반환한다.

    삼항 연산자 역시 중첩으로 사용할 수 있지만 조심스럽게 사용해야한다.

- 문장 VS 표현식
    표현식 -> 상수나 변수에 저장하는 값이나 함수에서 반환되는 값 등을 말함
    문장 -> 모든 표현식을 문장이라고 일컸지만
    보통 조건문이나 반복문 같은 기술을 사용할 때 문장이라고 말한다.
    특정된 문법으로만 사용할 수 있는 것도 문장이라고 할 수 있다.

    즉 두개의 차이점을 살펴보려면 오른쪽에 등호가 사용 가능한지 판별하면 된다.
    EX) IF문 (문장) VS 삼항연산자(표현식)

- 논리연산자 "팁"
    1. truthy 또는 falsy 값을 실제 불리언으로 전환하거나 강제로 전환하는 방법 - !! 연산자
        ex) !!"" => false, !!1 => true
       따라서 이것은 빈 문자열을 거짓으로 전환하거나 숫자를 참으로 전환할 떄 유용하게 쓴다.
    2. 변수를 할당할 때 or 값을 지정하면 true로 반환되는 값을 변수로 지정하여 반환한다.
        ex) const name = "" || "MAX" 의 결과는 MAX다.
        둘 다 참일시에는 첫번째 값을 반환한다.
        둘 다 거짓일시에는 두번째 값을 반환한다.
    3. 변수를 할당할 때 and 값을 지정하면 참일시 마지막 값을 반환한다.
       하나라도 false값이 있을시에는 항상 첫 번째 값을 반환한다.

    이런 팁이나 축약어 같은 경우에는 사용하지 못해도 괜찮다.
    앱의 성능이나 속도에 지장을 주지 않으며 단지 코드를 줄일 수 있는 대안일 뿐이며
    코드를 리펙토링해서 다시 사용 가능하다.

    이 방식 때문에 자바스크립트에서는 || 으로 변수/상수에 기본/대체 값을 할당하는데 자주 쓰인다.

- 반복문
- 오류 처리

*/