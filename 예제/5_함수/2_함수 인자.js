'use strict';

// 인자를 2개 받는 함수
var ex1 = function (x, y) {
  var num = arguments.length;
  console.log('arguments length', num);
  for (var key in arguments) {
    console.log(arguments[key]);
  }
  return x + y;
};

// 함수에 전달하는 인자는 실제 수량과 달라도 문제없다. (인자는 arguments에 보관한다.)
var res = ex1(1, 2, 3, 4, 'hello');
console.log('결과', res); // 3

// =================================================================================
// es6 Rest parameters (...은(펼침연산자) 배열을 의미한다.)
var ex2 = function (...args) {
  // 일반 for
  for (var i = 0; i < args.length; i++) {
    console.log('일반 for문 : ', args[i]);
  }
  // for of
  for (var arg of args) {
    console.log('of for문 : ', arg);
  }

  // for in
  for (var arg in args) {
    console.log('in for문 : ', args[arg]);
  }

  // foreach
  args.forEach(arg => console.log('foreach문 : ', arg));
};

ex2('dream', 'coding', 'apple');

// =================================================================================
// Default parameters (es6)
// 기존에 파라메터에 값이 없을 경우를 대비한 코딩
function showMessage1(message, from) {
  if (from === undefined) {
    from = 'unknown';
  }
  console.log(`${message} by ${from}`);
}
// es6에 추가된 디펄트 파라메터 설정 방법
function showMessage2(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}

showMessage1('msg1'); // msg1 by unknown
showMessage2('msg2'); // msg2 by unknown
