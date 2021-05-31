'use strict';

var res;

// 변수명을 키로 사용하는 경우가 아니면 첫번째 방법을 표준으로 사용한다.
// 자바스크립트에서 자료형 Map이 없다. 객체를 사용하여 Map으로 사용한다.
//======================================== 동적인 객체 생성 ========================================
var obj1 = new Object(); // 첫글자를 대문자로 하면 객체의 생성자
// 자바스크립트는 동적인 객체 정의를 사용한다.
obj1.kor = 30;
obj1.eng = 70;
obj1.math = 80;
// 자바스크립트는 자유도가 높기 때문에 아래와 같이 오타에 의한 오류를 찾기 힘들다.
// obj1.Kor = 40;       (K가 대문자로 잘못들어갔다.)
res = obj1.kor + obj1.eng;
console.log('객체의 값으로 계산한 결과', res);

//======================================== 변수명을 키로 사용하는 객체 생성 ========================================
// 변수명을 키로 사용하는 Map
var obj2 = new Object();
obj2['kor'] = 30;
obj2['eng'] = 70;
obj2['math'] = 80;

res = obj2['eng'] + obj2['math'];
console.log('객체의 값으로 계산한 결과 (변수명키)', res);

//=========================== JSON을 다룰 때 Map 객체임을 인지해야 한다. ===========================
