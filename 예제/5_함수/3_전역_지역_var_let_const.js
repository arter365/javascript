// "use strict";

// var는 {}블록 scope가 아닌 function scope이다. ==================================================================
{
  var a = 1;
}

var v1 = function () {
  return a;
};

console.log('v1', v1()); // v1 1

// var는 function안에 있을 경우에만 지역변수이다. function scope ====================================================
var v2 = function () {
  var b = 2;
  return b;
};

console.log('v2', v2()); // v2 2
// console.log("v2 : " + b);  // b가 정의되지 않았다는 에러가 발생한다.

// var를 선언하지 않으면 window객체에 동적으로 변수가 추가되어서 전역으로 사용된다. ====================================
// 전역변수
var v3 = function () {
  window.c = 3; // 전역은 가급적 사용하지 않는다.
};
// 전역변수 (***** window객체는 생략 할 수 있다. *****)
var v4 = function () {
  d = 4; // use strict를 적으면 에러가 발생한다. (안좋은 사용방법이다.)
};

// 함수실행으로 메모리에 올라가면 ...
v3();
v4();
// ... 변수를 사용 할 수 있다.
console.log('v3', window.c);
console.log('v4', d);

// var는 같은 변수명을 중복해서 선언할 수 있다.
var v5 = 'Hello';
var v5 = 'Hi';
console.log('v5', v5); // Hi

// ES6이후 추가된 let , const (ES6에서는 var보다 let과 const 사용을 권장한다.)=================================================
// 일반 프로그램의 상식과 동일하다. {}블록 scope를 사용하고 , 같은 변수명을 사용 할 수 없다.
// let================
let v6 = 'outter hello';
// let v6 = "second hello"; // 같은 변수명 사용 시 error
{
  let v6 = 'inner hello';
  console.log('let inner', v6); // let inner inner hello
}
console.log('let outter', v6); // let outter outter hello

v6 = 'change hello'; // 변수에 값 변경 가능
console.log('let change', v6); // let change chage hello

// const ==============
/*
  const는 블록의 문맥 내에서 재할당할 수 없는 변수 선언이다. 즉, 한 번 선언하면 변경할 수 없다. 
  그렇지만 값이 변경되지 않는 것, 즉 불변값이 되는 것은 아니다. 
  const에 배열을 할당하는 경우에도 배열의 항목은 바뀔 수 있다. 
  자바스크립트에서는 재할당할 수 없는 const를 기본으로 선택하는 것이 좋다. 
  const를 자주 사용하고 let은 드물게 사용하면 변경되는 부분을 예측할 수 있다. 
*/
const v7 = 'outter const'; // 상수선언
// const v7 = 'two const';      // 같은 변수명 사용 시 error
// let v7 = 'three const';      // 같은 변수명 사용 시 error
// var v7 = 'four const';       // 같은 변수명 사용 시 error
{
  const v7 = 'inner const';
  console.log('const inner', v7);
}
console.log('const outter', v7);
// v7 = 'change const';    // 변수에 값 변경 불가 (상수)
