'use strict';

// 이렇게 사용하면 Person1이라는 객체를 만들 때 마다 sum이라는 함수도 계속 만들게 된다. (자바는 메서드 영역에 한개만 올린다)
function Person1(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.sum = function () {
    return this.first + this.second;
  };
}

// 프로토타입(원형)은 함수를 밖으로 빼서 메모리 상에 하나만 존재하게 하는 작업을 말한다.
function Person2(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

Person2.prototype.sum = function () {
  // 상속에 가깝다.
  return this.first + this.second;
};

// 수천개의 클래스를 만들어도 메서드는 하나만 존재한다. 클래스 이름.함수를 호출하면 자바스크립트에서는 메서드 라고 한다. 나머지는 함수
var kim = new Person2('kim', 10, 20);
var lee = new Person2('lee', 10, 10);
console.log('kim', kim.sum());
console.log('lee', lee.sum());

// 만약에 lee만 sum의 동작을 다르게 만들고 싶다면 아래와 같이 할 수 있다. (자바의 오버라이딩이다.)
lee.sum = function () {
  return 'modify : ' + (this.first + this.second);
};

console.log('kim', kim.sum());
console.log('lee', lee.sum());

// 후에 클래스가 나오는데 실제 내부동작은 prototype 방식으로 동작하는 눈속임이다.
