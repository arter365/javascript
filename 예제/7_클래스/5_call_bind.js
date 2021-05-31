'use strict';

// ============================== call (모든 함수에는 call이 기본으로 있다.)==============================
// 객체를 만들었다. 하지만 이번에는 내부에 함수가 없다.
var kim = { name: 'kim', first: 10, second: 20 };
var lee = { name: 'lee', first: 10, second: 10 };

// kime.__proto__ = kim을 사용하지 않고 이번에는 누구에게도 속하지 않은 함수를 사용하는 방법을 알아보자.
function sum1() {
  return this.first + this.second;
}

// sum은 함수 내부에 this값을 전달해서 사용하는 함수이다.
/*
그냥 sum1()이라고 실행하면 되는데 왜 call()을 사용하나?
자바스크립트의 함수는 객체이기 때문에 call이라는 함수를 가지고 있다. 
*/
console.log('sum1.call(kim)', sum1.call(kim)); // 30 (kim의 레퍼런스 값을 전달한 후 sum1을 실행한 것이다.)
console.log('sum1.call(lee)', sum1.call(lee)); // 20 (주의 : 사용하는 변수명이 같아야 한다.)

// parameter를 받아서 사용 할수도 있다.=====================================================================
function sum2(prefix) {
  // 이름이 prefix인 변수일 뿐이다.
  return prefix + (this.first + this.second);
}

// call의 두번째 인자가 파라메터값을 넣는 부분이다.
console.log('sum2.call(kim)', sum2.call(kim, '=> ')); // => 30
console.log('sum2.call(lee)', sum2.call(lee, ': ')); // : 20

// ============================== bind ==============================
// 8_비동기 : 1_0_this.js를 참고한다.
var kimSum = sum2.bind(kim, '=> '); // 내부적으로 this가 kim이 된다. sum에도 영향을 주지 않는다. (영구적인 함수를 새로 만드는 것이다.)
console.log('kimSum()', kimSum());
