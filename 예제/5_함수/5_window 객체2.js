'use strict';

// <<<전역>>> == window객체 / window 객체는 생략 가능.
// var를 선언하지 않으면 window객체에 동적으로 변수가 추가되어서 <<<전역>>>으로 사용된다.
window.a = 1;
a = 1;

// 자주 사용하는 미리 정의된 <<<전역>>> 함수 (predefined functions)를 자바스크립트가 제공한다.
//============== window객체를 명시 할 수 있다. ==================
// window.eval();
// window.isFinite();
// window.isNaN();
// window.parseFloat();
// window.parseInt();
// window.decodeURI();
// window.decodeURIComponent();
// window.encodeURI();
// window.encodeURIComponent();
// window.escape();
// window.unescape();

//============== window객체를 생략 할 수 있다. ==================
var x = window.prompt('x의 값을 입력하세요', 0);
var y = prompt('y의 값을 입력하세요', 0);

y = y + 'Cm'; // y의 값은 단위를 추가했다.

x = window.parseInt(x);
y = parseInt(y); // parse는 숫자만 뽑아 올 수 있다.

// window.alert(x+y); //아래와 같이 window객체는 생략이 가능하다.
alert(x + y);

// 객체를 생략한 것과 비슷하게 생겼지만 아래는 <<<연산자>>>이다. ===========
// 1. typeof
var z = 'text';
alert(typeof z);

// 2. instanceof
var cars = ['Saab', 'Volvo', 'BMW'];
cars instanceof Array; // true
cars instanceof Object; // true
cars instanceof String; // false
cars instanceof Number; // false
