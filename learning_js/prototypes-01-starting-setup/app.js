class AgedPerson {
    printAge() {
        console.log(this.age);
    }
}

class Person extends AgedPerson {
    name = 'Max';

    constructor(props) {
        super();
        this.age = 30;
    }

    // button.addEventListener('click', p.greet);
    // greet = () => {
    //     console.log('Hi, I am ' + this.name + ' and I am '+ this.age + ' years old.');
    // }

    // button.addEventListener('click', p.greet.bind(p));
    // 성능 저하가 위 보단 덜하지만, 수천개 이상 쓰지 않는 이상 화살표 함수로 써도 됨
    greet() {
        console.log('Hi, I am ' + this.name + ' and I am '+ this.age + ' years old.');
    }
}

// function Person() {
//     this.age = 30;
//     this.name = 'Max'
//     this.greet = function () {
//         console.log('Hi, I am ' + this.name + ' and I am '+ this.age + ' years old.');
//     }
// }

// 아래 코드는 만들어진 본문 함수에 추가하는 것이므로
// 함수 본문을 실행하는데 영향을 주지 않음
// Person.describe = function () {
//     console.log('Creating persons...');
// }


// Person.prototype = {
//     printAge() {
//         console.log(this.age);
//     }
// }
// Person.prototype.printAge = function () {
//     console.log(this.age);
// }
//
// console.dir(Person);
//
// const p = new Person();
// p.greet();

// toString은 생성자 함수에 작성하지 않았는데 왜 결과 값이 나올까?
// p를 print로 찍어보면 작성한 3개의 값, 함수만 있는데
// 좀 더 내려보면 __proto__ 라는 특성이 존재한다. 이것이 객체에 기본적으로 연결된 프로토 타입이다.
// onsole.log(p.toString());

// p.__proto__ <-- 모든 사용자 정의 생성자 함수가 생성될 때 기본적으로 갖는 프로토타입 객체이다.
// console.log(p.__proto__);
// p.printAge();

// 아래는 복잡하지만 앱이 생성자 함수에 엑세스를 못할 때 사용할 수 있는 유용한 방법이다.
// const p2 = new p.__proto__.constructor();
// console.log(p);
// console.log(p2);

// 자바 스크립트에서 객체 생성시 제공하는 빌트인 함수(정적 메서드)
// 하지만 이 빌트인 전체는 폴백 함수가 아님을 기억하자
// 빌트인 객체에서 폴백 메서드들이 들어 있는 것을 확인하려면 Object.prototype 으로 검색하자.
// 프로토타입 체인이 끝나는 지점 역시 Object.prototype 으로 기억해두자
// console.dir(Object.prototype);

// 상속한 클래스의 경우 객체화한 클래스에 작성한 메서드는
// 부모 클래스의 프로토 타입에 들어간다.
// 이러한 동작을 하는 이유는 Person 객체를 여러개 생성시 자원을 최적화할 수 있기 때문이다.
// 만일 자식 클래스에서 단독적으로 사용하고 싶은 함수가 있따면 greet = function .. 처럼 등호화하여 할당하면 된다.
// const p = new Person();
// console.log(p);
//
// const button = document.getElementById('btn');
// button.addEventListener('click', p.greet.bind(p));

// 프로토타입 자체를 세터, 게터하는 방법 (프로토타입 변경하는 법)
const course = { // new Object()
    title:'JavaScript',
    rating:5
};
// 프로토 타입을 변경할 때는 Object를 사용한다
// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
    // ...Object.getPrototypeOf(course),
    printing: function () {
        console.log(`${this.rating}/5`)
    }
});
course.printing();

const student = Object.create({printProgress:
        function () {console.log(this.progress)}
}, {
    name: {
        configurable: true,
        enumerable: true,
        value: 'Max',
        writable: true
    }
});
// student.name = 'Max';
Object.defineProperty(student, 'progress', {
    configurable: true, enumerable: true, value: 0.8, writable: false
});

student.printProgress();
console.log(student);