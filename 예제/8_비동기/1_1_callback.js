'use strict';

function delayTest(sec, callback) {
  setTimeout(() => {
    callback(new Date().toISOString());
  }, sec * 1000);
}

delayTest(1, res => console.log(res));

/*
  // 실행하는 측 9번째 줄
    1) delayTest() 실행 
    2) 첫번째 인자 = 1 (1초)
    3) 두번째 인자 = callback 함수를 작성(  res => console.log(res)  )해서 레퍼런스(예 : 10000번지)를 넘김
    
  // 실행되는 함수 측 3번째 줄 
    1) 인자로 1초 받음 
    2) 함수의 주소 (예 : 10000번지)를 받음 
    3) 1초 뒤 10000번지의 함수가 실행됨 
    4) 실행되는 10000번지 콜백함수를 보면 아래와 같다. 
       function (new Date().toISOString()) {
         console.log(인자로 들어온 시간값)
       }
*/
