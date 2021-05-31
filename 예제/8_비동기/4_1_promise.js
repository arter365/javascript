'use strict';

/*
  프로미스는 자바스크립트 비동기 처리에 사용되는 객체이다. 여기서 자바스크립트의 비동기 처리란 ‘특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하는 
  자바스크립트의 특성’을 의미한다.

  프로미스의 3가지 상태(states)
  프로미스를 사용할 때 알아야 하는 가장 기본적인 개념이 바로 프로미스의 상태(states)이다. 여기서 말하는 상태란 프로미스의 처리 과정을 의미한다. 
  new Promise()로 프로미스를 생성하고 종료될 때까지 3가지 상태를 갖는다.
    Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
                    먼저 아래와 같이 new Promise() 메서드를 호출하면 대기(Pending) 상태가 된다.
                    new Promise();
    Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
                    여기서 콜백 함수의 인자 resolve를 아래와 같이 실행하면 이행(Fulfilled) 상태가 된다.
                    new Promise(function(resolve, reject) {
                      resolve();
                    });
    Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태.
                    new Promise()로 프로미스 객체를 생성하면 콜백 함수 인자로 resolve와 reject를 사용할 수 있다고 했다. 여기서 reject를 아래와 같이 호출하면 실패(Rejected) 상태가 된다.
                    new Promise(function(resolve, reject) {
                      reject();
                    });
*/

// 1. Producer
// Promise의 생성자에는 executor callback 함수가 들어간다. executor은 arrow함수로 만들어주고(무거운 일을 처리한다) executor은 resolve와 reject callback 함수를 넣어준다.
// resolve : 성공적인 완료 후 데이터를 전달하는 resolve callback함수, reject : 문제가 생기면 사용하는 callback 함수
// *** 주의 및 특징 *** : promise를 생성하면 executor callback 함수가 자동으로 바로 실행된다.
//                       executor는 처리 성공 여부에 따라 resolve나 reject를 호출한다. (호출되도록 코딩한다.)

// executor의 인수 resolve, reject :개발자는 resolve와 reject를 신경 쓰지 않고 executor 안의 코드만 작성하면 된다.
//                                  대신 executor에선 결과를 즉시 얻든, 늦게 얻든 상관없이 상황에 따라 인수로 넘겨준 콜백 중 하나를 반드시 호출해야 한다.
//                                  resolve(value) : 일이 성공적으로 끝난 경우, 그 결과를 나타내는 value와 함께 호출
//                                  reject(error) : 에러 발생 시 에러 객체를 나타내는 error와 함께 호출

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // 성공과 실패를 인위적으로 만들어주기 위한 코드
    var nowtime = new Date().getTime();

    if (nowtime % 2 === 0) {
      // 주어진 값으로 이행하는 Promise 객체를 반환. then메서드를 따라가고
      resolve('ellie'); // ()는 실행이다.
    } else {
      reject(new Error('no network')); // ()는 실행이다.
    }
  }, 2000);
});

// 2. Consumers : then, catch, finally를 사용하여 값을 받아 올 수 있다.
// Promise를 사용하면 동기 메서드를 사용하는 것처럼 값을 받을 수 있다. 하지만 최종 결과를 반환하지 않고 Promise를 반환해서 미래의 어떤 시점에 결과를 제공한다.
var v1 = promise //
  // then에 값을 받아오는 callback 함수를 만들어서 전달하면 된다. (제일 중요한 내용 *****)
  .then(value => {
    console.log(value); // then은 새로운 Promise를 만들어서 리턴한다.
  })
  // then의 리턴값도 promise이기 때문에 체이닝이 가능하다.
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });
