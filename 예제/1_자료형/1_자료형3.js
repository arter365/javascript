'use strict'; // 타입스크립트에서는 사용할 필요가 없다. 하지만 바닐라 자바스크립트에서는 적어주는 것이 좋다. Why? (es5에 추가) 비상식적인 변수사용 없다는 뜻. 성능개선 효과 (엔진)

//=============================Boolean=============================
// 부울
var a1 = new Boolean(false);
var a2 = false; // new를 생략한 모양을 표준으로 사용한다.
console.log('부울 a1', a1);
console.log('부울 a2', a2);
//=============================Number=============================
// 정수
var a3 = new Number(3);
var a4 = 3; // new를 생략한 모양을 표준으로 사용한다.
console.log('정수 a3', a3);
console.log('정수 a4', a4);
// 실수
var a5 = new Number(3.7);
var a6 = 3.7; // new를 생략한 모양을 표준으로 사용한다.
console.log('실수 a5', a5);
console.log('실수 a6', a6);
//=============================String=============================
// 문자
var a7 = new String('A');
var a8 = 'A'; // new를 생략한 모양을 표준으로 사용한다.
console.log('문자 a7', a7);
console.log('문자 a8', a8);
// 문자열
var a9 = new String('Hello');
var a10 = 'Hello'; // new를 생략한 모양을 표준으로 사용한다.
console.log('문자열 a9', a9);
console.log('문자열 a10', a10);
// template literals ${}안에 값을 넣을 수 있다.
console.log(`template literals : ${a10}`);
//======================== null & undefined ========================
var nothing = null;
console.log(nothing); // null
var x;
console.log(x); // undefined
//============================= symbol =============================
// symbol은 자바스크립트의 원시(primitive)타입으로 새롭게 추가되었다.
// 심볼은 이름의 충돌 위험이 없는 유일한 프로퍼티 키이다.
// symbol, objects에 대한 고유 식별자 만들기 (hashcode와 같은 느낌), 주어진 값에 상관없이 고유한 값을 만든다. (new 사용 안함.)
// Symbol의 파라메터는 Symbol 생성에 아무런 영향을 주지 않는다. 다만 생성된 Symbol에 대한 설명(디버깅)으로 사용된다.
var symbol1 = Symbol('id');
var symbol2 = Symbol('id');
console.log('symbol test1 : ', symbol1 === symbol2); // false
// 동일한 심볼을 만들고 싶을 때
var symbol3 = Symbol.for('id');
var symbol4 = Symbol.for('id');
console.log('symbol test2 : ', symbol3 === symbol4); // true

// 사용 예 (사용예는 좀 더 찾아봐야 겠다.)
const obj = {};

const mySymbol = Symbol('mySymbol');
obj[mySymbol] = 123; // 키가 겹치는 에러를 막을 수 있다.

console.log(obj); // { [Symbol(mySymbol)]: 123 }
console.log(obj[mySymbol]); // 123
