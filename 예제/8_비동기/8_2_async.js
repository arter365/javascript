'use strict';

// async & await는 깔끔하게 promise를 사용할 수 있는 방법이다.
// 용도에 따라 promise 또는 async & await를 적절히 사용해야 한다. (코드의 가독성이 좋은 쪽으로 선택한다.)

// async : async를 붙이는것 만으로 자동으로 내부의 코드는 promise를 사용하는 방식으로 바뀐다.
async function fetchUserAsync() {
  return 'ellie';
}

// Promise : 위의 async는 아래와 같이 내부적으로 Promise 구문으로 바뀌어서 실행된다.
function fetchUserPromise() {
  return new Promise((resolve, reject) => {
    resolve('ellie');
  });
}

const user = fetchUserAsync();
user.then(console.log); // 값을 받아서 바로 사용하기 때문에 인자생략
console.log(user);

/*
    (async 코드를 검사 Console로 보면 아래와 같이 promise를 리턴하는 것을 볼 수 있다. )
    Promise
    __proto__: Promise
    [[PromiseState]]: "fulfilled"
    [[PromiseResult]]: "ellie"
*/
