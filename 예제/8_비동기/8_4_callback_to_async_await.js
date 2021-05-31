'use strict';

/* 
  주의 : 기존의 코드에서 아래와 같이 setTimeout은 비동기적인 함수로 그안의 콜백함수에서 return을 하면 실제 loginUser 함수에서 return 되는 것이 아니다.
        1) setTimeout()은 비동기 함수이다. 이 말은 window에 함수가 위탁되어서 정해신 시간 후에 실행 큐에 넣어주기 때문에 loginUser함수와 setTimeout()함수는 실행이 분리된다는 뜻이다. 
        2) 실행이 분리되기 때문에 loginUser함수에는 리턴이 없는 상황이다. 그래서 undefined가 나온다.  
        호출 스택 참조 : https://helloworldjavascript.net/pages/285-async.html 
*/
/*
  async loginUser(id, password) {
      setTimeout(() => {
        if (
          (id === 'ellie' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          return id;
        } else {
          return new Error('not found');
        }
      }, 2000);
  }
*/

class UserStorage {
  async loginUser(id, password) {
    await delay(1000);
    if (
      (id === 'ellie' && password === 'dream') ||
      (id === 'coder' && password === 'academy')
    ) {
      return id;
    } else {
      return new Error('not found');
    }
  }

  async getRoles(user) {
    await delay(1000);
    if (user === 'ellie') {
      return { name: 'ellie', role: 'admin' };
    } else {
      return new Error('no access');
    }
  }

  async getUserWithRole(user, password) {
    const userPromise = await this.loginUser(user, password);
    const role = await this.getRoles(user);
    return `Hello ${role.name}, you have a ${role.role} role`;
  }
}

/*
  delay를 아래와 같이 처리하는 이유는 promise가 있어야 await를 처리 할 수 있기 때문이다. 
  MDN : await 문은 Promise가 fulfill되거나 reject 될 때까지 async 함수의 실행을 일시 정지하고, 
      Promise가 fulfill되면 async 함수를 일시 정지한 부분부터 실행합니다. 
      이때  await 문의 반환값은 Promise 에서 fulfill된 값이 됩니다.
      https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/await
*/
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage //
  .getUserWithRole(id, password)
  .then(alert)
  .catch(console.log);
