'use strict';

// 자바스크립트는 동기방식이다. 코드가 hoisting된 후 차례대로 실행된다.
// hoisting: var, function 선언이 제일 위로 올라가는 것. (실제로 코드의 순서를 바꾼다기 보다 처리순서를 내부적으로 바꾼다.)

// ! 자바스크립트의 동기방식, 비동기방식 ============================================================================================

// * 1. 동기실행방식 (synchronous)
console.log('동기테스트', '1');
console.log('동기테스트', '2');
console.log('동기테스트', '3');
/* 결과 
동기테스트 1
동기테스트 2
동기테스트 3
*/

// * 2. 비동기실행방식 (asynchronous)
console.log('비동기테스트', '1');
// 브라우저 함수인 setTimeout()에게 1초 뒤에 콜백함수를 호출 해 달라는 예제 (callback : 전달 해 준 함수를 나중에 호출 해줘!)
// setTimeout(function () {
//   console.log('비동기테스트', '2');
// }, 1000);
setTimeout(() => {
  console.log('비동기테스트', '2');
}, 1000);
console.log('비동기테스트', '3');
/* 결과 
비동기테스트 1
비동기테스트 3
비동기테스트 2
*/

// ! Callback도 Synchronous callback과 Asynchronous callback로 나뉜다. ============================================================

// * Synchronous callback
function printImmediately(testPrint) {
  testPrint(); // ! 자바스크립트는 인자로 무엇이 전달 될 지 모른다. 이 예제에서는 함수가 전달되었고 그 함수를 실행시킨 것이다.
}
// V1 : testPrint 함수를 만들어서 printImmediately에 인자로 전달하면 그 함수 안에서 전달받은 함수를 실행한다.
let testPrint = function () {
  console.log('hello4');
};

printImmediately(testPrint);

// V2 : V1과 동일하지만 함수를 printImmediately 인자 부분에서 함수를 만들어서 전달한다.
printImmediately(function () {
  console.log('hello3');
});

// V3 : V2와 동일하지만 ES6 형태로 표현했다.
printImmediately(() => console.log('hello2'));

// * Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000);
