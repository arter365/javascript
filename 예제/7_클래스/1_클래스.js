'use strict';

// prototype를 알고 있으면 class는 동일하다.

class Person {
  // 생성자
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }

  //function이라는 키워드 없이 함수를 선언한다. (실제로는 프로토타입으로 만들어지고 하나를 공유한다.)
  sum() {
    return this.first + this.second;
  }
}

// get 메서드는 프로토타입으로 선언 해 봤다. (테스트 용도)
Person.prototype.getName = function () {
  return this.name;
};

var kim = new Person('kim', 10, 20);
console.log('kim', kim);
console.log('kim', kim.getName());
console.log('kim', kim.sum());

var lee = new Person('lee', 30, 40);
console.log('lee', lee);
lee.getName = function () {
  return this.name + '입니다.';
};
console.log('lee', lee.getName());
// 오버라이드
lee.sum = function () {
  return this.name + ' : ' + (this.first = this.second);
};
console.log('lee', lee.sum());
