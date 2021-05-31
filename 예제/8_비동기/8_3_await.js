'use strict';

/*
  await 키워드는 async가 붙은 함수 안에서만 사용 할 수 있다. 
*/

// =====> 정해진 시간동안 기다리는 함수
function delayTest(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// =====> 바나나를 가져오는 구문
/*
// promise 방식 
function getBanana() {
    return delayTest(1000)
    .then(() => 'banana')
}
*/
// 위의 구문처럼 체이닝을 하는것 보다 아래와 같이 await를 사용하여 동기방식의 코드처럼 보이게 하는게 더 이해하기 쉽다.
async function getBanana() {
  await delayTest(1000);
  return 'banana';
}

// =====> 사과를 가져오는 함수
async function getApple() {
  await delayTest(1000); // 여기서 await키워드를 사용하면 delayTest가 끝날때까지 기다려 준다.
  return 'apple';
}

// =====> 바나나와 사과를 동시에 가지고 오는 함수
/*
// 1) promise 방식 (사용한 결과를 보면 callback hell과 비슷하다)
async function pickFruits() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    })
}
*/
/*
// 2) async 방식 : getApple() 1초 후 getBanana()가 처리된다. 전체2초 소요
async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}
*/
/*
// 3) 병렬처리 : 서로 순서에 연관이 없으면 병렬로 처리한다. (1초에 실행된다.)
async function pickFruits() {
  const applePromise = getApple(); // 프로미스를 생성하면 바로 실행된다.
  const bananaPromise = getBanana(); // 프로미스를 생성하면 바로 실행된다.
  // 위에서 동시에 실행시키고 아래에서는 await 기다렸다가 출력하게 된다.
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
*/
// 4) 간단한 병렬처리 : 위의 구문도 지저분하기 때문에 아래와 같이 병렬로 처리한다.
function pickFruits() {
  // all은 Promise에서 제공하는 API로 인자로 프로미스 배열을 전달한다.
  return (
    Promise.all([getApple(), getBanana()]) //
      // 병렬로 다 받아지면 then에 전달된다. 전달받은 값을 join하였다.
      .then(fruits => fruits.join(' + '))
  );
}

// 5) 먼저 처리되는 것만 처리 :
function pickOnlyOne() {
  // 가장 먼저 값을 리턴하는 프로미스만 전달되어 진다.
  return Promise.race([getApple(), getBanana()]);
}

// =====> 실행구문
pickFruits().then(console.log); // apple + banana
pickOnlyOne().then(console.log); // 가장 먼저 리턴되는 것만 표시된다.
