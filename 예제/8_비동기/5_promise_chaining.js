'use strict';

const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('test1');
    resolve(1), 1000;
  });
  console.log('test2');
});

new Promise((resolve, reject) => {
  resolve();
});

// 실행
fetchNumber //
  // then 핸들러에서 값을 그대로 반환한 경우에는 Promise.resolve(<핸들러에서 반환한 값>)을 반환하는 것과 같다.
  .then(num => num * 2) // num에 1이 전달되면 1 * 2 = 2  // () => {핸들러}   // 새로운 Promise에 2가 담겨 리턴된다.
  .then(num1 => num1 * 3) // num에 2가 전달되면 2 * 3 = 6
  // 아래와 같은 처리가 가능한 이유는 then의 인자로 값을 바로 전달하거나 Promise를 전달 할 수 있기 때문이다. (API 참조)
  // num에 6이 전달된 후 새로운 Promise를 만들어서 처리한다.
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000); // 1초 후에 6 - 1= 5, 5를 리턴한다.
    });
  })
  .then(num => console.log(num)); // num에 5를 전달받고 출력한다.
