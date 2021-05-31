'use strict';

// 암탉을 리턴하는 함수 : 300msec 후에 암탉을 리턴한다.
// Promise는 new하는 즉시 실행된다. 하지만 아래의 구문을 보면 함수를 getHen에 담는 작업일 뿐이라 new 되지 않는다.
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Chicken'), 300);
  });

// 달걀을 리턴하는 함수 : 암탉을 받아서 300msec 후에 달걀을 리턴한다.
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      var nowtime = new Date().getTime();
      if (nowtime % 2 === 0) {
        resolve(`${hen} => egg`);
      } else {
        reject(new Error(`error! ${hen} => egg`));
      }
    }, 300);
  });

// 계란후라이를 리턴하는 함수 : 달걀을 받아와서 300msec 후에 계란후라이를 리턴한다.
const cook = egg =>
  new Promise((resolve, reject) => {
    console.log(egg);
    setTimeout(() => resolve(`${egg} => Fried egg`), 300);
  });

// [1단계] : 중요 값을 가진 Promose (연속된 처리를 위함, 인터페이스를 사용함) 또는 Promise의 executor를 만들어서 동작 둘 중 선택
/*
getHen() //
  .then(hen => getEgg(hen)) // then 핸들러에서 값을 그대로 반환한 경우에는 Promise.resolve(<핸들러에서 반환한 값>)을 반환하는 것과 같다. // () => {핸들러}
  .then(egg => cook(egg))   
  .then(meal => console.log(meal)) // Chicken => egg => Fried egg
  .catch(error => console.log(error)); // ***** 어디서 에러가 나던지 제일 마지막에 한꺼번에 에러를 처리 할 수 있다. (중요)
*/

// [2단계]
// 위와 동일하지만 callback 함수를 전달 할 때 받아오는 값을 다른함수로 바로 전달하는 경우에는 아래와 같이 생략하여 코드를 깔끔하게 할 수 있다.(한가지만 받아서 그대로 전달하는 경우)
// getHen().then(getEgg).then(cook).then(console.log).catch(console.log); // Chicken => egg => Fried egg

// 3단계
// 위와 같이 prettier에서 한줄로 바꾸는데 가독성이 떨어진다. 이때 //를 사용하면 줄을 바꿀 수 있다.
/*
getHen() //
  .then(getEgg)
  .then(cook)
  .then(console.log) // Chicken => egg => Fried egg
  .catch(console.log);
*/

// ====================================================================
// 4단계
getHen() //
  .then(getEgg) // then 핸들러에서 값을 그대로 반환한 경우에는 Promise.resolve(<핸들러에서 반환한 값>)을 반환하는 것과 같다. // () => {핸들러}
  .catch(error => '빵') // 전체적인 프로미스 체인에 문제가 발생하지 않도록 개별적인 처리가 가능하다.
  .then(cook)
  .then(console.log) // Chicken => egg => Fried egg
  .catch(console.log);
