// Arrays & Iterables

// 본격적으로 자료구조와 이터러블에 대해 공부해보자.

// 이터러블 정의

/*
 이터러블 (Iterable)
    - 기술적으로는 객체나 이터러블 프로토콜을 구현하는 객체이다.
    - 문법적으로는 for-of 반복문을 사용할 수 있는 것들을 의미한다.

  이터러블은 배열로만 이뤄져있지 않고
  NodeList,String,Map,Set 등등 개념이 포함된다.

  유사 배열 객체 (Array-like Object)
    - 기술적으로 유사 배열 객체는 객체에 길이가 있고, 아이템에 엑세스하기 위해 인덱스를 사용하는 것이다.
    - 문법적으로도 기술적인 의미와 같다.

  유사 배열 객체는 배열이 아닌 것을 기억하자!
  유사 배열 객체의 종류는 NodeList, String이 존재한다.

 */

// 배열을 생성하는 여러 방법

/*
   기본적인 생성 방법 -> const numbers = [1, 2, 3];

   Array 생성자 함수로 생성 방법 -> const moreNumbers = new Array("Hi", "Welcome");
   생성자로 생성시 주의할 점은 아규먼트가 숫자 하나일 경우에는 해당 숫자의 길이만큼의 empty 배열을 생성시킨다.

   Array.of 로 생성 방법 -> const yetMoreNumbers = Array.of(1, 2)

   위 3가지 생성 방법중 첫번째 (대괄호식) 방법이 성능면에서 제일 좋다.
   나머지 두 생성 방법은 어디서 사용할까?
   현 시점에는 중요하지 않으므로 코드 분석시에 이런 방법이 있다는 것만 파악하자.

  또 다른 특이한 생성 방법이 있는데
  이터러블이나 유사 배열 객체를 배열로 변환시켜주는 메소드가 존재한다.
    - const moreNumbers = Array.from("Hi!"); -> ["H", "i", "!"]; 라는 배열로 변환
  유사 배열을 배열로 변환하는 작업  
    - const listItems = document.querySelectorAll('li');
    - const arrayListItems = Array.from(listItems);

*/

// 배열 다뤄보기

/*
   배열에 저장할 수 있는 것을 확인해보기
        배열을 유연성을 가지고 있어 다양하게 저장이 가능하다.
        ex) const hobbies = ["Cooking", "Sports"];
            const personalData = [30, "Max", {moreDetail: []}];
            const analyticsData = [[1, 1.6], [-5.4, 2.1]];
        중첩 구조를 가질 수 있어 해당 구조를 풀어낼 떄는 이와 같이 풀어낸다
        ex) for (const data of analyticsData) {
                for (const dataPoint of data) {
                    console.log(dataPoint);
                }
            }
        하지만 중첩 구조 내부에 이터러블이 아닌 데이터 타입이 들어가게 되면 위 코드는 작동되지 않는다.
        Uncaught TypeError: data is not iterable 발생.

        배열은 인덱스 기반으로 사용되기 때문에 0번지부터 시작하는 것도 기억하자.
*/

// 중요한 배열 메소드
/*
    배열을 추가하는 방법
        - const hobbies = ["Cooking", "Sports"];
        - hobbies.push("Reading");
    배열 첫번째 인덱스에 추가하는 방법
        - hobbies.unshift("Coding");
    배열의 요소 삭제 방법
        - hobbies.pop(); -> 마지막 요소 삭제
        - hobbies.shift(); -> 첫번째 요소 삭제
    ※ unshift는 배열에 요소를 모두 오른쪽으로 밀고
       shift는 배열에 요소를 모두 왼쪽으로 미는 작업이다.
       배열 요소를 움직이는 기능이기 때문에 push,pop보다 성능이 느리다.
    배열의 인덱스 컨트롤 방법
        - hobbies[1] = "Coding";
    배열 요소 사이에 추가하는 방법
        - hobbies.splice(1, 0, "Good Food");
        - splice는 배열 요소 삭제 및 추가에 아주 중요한 메소드이다. (시작 인덱스, 삭제 요소 갯수, 추가 items..) 로 아규먼트가 이뤄져있다.
        - array.splice(0)의 경우 인덱스의 모든 항목을 삭제한다.
        - splice는 삭제한 요소를 반환한다. 유용하게 사용 할 수 있다.
        - 또한 음수 인덱스(반전)도 사용 가능하다.
    배열의 범위 선택 및 복제하기
        - const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
        - const copyArr = testResults.slice();
        - const rangeArr = testResults.slice(0, 2); -> 0번째부터 1번째까지 범위 선택됨
        - 범위 선택시 아규먼트에 음수 인덱스를 넣을 경우, 아규먼트 전체가 음수 인덱스여야한다.
    배열을 연결하여 하나의 배열로 반환하기
        - const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
        - const storeResult = testResults.concat([1, 2], [3]);
    배열의 특정 인덱스 요소를 컨트롤하기
        - testResults.indexOf(1.5); -> 1.5값에 해당하는 첫 번째 요소를 찾아 반환
        - testResults.lastIndexOf(1.5) -> 1.5값에 해당하는 첫 번째 요소를 찾아 반환 (역순서)
        - 아무것도 찾지 못했을 경우 -1을 반환한다.
    하지만 참조 데이터인 경우 indexof로 찾지 못하는데 이럴 때 사용하는 다른 메소드가 존재한다.
        - const personData = [{name: "Max"}, {name: "Manuel"}];
        - const manuel = personData.find((person, idx, persons) => {
                            return person.name === 'Manuel';
                        });
        - find 함수의 경우 복사하지 않기 때문에 내부 값을 변경하면 원본 객체가 변경된다.
    배열의 일부인지를 확인하기
        - console.log(testResults.includes(10.99));
        - console.log(testResults.indexOf(10.99) !== -1);
    배열의 반복문 메소드 활용
        - app.js forEach 부분 확인
        - app.js map 부분 확인
    배열의 정렬 활용
        - app.js sort, revers 확인
        - revers 보다 sort를 내림차순으로 변경하는 것이 성능에 좋다.
        - app.js filter 확인
    reduce()
        - app.js reduce 확인
    문자열과 관련된 배열 메소드 활용
        - app.js split, join 확인
    배열의 분산 연산자 (...)
        - app.js 분산연사자 확인
    배열 구조 분해
        - app.js 배열 구조 분해 구문 확인
*/


// 다른 js에 중요한 이터러블 (Map, Set)
/*
 자바스크립트에는 3개의 주요 이터러블 데이터 구조가 있다.
 Array, Sets, Maps이다.
 
 Array 
    - 데이터의 리스트 또는 연결된 데이터를 저장할 때
      주로 배열에 저장한다.
    - 이터러블 자료구조이며 많은 특별한 배열 메소드를 사용가능하다.
    - 순서를 보장하며 중복을 허용한다.
Sets
    - 데이터 구조중 하나로 어떤 길이의 중첩 데이터도 저장한다.
    - 배열 메서드를 지원하지 않고, Sets 메소드가 따로 제공된다.
    - Sets에는 요소의 순서가 보장되지 않는다. 중복 또한 허용되지 않는다.
    - 인덱스 기반으로 접근하지 않는다.
Maps
    - 어떤 길이의 키-값 데이터도 저장할 수 있는 자료구조이다.
    - 객체와 비슷해보일 수 있지만 객체는 문자열 or 숫자만을 키 또는 심볼형으로 가질 수 있다.
    - Maps는 키로 아무거나 사용 가능하다.
    - 특별한 Maps 메소드를 사용할 수 있다.
    - 순서가 보장되고 중복을 허용한다.

Sets 다뤄보기
    - Set을 선언할 때는 new를 사용해야한다.
        - const ids = new Set();
    - Set 어떠한 값이 저장되어 있는지 확인하는 방법
        - ids.has(1)
    - Set 기존 값이 들어 있을 경우 add로 추가하여도 추가되지 않는다. (중복 X)
    - Set에 들어 있는 모든 값들을 출력해보기
        - for(const entry of ids.entries()) {
                console.log(entry[0]);
          }
    - ids.entries()로 엔트리를 뽑으면 2개의 요소를 가진 배열이 반환되는데, 이는 Maps를 쉽게 변환하기 위함으로 이해하자.
    - 만일 Set에 없는 요소를 delete하려하면 오류가 발생되지 않고 무시된다.
    - Set을 정상적으로 지우려면 has 메소드로 true 반환 확인 후 지우는 유효성 코드를 작성하자.

Maps 다뤄보기
    - Map을 선언할 때는 new를 사용해야한다.
        - const personData = new Map([['key', 'someValue']]);
    - setmaps.js 에 maps 활용하기 부분 참고
    - maps는 키를 객체로도 활용할 수 있기에 객체를 키로 두고 value를 객체에 넣고 싶지 않으나 유지하고 싶은 데이터들이 있을 떄 활용하는 식으로 구성한다.

Maps vs Objects
    - 맵과 객체는 꽤 비슷하다
    - 언제 무엇을 써야할까? 두개를 비교해보자.
    - 맵은 키와 밸류를 모든 타입으로 사용 가능하다.
    - 객체의 경우 키에 자료,숫자,심볼형만 선언 가능하다. 즉 유연성이 떨어진다.
    - 데이터의 양이 많으면 많을 수록 Map의 성능이 객체보다 뛰어나다
    - 객체의 경우 작거나 중간 크기의 데이터에 적합하다.
    - 객체에선 데이터와 상호 작용한 메소드가 존재하나, Map에서는 이런 작업이 불가능하다.
    - Map은 데이터를 자주 추가하거나 삭제할 때 더 좋은 성능을 가진다.
    - 객체는 일반적으로 빠르게 만들수 있다 ( {}로 생성 가능 Map은 new 연산자 사용)

    요약하자면 98%의 경우 배열과 객체를 사용할 것이고
    값을 고유하게 컨트롤할떄는 Set
    빠르게 데이터가 변해아하고, 데이터양이 많을떄는 Map을 사용한다.

    또는 객체에 영향을 주지 않고
    데이터를 추가하고 싶을 떄 js 예제처럼 맵을 사용하는 경우가 있다.

WeekSet, WeekMap 활용
    - setsmaps.js WeekSet,Map 확인
*/


