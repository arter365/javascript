/*
  여러 개의 프로미스 연결하기 (Promise Chaining)
  프로미스의 또 다른 특징은 여러 개의 프로미스를 연결하여 사용할 수 있다는 점이다. 
  앞 예제에서 then() 메서드를 호출하고 나면 ***** 새로운 프로미스 객체가 반환된다. ***** 따라서, 아래와 같이 코딩이 가능하다. 
  then은 Promise의 프로토타입이다.
*/

function delayPromise(sec) {
  return new Promise((resolve, reject) => {
    console.log('...new Promise...');
    setTimeout(() => {
      console.log('...timeout...');
      resolve(new Date().toISOString());
    }, sec * 1000);
  });
}

delayPromise(1) // 1) 프로미스 실행
  .then(res => {
    console.log('first : ', res);
    return delayPromise(1); // 2) then 메서드를 실행하고 나면 새로운 프로미스 객체를 반환한다.
  })
  .then(res => {
    console.log('second : ', res);
    return delayPromise(1); // 3)
  })
  .then(res => {
    console.log('third : ', res);
    // 4) then 메서드를 실행하고 나면 새로운 프로미스 객체를 반환한다.  () => {핸들러}
    // then 핸들러에서 값을 그대로 반환한 경우에는 Promise.resolve(<핸들러에서 반환한 값>)을 반환하는 것과 같다.
    // then의 인자로 값을 바로 전달하거나 Promise를 전달 할 수 있기 때문
    return 'wow';
  })
  .then(res => console.log(res)); // 즉시 실행된다.

/*
- 결과 -
...new Promise...
...timeout...
first :  2021-01-11T08:58:32.847Z
...new Promise...
...timeout...
second :  2021-01-11T08:58:33.852Z
...new Promise...
...timeout...
third :  2021-01-11T08:58:35.169Z
*/
