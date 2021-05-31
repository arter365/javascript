'use strict';

// 클로저는 정보의 은닉화에 사용된다.
// 클로저 접근 1) 함수안에 함수선언이 가능하다.====================
function outter() {
  var a = 1;
  function inner() {
    var a = 2;
    return a;
  }
  console.log(inner());
  return a;
}

console.log(outter());
// 2
// 1

// closure ========================================
// 클로저 접근 2) MDN 설명 : 클로저는 독립적인 (자유) 변수를 가리키는 함수이다. 또는, 클로저 안에 정의된 함수는 만들어진 환경을 ‘기억한다’.

function getClosure() {
  var text = 'variable 1';
  return function () {
    return text;
  };
}

var closure = getClosure();
console.log(closure()); // 'variable 1'

//*******************************************************************************************
//**************************** 결론 : 클로저란? **********************************************
//*******************************************************************************************
// 앞에서 설명했듯이 var는 function scope이다.
// 그러면 getClosure()의 사용이 끝나면 text변수는 제거되어야 한다.
// 하지만 getClosure()함수에서 함수를 리턴받았기 때문에 이 함수가 종료되기 전까지는 text변수가 살아있다. (스코프체인을 들고 있는다.)
// 결론 : text변수를 제거하는 운명을 getClosure()함수 안의 함수가 운명을 쥐고 있기 때문에 이 함수를 클로저라고 부른다. (특별한 의미가 없다. 그냥 생명주기)

// MDN 설명 중 : 환경을 기억한다는 의미 (객체를 여러개 만든다는 의미 : 값의 충돌에 관한 문제)
var base = 'Hello, ';

function sayHelloTo(name) {
  var text = base + name;
  return function () {
    console.log(text);
  };
}

var hello1 = sayHelloTo('홍길동');
var hello2 = sayHelloTo('이순신');
var hello3 = sayHelloTo('강감찬');
hello1(); // 'Hello, 홍길동'
hello2(); // 'Hello, 이순신'
hello3(); // 'Hello, 강감찬'

console.log('test', hello1.text);

//===============================================================================================
// 클로저를 통해 내부 변수를 참조하는 동안에는 내부 변수가 차지하는 메모리를 GC가 회수하지 않는다. 따라서 클로저 사용이 끝나면 참조를 제거하는 것이 좋다.
// 참조 : https://velog.io/@yujo/JS%ED%81%B4%EB%A1%9C%EC%A0%80Closure%EC%99%80-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EA%B4%80%EB%A6%AC
hello1 = null;
hello2 = null;
hello3 = null;
