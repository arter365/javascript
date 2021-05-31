'use strict';

// step0 : 자바스크립트의 함수는 원래 아래와 같이 객체이다.(짝수이면 true를 홀수이면 false를 리턴한다.)
var isEven0 = new Function('element', 'return element % 2 === 0');

console.log('step0: ', isEven0(3)); // false
console.log('step0: ', isEven0(2)); // true

// ==================================================

// step1 : 자바스크립트에서 일반적인 함수작성 (짝수이면 true를 홀수이면 false를 리턴한다.)
function isEven1(element) {
  if (element % 2 === 0) {
    return true;
  }
  return false;
}

console.log('step1: ', isEven1(3)); // false
console.log('step1: ', isEven1(2)); // true

// ==================================================

// step2 : 코드간소화
function isEven2(element) {
  return element % 2 === 0;
}

console.log('step2: ', isEven2(3)); // false
console.log('step2: ', isEven2(2)); // true

// ==================================================

// step3 : step0에서 확인했듯이 함수도 객체이기 때문에 변수에 담는것이 가능하다.
var isEven3 = function (element) {
  return element % 2 === 0;
};

console.log('step3: ', isEven3(3)); // false
console.log('step3: ', isEven3(2)); // true

// ==================================================

// 함수를 변수에 담아서 사용하는 이유 (callback 처리를 위함)
// 예제 : isEven3 함수를 [2,4,6,8] 배열에 일괄 적용하고 싶다. 이때 배열에서 제공하는 every()함수가 있다. 이 때 every함수의 인자로 callback함수가 전달된다.
/* callback 함수란 : 자바스크립트 함수 표현식에서 익명 함수의 대표적인 용도가 바로 콜백함수 이다. 콜백 함수는 코드를 통해 명시적으로 호출하는 함수가 아니라, 
                     개발자는 단지 함수를 등록하기만 하고, 어떤 이벤트가 발생했거나 특정 시점에 도달했을 때 시스템에서 호출되는 함수를 말한다. 
                     또한, 특정 함수의 인자로 넘겨서, 코드 내부에서 호출되는 함수 또한 콜백 함수가 될 수 있다. */

var result1 = [2, 4, 6, 8].every(isEven3); // 함수 실행(isEven3())이 아니라 참조(isEven)를 전달하고 싶은 것이다. isEven4()를 하면 함수가 실행된다.
console.log('every1', result1);

// ==================================================

// step4 : step3의 내용에서 function 키워드를 생략하고 => 를 사용할 수 있다.
var isEven4 = element => {
  return element % 2 === 0;
};

console.log('step4: ', isEven4(3)); // false
console.log('step4: ', isEven4(2)); // true

// 함수 실행(isEven4())이 아니라 참조(isEven)를 전달하고 싶은 것이다.
var result2 = [2, 4, 6, 8].every(isEven4);
console.log('every2', result2); // 결과는 하나만 false라도 false이다.

// ==================================================

// 2020(es8)년 부터 추가된 callback 함수로서 작동하는 화살표 함수를 작성해 본다. 익명함수이기 때문에 () => {}를 습관처럼 만들고 사용한다.
// callback 함수를 구현해서 던지는 방식이다.
var result3 = [2, 4, 6, 8].every(e => {
  return e % 2 === 0;
}); // ()안에는 위의 예제처럼 element 요소가 전달될 것을 예상하기 때문에 엘리먼트 e를 전달한다.
console.log('every3', result3);

// ==================================================

// 위의 형태를 한번 더 생략하면 한줄짜리 코드는 {}를 생략할 수 있고 {}를 생략하면 return 키워드도 생략해야 한다.
var result4 = [2, 4, 6, 8].every(e => e % 2 === 0);
console.log('every4', result4);
