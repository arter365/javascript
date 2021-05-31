'use strict';

// 자바스크립트에서 class 문법이 나오기 이전에 사용하던 상속 방식 (소스분석을 위해서 알아야 함.)

// 1) 아무 연관이 없는 두 객체를 만든다. (연결 안한 상태)
var superObj1 = { superVal1: 'super1' };
var subObj1 = { subVal1: 'sub1' };

console.log('===========================================================');

// 2) 부모와 자식간에 링크를 걸어준다. (연결 한 상태 : 비표준 이지만 더 많이 사용한다)
var superObj2 = { superVal2: 'super2' };
var subObj2 = { subVal2: 'sub2' };

subObj2.__proto__ = superObj2; // __proto__는 메서드이다. (표준이 아니라 deprecated)

console.log('subObj2.subVal2 =>', subObj2.subVal2); // sub2
console.log('subObj2.superVal2 =>', subObj2.superVal2); // super2

console.log('===========================================================');

// 3) 부모와 자식간에 링크를 걸어준다. (연결 한 상태 : 표준)
var superObj3 = { superVal3: 'super3' };
var subObj3 = Object.create(superObj3);
subObj3.subVal3 = 'sub3';

console.log('subObj3.subVal3 =>', subObj3.subVal3);
console.log('subObj3.superVal3 =>', subObj3.superVal3);
