'use strict';

/*
    Java의 컬렉션 중 Map과는 다른개념 이다. 
    값을 순환시키면서 특정한 일을 처리하기 위한 목적으로 사용된다.
    array.map(callbackFunction(currentValue, index, array), thisArg)
*/

var testArray = [1, 2, 3, 4, 5];

// 일반적인 함수 전달
function test(value, index) {
  return value + 5;
}

var returnArray1 = testArray.map(test);

// 인자 안에서 함수 구현
var returnArray2 = testArray.map(function (value, index) {
  return value + 5;
});

// 화살표 함수 모양
var returnArray3 = testArray.map((value, index) => value + 5);

// -------------- 실행결과 --------------
console.log('testArray', testArray);
console.log('returnArray1', returnArray1);
console.log('returnArray2', returnArray2);
console.log('returnArray3', returnArray3);
