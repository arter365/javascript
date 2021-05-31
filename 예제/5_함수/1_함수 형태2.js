'use strict';

// 자바스크립트에서 함수는 객체인 증거 (그렇기 때문에 변수에 대입이 가능하다.)
var add1 = new Function('x,y', 'return x+y');
console.log(add1(3, 4));

// 제일 많이 사용하는 형태 (변수에 값을 대입하고 있기 때문에 마지막에 ;) anonymous function
var add2 = function (x, y) {
  return x + y;
};
console.log(add2(3, 4));

// 함수만 선언하는 방식 // named function
function add3(x, y) {
  return x + y;
}
console.log(add3(3, 4));

// ====================== Callback function ===============================
/*
콜백이란 무엇이냐?
간단히: 콜백은 다른 함수가 실행을 끝낸 뒤 실행되는 — call back 되는 함수를 말한다.
자세히: 자바스크립트에서 함수는 object이다. 이 때문에 함수는 다른 함수의 인자로 쓰일 수도, 어떤 함수에 의해 리턴될 수도 있다. 
이러한 함수를 고차 함수 higher-order functions 라 부르고 인자로 넘겨지는 함수를 콜백 함수 callback function 라고 부른다.
*/
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
  // return undefined;    // 리턴이 없는 함수는 이 구문이 있는 것이다. 생략가능.
}

// anonymous function
var print1 = function () {
  console.log('yes!');
}; // 함수선언으로 끝이 아니라 변수에 대입하는 행위를 하기 때문에 ;를 적어준다.

// named function
// 이 방식이 디버깅 stack straces에 더 유리하다.
var print2 = function print() {
  console.log('no!');
}; // 함수선언으로 끝이 아니라 변수에 대입하는 행위를 하기 때문에 ;를 적어준다.

// printYes()는 함수를 실행한다는 뜻
// printYes는 함수객체의 레퍼런스를 전달한다는 뜻
randomQuiz('wrong', print1, print2);
randomQuiz('love you', print1, print2);

// 팁 : Early return, early exit =======================================================
// bad
function upgradeUser1(user) {
  if (user.point > 10) {
    // logic...
  }
}
// good
function upgradeUser2(user) {
  if (user.point <= 10) {
    return;
  }
  // logic...
}

// 팁 : Arrow function =======================================================
// 원래 함수모양
var simplePrint1 = function () {
  console.log('simplePrint1');
};
var add1 = function (a, b) {
  return a + b;
};
var simpleMultiply1 = function (a, b) {
  // 코딩
  return a * b;
};
// Arrow function () => {} 를 기본으로 적고 시작한다.
var simplePrint2 = () => console.log('simplePrint2'); // function생략
var add2 = (a, b) => a + b; // function생략, return생략
var simpleMultiply2 = (a, b) => {
  // 한 줄 이상의 코딩은 블럭을 적어야 하고 return을 적어야 한다.
  return a * b;
};

// 팁 : 요즘은 잘 사용하지 않지만 알아둔다. IIFE : Immediately Invoked Function Expression 함수선언과 동시에 실행하게하는 방식
(function hello() {
  console.log('IIFE');
})();
