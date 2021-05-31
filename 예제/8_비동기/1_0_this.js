// 'use strict';    // 일반적인 자바스크립트의 특성을 테스트하기 위해 주석처리한다.

/*
    MDN : javascript에서 함수의 this 키워드는 다른 언어들과 비교하여 조금 다르게 동작한다. 
    또한 strict mode와 non-strict mode 사이에서도 조금 다르다. 
    대부분의 경우, this의 값은 함수를 ***** 호출하는 방법에 의해 결정된다.***** (선언된 위치에 따라 결정되는 예 : closure)
    실행하는 동안의 할당에 의해 설정될 수 없고, 함수가 호출될 때 마다 다를 수 있다. 
    ES5는 함수의 this 값이 함수가 어떻게 호출되었는지 개의치 않고 설정할 수 있는 bind 메소드를 소개했다. (호출하는 방법에 상관없이 this를 묶어주는 bind)
    참고 : 자바는 설계시의 this이다. 나중에 메모리에 만들어질 메모리 주소에 .을 찍는 것이다. (this.) 결론 : 일반 프로그램의 this와 다르다. 
*/

// 테스트 1) =====================================================================
var someone = {
  name: 'jongseok',
  whoAmI: function () {
    console.log(this);
  },
};

// 중요 : this는 호출하는 방법에 의해 결정된다.

someone.whoAmI(); // {name: 'jongseok', whoAmI:f}       // ** 누가 호출했나? : whoAmI()를 직접적으로 후출한 것은 someone . 이다.

var myWhoAmI = someone.whoAmI;
// 아래의 레퍼런스(컨텍스트)도 위와 동일한 함수의 주소를 가르키고 있다.
myWhoAmI(); // Window                                   // ** 누가 호출했나? : var myWhoAmI는 글로벌에 있고 글로벌은 window객체이다. 그래서 window(브라우저)가 호출한 것이다.

// 테스트 2) =====================================================================
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
// ** 누가 호출했나? : 버튼에 someone.whoAmI 함수를 넘긴것이다.(함수를 호출한 것이 아니다) 그래서 결국 버튼1이 호출한 것이다.
btn1.addEventListener('click', someone.whoAmI); // <button id='btn1'>...</button>
// ** 누가 호출했나? : 버튼에 myWhoAmI 함수를 넘긴것이다.(함수를 호출한 것이 아니다) 그래서 결국 버튼2가 호출한 것이다. (위와 동일함)
btn2.addEventListener('click', myWhoAmI); // <button id='btn2'>...</button>

// 테스트 3) =====================================================================
// bind : 호출하는 것과 무관하게 this를 고정시키는 함수가 bind이다. (나머지는 모두 위와 같이 호출한 객체가 this가 된다.)

// myWhoAmI는 someone을 무조건 this로 받겠다(고정시키겠다)는 뜻이다. 위에서 처럼 누가 호출했는지와 상관없이 someone으로 this를 고정시키겠다는 뜻이다.
var bindedWhoAmI = myWhoAmI.bind(someone);
bindedWhoAmI(); // {name: 'jongseok', whoAmI:f}     // ** 누가 호출했나? : bind로 someone(레퍼런스 주소)을 this로 묶었기 때문에 언제나 someone(레퍼런스 주소)이 this가 된다.
var btn3 = document.getElementById('btn3');
btn3.addEventListener('click', bindedWhoAmI); // {name: 'jongseok', whoAmI:f}   // ** 누가 호출했나? : bind로 someone을 this로 묶었기 때문에 언제나 someone이 this가 된다.

// 나머지 this에 관한 내용은 2_2_arrow_function_에_없는3가지.js를 참고한다.
