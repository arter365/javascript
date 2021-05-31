var incleaseBtn = document.getElementById('inclease');
var count = document.getElementById('count');

// 카운트 상태를 유지하기 위한 지역 변수
/*
  전역변수를 지역변수로 변경하여 의도치 않은 상태 변경은 방지했다. 
  하지만 increase 함수가 호출될 때마다 지역변수 counter를 0으로 초기화하기 때문에 언제나 1이 표시된다. 
  다시 말해 변경된 이전 상태를 기억하지 못한다. 이전 상태를 기억하도록 클로저를 사용하여 이 문제를 해결해보자. 
*/

function increase() {
  // 카운트 상태를 유지하기 위한 지역 변수
  var counter = 0;
  return ++counter;
}

incleaseBtn.onclick = function () {
  count.innerHTML = increase();
};
