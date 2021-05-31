// "use strict";

// 아래와 같이 사용하는 것도 객체(클래스가 아니라 객체, Map)를 사용하는 것이지만 선언한 내용을 재 사용하는 방식이 아니다.
var kim = {
  name: 'kim',
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};

var lee = {
  name: 'lee',
  first: 10,
  second: 10,
  sum: function () {
    return this.first + this.second;
  },
};

// Consturctor function(생성자 함수)을 만들어서 사용하는 방법 (함수의 첫글자가 대문자면 생성자 함수로 보는것이 관례이다.)
function Person(name, first, second) {
  this.name = name; // use strict를 사용하면 에러발생
  this.first = first; // use strict를 사용하면 에러발생
  this.second = second; // use strict를 사용하면 에러발생
  this.sum = function () {
    return this.first + this.second;
  };
  console.log('Person Constructor function...');
}

console.log('함수로 호출', Person()); // undefined 아무것도 리턴하지 않기 때문

// 객체로 사용할 때는 new를 사용한다.
var kim2 = new Person('kim', 10, 20);
console.log(kim2.sum()); // 30
var lee2 = new Person('lee', 10, 10);
console.log(lee2.sum()); // 20
