/*
지금까지 공부한 내용을 바탕으로, 스크립트가 실행하는 HTML 문서를 직접 다뤄볼 차례다.
우리가 지금까지 봤던 vendor.js는 HTML 코드속 특정 요소를 연결해줬다.
이제는 그 연결들이 어떻게 만들어졌는지 이해할 필요가 있다.한가지 방법만 있지 않기 때문이다.
그리고 렌더링된 HTML 페이지를 어떻게 사용하고 다루는지 알아보자.


- DOM이란?

    dom을 이해하려면 브라우저가 html코드로 뭘 하는지 이해해야한다.
    dom(Documnet Object Model)은 로드 및 렌더링 된 HTMl 코드이다.
    정확히 말하면 Javascript와 이용할 수 있는 브라우저가 배후에서 만든 코드를 나타내주는 것이다.
        ex) const titleEl = document.querySelector("h1");

    브라우저에서는 특정 2가지 객체를 노출하여 개발자가 HTML 페이지에 여러 방식으로 접근하게 해주는데
    그 중 하나가 위에서 예시를 든 document 객체이다.
    그리고 나머지 하나는 window 객체다.

- document & window 

    document - 브라우저가 노출시키는 root DOM Node.
               렌더링 된 모든 html에 접근하기 위한 최고점의 엔트리 포인트라고 이해하자.
               html 요소를 쿼리하거나 dom 콘텐츠와 상호작용할 때 필요한 다양한 메소드를 제공한다.
    window - javascript에서 사용 가능한 최상위의 전역 객체이다.
             활성화된 브라우저 창이나 탭을 보여준다.
             최상위 전역 객체이므로 브라우저에 관련한 모든 기능에 대해 엑세스를 가능하게 해준다.

- DOM의 생성 방식

    html에서 작성한 태그들이 렌더링되면서 각각의 요소 노드로 변환된다.
        ex) html 태그 -> html 노드
    DOM 방식에서 기억해야 할 것은 태그 내부 텍스트도 노드로 저장되는 것이다.
    즉 html 노드부터 트리형식으로 각 노드들이 확장되는 구조라고 이해하자.

- Querying Elements

    요소 또는 노드에 쿼리(선택 or 접근)하는 방법을 학습하자.
        
    한번에 한 요소를 선택하는 방법
        - querySelector() - css,sudo 선택자도 지원되기 때문에 요소를 선택할 떄 탄력성과 성능을 제공한다.
        - getElementById() - html 요소에 id로 접근하며 id가 할당 되었을 때 선택 가능한 메서드
        
    다중 요소를 선택하는 방법
        - querySelectorAll(), getElementsByTagName() - 항상은 아니지만 일반적으로 노드 배열로 반환해준다.
        다중 쿼리 메서드는 정적 nodeList를 반환하지만
        getXByY 메서드는 동적 nodeList를 반환해준다.

- Node(노드) & Elements(요소,속성)

    Nodes - Dom을 구성하는 객체이며 DOM은 모두 노드로 이뤄진다.
            위에서 언급 했듯이 html 태그는 요소지만 정확하게 말하자면 요소 노드가 맞다.
            그 외에 텍스트 노드나 속성 노드들을 일컷는다.
    Elements - 렌더링된 html 태그에서 생성된 노드이며 내부에는 텍스트가 없다.
                즉 요소 노드는 요소와 상호 작용하고, 요소의 스타일 및 콘텐츠를 변경하는 것에만 집중한다.

- Querying Dom Nodes

    - getXByY로 요소를 한번 선택한 후에는 querySelector로만 선택 가능하다.
    - 다중 요소를 선택했을시에 for 같은 제어문 기능도 사용할 수 있다.
    - 최근 트렌드로는 클래스 이름이나 태그로 요소를 선택하는 경우 getXByY보다 querySelector를 사용한다.
    - 하지만 동적으로 값을 계산하거나 요소를 변경할 때는 getXByY를 사용한다.

- Evaluating & Manipulating DOM Nodes

    요소를 선택하는 방법을 배웠으니 선택한 요소를 무엇을 할 수 있을까?
        ex) <p id="welcome-text" class="text-default">Welcome!</p>
            const p = document.getElementById("welcome-text");
            p.textContent -> "Welcome!"
            p.id -> "welcome-text"
            p.className -> "text-default"
            p.className = "new-class" -> <p ... class="new-class">

- Attributes(속성) vs properties(프로퍼티)

    요소 조작에 대해 이야기할 때 속성과 프로퍼티의 차이점을 이해해야한다.
    속성은 프로퍼티에 매핑되어 있고 실시간 동기화가 설정되어 있기에 차이점을 이해하기 어렵다.
        속성 -> id, css class, value와 같이 html 노드에 작성된 후 접근할 수 있는 값 & 함수
        프로퍼티 -> 위 속성들이 없어도 기본적으로 제공되는 값 & 함수
    속성과 프로퍼티가 1:1 매핑되어 있는 값들이 몇몇 존재한다.
        ex) input.id
    그리고 속성 값은 변하지만 html 코드에 변하지 않는 값도 존재한다.
        ex) input.value

- Traversing the Dom

    요소를 선택하는데에 관련된 또 다른 개념이 하나 존재한다.
    바로 Dom 트래버싱이다.
    하나의 요소 즉 노드를 선택하면 해당되는 모든 자식 노드를 살펴보고 싶을 것이다.
    이미 선택한 요소를 이용해서 이 요소를 기반으로 자식 혹은 형제 요소 등으로 옮겨 갈 수 있는 개념이 트래버싱이다.

    child : 직접적인 자식 노드를 의미한다.
    descendand : 직접 또는 간접적인 자식 노드를 의미한다.
    parent : 직접적인 부모 노드를 의미한다.
    ancestor : 직접 또는 간접적인 부모 노드를 의미한다.

    그래서 이 트래버싱 기능을 도와주는 메서드는 무엇일까?
    
    부모, 조상 노드 선택 방법 : parentNode, parentElement, closest()
    자식, 후손 노드 선택 방법 : childNodes, children, querySelector() ...
    첫번째 자식 노드 찾는 방법 : firstChild, firstElementChild
    마지막 자식 노드 찾는 방법 : lastchild, lastElementChild
    이전 형제 요소 찾는 방법 : previousSibilng, previousElementSibling
    다음 형제 요소 찾는 방법 : nextSibilng, nextElementSibling

- Styling DOM Elements <- app.js 확인

    - dom에 접근하여 스타일링을 변경할 수 있는데 다양한 방법이 존재한다.
        - 스타일 속성 변경
        - 클래스 네임으로 변경
        - 클래스 배열으로 변경
    
- Creating & Inserting Elements (유데미 168번 참고자료 참고)

    - 요소를 만들고 추가하는 방법에 대해 알아보자
        1. HTML String - innerHTML => 기존, 자손 html 코드가 새로운 html 코드로 대체된다. (다시 렌더링 작업을 진행함)
                         insertAdjacentHTML() -> 기존 Html을 리렌더링하지 않고, 첫번째 아규먼트에 속한 포지션대로 html을 추가해준다.
           html 스트링 접근법의 단점은 브라우저에 렌더링할 요소나 콘텐츠를 알려줘서 모든 html 콘텐츠가 될 수있고
           단일 요소가 필요 없으며 html 코드를 원하는 만큼 복잡해진다는 것이다.
           즉 html만 삽입하기 떄문에 복잡한 html이 될 수록 요소를 선택하기 어려워 진다는 것이다.
        2. createElement() - appendChild(), append(), prepend(), before(), after(), insertBefore(), replaceChild(), replaceWith(), insertAdjacentElement()
        ※ 요소를 생성한 시점부터 이미 dom에 속해지기 때문에 (렌더링 완료) 추가한 요소를 다른 위치에 삽입할 때 복사되지 않고 새로운 위치로 이동한다.

        element.cloneNode -> 노드를 복제해서 새로운 노드로 반환 arg depp -> false시 해당 요소만 복사, true시 전체 자식 요소와 전체 자손 요소가 복사됨

- Removing Elements (유데미 168번 참고자료 참고)
    
    요소를 삭제할 떄 사용하는 메소드를 알아보자
    remove() [익스플로어 제외]
    익스플로어에서는 parentElement로 상위 요소에 접근 후 removeChild로 삭제한다.

 */        