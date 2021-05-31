'use strict';

// ===========================================
function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}
Person.prototype.sum = function () {
  return this.first + this.second;
};

// ===========================================
function PersonPlus(name, first, second, third) {
  // 함수는 객체이다. 객체마다 존재하는 call을 호출해서 힘수를 상속처럼 사용이 가능하다.
  Person.call(this, name, first, second); // this는 메모리 상에 만들어질 나의(PersonPlus) 레퍼런스 주소이다.
  this.third = third;
}
// PersonPlus.prototype.__proto__ = Person.prototype;  // 이렇게 하면 kim.sum()을 사용할 수 있다. (표준이 아니다. 아래의 두줄로 대체한다.)
PersonPlus.prototype = Object.create(Person.prototype);
PersonPlus.prototype.constructor = PersonPlus;

PersonPlus.prototype.avg = function () {
  return (this.first + this.second + this.third) / 3;
};

// ===========================================
var kim = new PersonPlus('kim', 10, 20, 30);
console.log('kim.sum()', kim.sum());
console.log('kim.avg()', kim.avg());
