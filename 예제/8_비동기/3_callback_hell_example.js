'use strict';

// 화살표 함수
/*
=> 화살표 함수는 무명(anonymous) 함수를 생성하는 방법 중의 하나이다. 
1. 함수 내용이 한줄인 경우 함수내용을 감싸는 {}를 사용하지 않아도 된다. 
2. {}가 없는 경우 해당 함수의 실행결과를 자동으로 리턴한다. 
3. 함수 내용이 한 줄 이상인 경우 return을 사용해서 결과를 리턴한다. 
4. 파라메터가 한개인 경우 파라메터를 감싸는 ()를 생략 할 수 있다. 
5. 파라메터가 없는 경우 ()를 표시해야 한다. 
6. 콜백 함수로 사용 할 수 있다. 이 경우 일반적인 함수 표현식보다 표현이 간결하다. 
7. 화살표 함수에는 없는 것 : 함수이름 , this , arguments
*/

// Callback Hell example
// UserStorage예제에는 2개의 API가 있다. (코드의 효율을 떠나 그냥 예제이다.)
class UserStorage {
  // 사용자 로그인 id, password를 받아서 로그인에 성공하면 사용자의 데이터와 함께 onSuccess callback 함수를 호출하고, 에러가 발생하면 onError callback 함수를 호출한다.
  loginUser(id, password, onSuccess, onError) {
    // 실제 서버가 없기 때문에 setTimeout()을 사용하여 일정한 딜레이를 주어 네트워크통신을 하는것 처럼 만들어 본다.
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000); // 2초 뒤에 코드블럭이 실행된다.
  }

  // user 데이터를 받아서 사용자의 역할을 서버에서 받아온다. 성공하면 onSuccess callback 함수를 호출하고, 에러가 발생하면 onError callback 함수를 호출한다.
  getRoles(user, onSuccess, onError) {
    console.log('========== onSuccess Function : ', onSuccess);
    console.log('========== user : ', user);

    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

// id, password를 전달하고 onSeccess함수와 onError함수도 만들어서 전달한다. (위의 loginUser의 onSeccess, onError은 설계이다. 실제로 호출하는 곳에서 만들어 전달한다.)
userStorage.loginUser(
  // 1) loginUser 함수의 if문에서 id, password 파라메터가 사용된다.
  id, // ----- id 전달
  password, // ----- password 전달
  // 2) 위의 1번 로직이 성공할 할 때 사용할 함수를 만들어서 loginUser 함수의 파라메터로 전달한다.
  // ***** 인자로 함수를 만들어서 던지면 (callback함수) 설계시 만들어 두었던 명칭으로 치환된다.
  user => {
    // ----- onSuccess 함수를 전달 (id라는 명칭이 위에 있어서 user라는 파라메터명을 사용함. 파라메터가 하나라서 ()생략함.)
    // 2) getRoles 함수를 실행한다. 이 때 인자로 id값(user)를 전달한다. 이때도 onSuccess 함수와 onError 함수를 만들어서 전달한다.
    console.log('========== user : ', user); // ellie (id)
    userStorage.getRoles(
      user,
      // 익명함수를 만들어 onSuccess 파라메터로 던진다. 이렇게 하면 함수명은 onSuccess가 되고 설계시 파라메터로 만든 값:객체{name: 'ellie', role: 'admin'}이 userWithRole 변수로 들어간다.
      userWithRole => {
        console.log(userWithRole);
        alert(
          `Hello ${userWithRole.name}, you hava a ${userWithRole.role} role`
        );
      },
      error => {
        console.log(error);
      }
    );
  },
  // 3) 위의 1번 로직이 실패 할 때 사용할 함수를 만들어서 loginUser 함수의 파라메터로 전달한다.
  error => {
    // ----- onError 함수를 전달
    console.log(error);
  }
);
