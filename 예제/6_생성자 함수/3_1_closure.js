var incleaseBtn = document.getElementById('inclease');
var count = document.getElementById('count');

// 카운트 상태를 유지하기 위한 전역 변수
/*
  counter 변수는 전역변수이기 때문에 다른곳에서 의도치 않은 변경이 가능하다. 
  이는 기능적 오류를 범할 수 있다. counter변수는 increase()에서 관리하는 것이 안전하다. 
*/
var counter = 0;

function increase() {
  return ++counter;
}

incleaseBtn.onclick = function () {
  count.innerHTML = increase();
};
