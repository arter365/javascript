var incleaseBtn = document.getElementById('inclease');
var count = document.getElementById('count');

// 클로저(closure)의 개념

/*
  클로저는 자바스크립트 고유의 개념이 아니라 함수를 일급 객체로 취급하는 함수형 프로그래밍 언어
  (Functional Programming language: 얼랭(Erlnag), 스칼라(Scala), 하스켈(Haskell), 리스프(Lisp)…)에서 사용되는 중요한 특성이다.
*/

/*
    이 함수는 자신이 생성됐을 때의 렉시컬 환경(Lexical environment)을 기억하는 클로저다. 
    즉시실행함수는 호출된 이후 소멸되지만 즉시실행함수가 반환한 함수는 변수 increase에 할당되어 inclease 버튼을 클릭하면 클릭 이벤트 핸들러 내부에서 호출된다. 
    이때 클로저인 이 함수는 자신이 선언됐을 때의 렉시컬 환경인 즉시실행함수의 스코프에 속한 지역변수 counter를 기억한다. 
    따라서 즉시실행함수의 변수 counter에 접근할 수 있고 변수 counter는 자신을 참조하는 함수가 소멸될 때가지 유지된다.
    클로저는 정보의 은닉화에 사용된다는 말을 이 예제를 통해 확인 할 수 있다. 
*/

// var increase = (function () {
//   // 카운트 상태를 유지하기 위한 자유 변수
//   var counter = 0;
//   // 클로저를 반환
//   return function () {
//     return ++counter;
//   };
// })();

var increase = (() => {
  var counter = 0;
  return () => ++counter;
})();

incleaseBtn.onclick = function () {
  count.innerHTML = increase();
};
