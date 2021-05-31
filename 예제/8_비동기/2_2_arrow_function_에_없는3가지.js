//'use strict';

// 화살표 함수에는 없는 것 3가지

// 1) arrow function에는 함수 이름을 적을 수 없다.
const myFun1 = function () {};
const myFun2 = () => {};

//==============================================================================================================

// 2) arrow function에는 this가 없다.                   this바인드로 묶어주거나 할 수 없다. 스코프체인을 역으로 따라가며 this를 찾는다.
/*
함수는 함수가 실행될 때 함수 자신의 스코프 안에 자기만의 this가 존재한다. 
하지만 arrow function에는 자기만의 this가 존재하지 않는다. 
그렇다면 그 안에서 사용하는 this는 어떻게 되는가?  
함수에서 변수등을 찾을 때는 자신의 스코프에서 찾고 만약 없으면 역으로 추적해서 자기 위의 스코프에서 찾는다.  스코프체인 
*/
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

var myObj = {
  count: 0,
  setCounter: function () {
    console.log(this.count); // 0
    // ===== test1
    /*
    btn1.addEventListener('click', function () {
      console.log(this); // <button id='btn1'>Press1</button> // this는 호출하는 방법에 의해서 결정된다.
    });
    */
    // ===== test2
    // 위와 같이 버튼이 this가 아니라 myObj가 this이게 만들고 싶다면 bind를 사용한다.
    btn1.addEventListener(
      'click',
      // 아래와 같이 함수를 ()로 싸서 this를 bind로 묶어준다.
      function () {
        this.count++;
        console.log(this);
      }.bind(this) // 여기서 this는 함수외부의 (this)이다. 즉 myObj this이다.
    );
    // ===== test3
    // arrow function을 사용하면 bind가 필요없다. why? arrow function에서는 this가 없기 때문이다.
    // 스코프 체인은 선언된 위치를 기준으로 참고해 나가기 때문에 나에게 this가 없기 때문에 myObj가 this가 되는 것이다.
    btn2.addEventListener('click', () => {
      this.count++;
      console.log(this);
    });
  },
};

myObj.setCounter(); // this는 호출하는 방법에 의해서 결정된다.
/*
[bind로 묶어 준 후 출력]
{count: 1, setCounter: ƒ}
{count: 2, setCounter: ƒ}
{count: 3, setCounter: ƒ}
{count: 4, setCounter: ƒ}
{count: 5, setCounter: ƒ}
*/

// ===== test4
// this가 없기 때문에 할 수 없는 또 한가지 생성자 함수를 사용 할 수 없다. (6_생성자 함수의 1_constructor function.js 참조)
// Consturctor function(생성자 함수)을 만들어서 사용하는 방법 (함수의 첫글자가 대문자면 생성자 함수로 보는것이 관례이다.)
// ***** 아래와 같이 생성자함수에서는 this가 중요하다. this가 없다는 것은 constructor로 사용 할 수 없다는 것이다. 그렇기 때문에 prototype도 존재하지 않는다. *****
function Person(name, first, second) {
  this.name = name; // use strict를 사용하면 에러발생
  this.first = first; // use strict를 사용하면 에러발생
  this.second = second; // use strict를 사용하면 에러발생
  this.sum = function () {
    return this.first + this.second;
  };
  console.log('Person Constructor function...');
}

// 객체로 사용할 때는 new를 사용한다.
var kim = new Person('kim', 10, 20);
var lee = new Person('lee', 10, 10);

// arrow function을 사용한 생성자 함수는 사용할 수 없다. why? this가 없기 때문이다.
const MyClass = () => {};
// 아래와 같이 arrow function을 사용하여 객체를 생성하면 에러가 발생한다.
// new MyClass();  // Uncaught TypeError: MyClass is not a constructor (this가 없다는 것은 constructor로 사용 할 수 없다는 것이다. 그렇기 때문에 prototype도 존재하지 않는다.)

//==============================================================================================================

// 3) arrow function에는 arguments가 없다.
const myFun3 = function () {
  console.log(arguments); // Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ] // 배열은 아니지만 arguments라는 속성이 있다.
};

myFun3(1, 2, 3, 4);

// arrow function에서 arguments를 사용하려고 하면 Uncaught ReferenceError: arguments is not defined 라는 에러가 발생한다.
/*
// 1단계 
const myFun4 = () => console.log(arguments);
myFun4(1, 2, 3, 4);
*/

// 2단계
// 위의 내용을 outter 함수로 감싸면 arguments가 나온다. 이것은 arrow function에 this가 없는 내용과 동일한 내용이다. (스코프체인)
function outter() {
  const myFun5 = () => console.log(arguments); // Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
}
outter(1, 2, 3, 4);

// 3단계 (펼침연산자 : 배열에 포함된 항목을 목록으로 바꿔준다. (ES6문법))
// ...은 여러개의 인자를 묶어서 args라는 배열로 받겠다는 뜻이다.
const myFun6 = (...args) => console.log(args); // [1, 2, 3, 4] 실제 배열이 출력된다.
myFun6(1, 2, 3, 4);

// arrow function의 장점
/*
  1) 코드수를 줄이고 가독성을 높여준다. 
  2) this를 바인드 하지 않아도 ***** 선언된 곳 바같쪽을 this로 사용(스코프체인,closure) ***** 할 수 있다. 
*/
