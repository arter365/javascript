'use strict';

// ===================== JSON 표현방식 =====================
// JavaScript Object 표현 방식
var json1 = new Object();
json1.kor = 30;
json1.eng = 70;
json1.math = 80;

// JavaScript Object Notation(표기법) (JSON) 표현방식 *** 위와 동일하게 객체로 Map을 만드는 방식이다. ***
var json2 = { kor: 30, eng: 70, math: 80 };

// ===================== 배열에 객체를 담을 수 있다. =====================
var arr = [3, 4, 5, 6, json2, [7, 8, 9]];

// ===================== 자유도가 높다 =====================
// arr에서 eng값 출력
var res;

res = arr[4].eng;
console.log('arr에서 eng 값 출력1', res);

res = arr[4]['eng'];
console.log('arr에서 eng 값 출력2', res);

res = arr[5][1];
console.log('arr에서 8 출력', res);
