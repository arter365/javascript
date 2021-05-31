'use strict';

// Equality ===================================================================================================================
var stringFive = '5';
var numberFive = 5;

// == loose equality(==는 느슨한 equality), with type conversion(타입을 변경해서 비교하기 때문이다)
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality(===는 엄격한 equality), no type conversion(타입 변경 없이 비교한다.)  *** 코딩 시 ===를 사용한다 ***
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference =================================================================================================
// 다음의 사이트에서 메모리 맵을 확인하며 학습한다. : http://pythontutor.com/javascript.html#mode=edit
var e1 = { name: 'apple' };
var e2 = { name: 'apple' };
var e3 = e1;
// 객체의 비교는 레퍼런스값을 비교한다.
console.log(e1 == e2); // false
console.log(e1 === e2); // false
console.log(e1 === e3); // true

// 테스트 ========================================================================================================================
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
