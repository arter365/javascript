'use strict';

// 자바스크립트에서 클래스라는 개념이 들어오기전에 상속을 사용하는 모습이라고 보면 된다.

//============== __proto__를 이해 할 수 있는 간단한 예제. ======================
// 간단한 객체를 만든다.
var kim1 = {
  name: 'kim',
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};

// 객체를 만드는데 함수를 만드는 것이 귀찮다. 그래서 kim의 함수를 사용하고 싶다.
var lee1 = {
  name: 'lee',
  first: 40,
  second: 50,
  // 자기만의 함수도 만들 수 있다.
  avg: function () {
    return (this.first + this.second) / 2;
  },
};
lee1.__proto__ = kim1; // 이렇게 사용하면 lee에서 sum()을 찾아서 없으면 object상속을 받은 kim에서 찾는다. 하지만 사용 시 this는 호출한 lee1 객체에서 찾는다.

console.log('kim1.sum() : ', kim1.sum()); // this는 호출한 객체에 의해서 결정된다.
console.log('lee1.sum() : ', lee1.sum());
console.log('lee1.avg() : ', lee1.avg());

//============== __proto__는 편하지만 표준이 아니다. object 상속이지만 명시적인 방법을 추천한다. (결과 동일함)======================
var kim2 = {
  name: 'kim',
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};

// 객체를 만드는데 함수를 만드는 것이 귀찮다. 그래서 kim의 함수를 사용하고 싶다.
var lee2 = Object.create(kim2);
lee2.name = 'lee';
lee2.first = 40;
lee2.second = 50;
lee2.avg = function () {
  return (this.first + this.second) / 2;
};

console.log('kim2.sum() : ', kim2.sum());
console.log('lee2.sum() : ', lee2.sum());
console.log('lee2.avg() : ', lee2.avg());
