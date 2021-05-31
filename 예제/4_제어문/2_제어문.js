'use strict';

// 배열
var ar = ['hello', 'hi', 'greeting'];
// 객체
var ob = { id: 1, title: 'hello', writeId: 'twotone' };

// 일반적인 for문 사용방법
for (var i = 0; i < ar.length; i++) console.log('일반적인 for', ar[i]);

//=========================== for in은 배열, 객체 모두 동일하게 처리 할 수 있다. ===========================
// for in은 값이 아닌 키(인텍스를 리턴한다) 값을 순회한다.
for (var key in ar) {
  console.log('for in 배열 키', key);
  console.log('for in 배경 값', ar[key]);
}
// 배열이든 객체이든 for in을 사용하면 동일하게 사용 할 수 있다.
for (var key in ob) {
  console.log('for in 객체 키', key);
  console.log('for in 객체 값', ob[key]);
}
