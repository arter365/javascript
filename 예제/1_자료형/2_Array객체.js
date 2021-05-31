'use strict'; // 타입스크립트에서는 사용할 필요가 없다. 하지만 바닐라 자바스크립트에서는 적어주는 것이 좋다. Why? (es5에 추가) 비상식적인 변수사용 없다는 뜻. 성능개선 효과 (엔진)

var nums1 = new Array();
// 값 넣기 (넣으면 스택처럼 쌓인다.)
nums1.push(5);
nums1.push(10);
nums1.push(15);
console.log(`Array push size : ${nums1.length}`); // 3
// 값 가져오기 (가져온 값은 스택에서 제거된다.)
var n1 = nums1.pop();
console.log(`Array pop 1 size : ${nums1.length} : ${n1}`); // 2 : 15
var n2 = nums1.pop();
console.log(`Array pop 2 size : ${nums1.length} : ${n2}`); // 1 : 10
var n3 = nums1.pop();
console.log(`Array pop 3 size : ${nums1.length} : ${n3}`); // 0 : 5

// ============================== List 형태로 사용 1 ==============================
var nums2 = new Array();
nums2[0] = 5;
nums2[1] = 10;
nums2[2] = 15;
console.log(`Array nums2 size : ${nums2.length}`); // 3
// 값 가져오기 (가져온 값은 스택에서 제거된다.)
var n4 = nums2[0];
console.log(`Array nums2[0] size : ${nums2.length} : ${n4}`); // 3 : 5
var n5 = nums2[1];
console.log(`Array nums2[1] size : ${nums2.length} : ${n5}`); // 3 : 10
var n6 = nums2[2];
console.log(`Array nums2[2] size : ${nums2.length} : ${n6}`); // 3 : 15

// ============================== List 형태로 사용 2 ==============================
var nums3 = new Array();
nums3[5] = 5;
console.log(`nums3 size : ${nums3.length}`); // 배열이 6개 만들어진다.
console.log(`nums3에서 자동으로 만들어진 배열의 값 : ${nums3[4]}`); // undefined

// ============================== List 형태로 사용 3 ==============================
var nums4 = new Array(); // 방 1개
var nums5 = new Array(5); // 방 1개
var nums6 = new Array(5, 10, 21); // 방 3개
var nums7 = new Array(5, 10, 21, 'Hello'); // 아무값이나 담을 수 있다.
var nums8 = new Array(5, 10, 21, 'Hello', new Array(2, 3, 4)); // 아무값이나 담을 수 있다.
// nums8에서 3을 가져와 보자
console.log('nums8에서 숫자3 꺼내오기', nums8[4][1]);

// ============================== 배열객체의 splice() ==============================
var nums9 = new Array(2, 3, 'Hello', 7);
// 2번째 부터 자른다.
var s1 = nums9.splice(2);
console.log('nums9 자른값', s1); // Hello, 7
console.log('nums9 남은값', nums9); // 2, 3

var nums10 = new Array(2, 3, 'Hello', 7);
// 2번째 부터 1개를 자른다.
var s2 = nums10.splice(2, 1);
console.log('nums10 자른값', s2); // Hello
console.log('nums10 남은값', nums10); // 2, 3, 7

var nums11 = new Array(2, 3, 'Hello', 7);
// 2번째 부터 1개를 자르고 그 자리에 값을 넣는다. (원하는 자리의 값 변경)
var s3 = nums11.splice(2, 1, 'hoho');
console.log('nums11 자른값', s3); // Hello
console.log('nums11 남은값', nums11); // 2, 3, hoho, 7

var nums12 = new Array(2, 3, 'Hello', 7);
// 2번째 부터 0개를 지우고 그 자리에 값을 넣는다. (원하는 자리의 값 추가)
var s4 = nums12.splice(2, 0, 'hoho');
console.log('nums12 자른값', s4); //
console.log('nums12 남은값', nums12); // 2, 3, hoho, Hello, 7

// ============================== 배열객체는 아래와 같이 생략 할 수 있다. ===================
var nums13 = [2, 3, 'hello', 7];
var s5 = nums13.splice(2, 0, 'hoho');
console.log('nums13 자른값', s5); //
console.log('nums13 남은값', nums13); // 2, 3, hoho, Hello, 7

// ============================== 배열객체의 유용한 API 10가지 ==============================
// 1. 주어진 배열을 하나의 스트링으로 묶어 내기
var fruits = ['apple', 'banana', 'orange'];
var res1 = fruits.join();
console.log('join() 구분자 없음 : ', res1); // apple,banana,orange
res1 = fruits.join('|');
console.log('join(' | ') 구분자 있음 : ', res1); // apple|banana|orange

// 2. 주어진 문자열을 배열로 만들기
var str = 'apple,banana,orange';
var res2 = str.split(',');
console.log('string -> 배열 : ', res2); // ['apple','banana','orange']

// 3. 주어진 배열의 순서를 거꾸로 만든다. (원본 배열도 순서가 바뀐다.)
var array1 = [1, 2, 3, 4, 5];
var res3 = array1.reverse();
console.log('배열 뒤집기 (원본) : ', array1); // [5, 4, 3, 2, 1]
console.log('배열 뒤집기 (결과) : ', res3); // [5, 4, 3, 2, 1]

// 4. 주어진 배열의 첫번째, 두번째를 재외한 새로운 배열을 만든다.
var array2 = [1, 2, 3, 4, 5];
var res4 = array2.slice(2, array2.length); // splice는 원본에 영향을 주지만 slice는 영향을 주지 않는다. (시작 - 끝)
console.log('배열 원하는 부분 복사 (원본) : ', array2); // [1, 2, 3, 4, 5]
console.log('배열 원하는 부분 복사 (변수) : ', res4); // [3, 4, 5]

// 아래는 자바스크립트 전체 학습이 끝난 후 테스트한다.
// ================ 예제에 사용 될 학생 클래스와 그 클래스로 만든 students 배열이다.
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

var students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];
// ===============================================================================
// 아래의 예제에서 중요한 포인트는 sutdent 배열의 find를 사용한다는 것이다. 이 find는 순회하면서 callback함수를 호출하고 순회한 값을 인자로 넣는다.

// 5. 점수가 90점 이상인 학생을 찾는다. (predicate는 참거짓을 판별하는 함수)
// find api를 보면 find(predicate: (value: T, index: number, obj: T[])...) 이렇게 되어 있다. 함수를 인자로 넘겨줘야 한다. (첫번째 찾은 값을 리턴한다.)
var res5 = students.find(function (st, index) {
  return st.score === 90;
});
console.log('find : ', res5); // Student {name: "C", age: 30, enrolled: true, score: 90}

// 5번문제를 es6문법 콜백함수로 인자로 전달 할 수 있다.
// index는 사용하지 않아서 지우고 function을 생략하고 arrow function을 사용하고 한 문장이면 괄호가 생략 가능하다. (리턴과 세미콜론도 생략)
res5 = students.find(st => st.score === 90);
console.log('find arrow function : ', res5);

// 6. 학생들 중 수업에 등록한 사람만 배열로 만든다. (배열을 리턴)
var res6 = students.filter(student => student.enrolled); // student.enrolled === true 인것만 배열로 만든다.
console.log('filter : ', res6); // [StudentA (생략), StudentC, StudentE]

// 7. 학생들의 점수만 뽑아와서 새로운 배열을 만든다. (map(callback함수)은 배열을 이용하여 새로운 방식으로 가공한다. 다른것으로 맵핑되어서 만들어진다는 뜻)
// student를 student그대로 가공
// map은 객체이다. key: value
var res7 = students.map(student => student);
console.log('map1 : ', res7);
// student 중 score만 가져옴
res7 = students.map(student => student.score);
console.log('map2 : ', res7); // [45, 80, 90, 66, 88]
// studnet 중 score를 *2 해서 가져옴
res7 = students.map(student => student.score * 2);
console.log('map3 : ', res7); // [90, 160, 180, 132, 176]

// 8. 학생들 중 50점보다 낮은 사람이 한사람이라도 있는지
var res8 = students.some(student => student.score < 50); // 하나라도 있으면 true
console.log('some : ', res8); // true
var res9 = students.every(student => student.score < 50); // 모두 조건을 만족해야 true
console.log('every : ', res9); // false

// 9. 학생들의 평균점수를 구한다.
/*
reduce API : 
calls the specified callback function for all the elements in an array.
The return value of the callback is the accumulated result,
and is provided as an argument in the next call to the callback function.
배열의 모든 요소에 지정한 콜백 함수를 호출한다.
콜백의 반환 값은 누적 된 결과이다.
콜백 함수에 대한 다음 호출에서 인수로 제공된다.
reduce (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
reduce (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
위의 API를 읽어보면 reduce()는 callback함수를 전달 받을 수 있고, 이 callback함수의 인자로 previousValue, currentValue를 맏을 수 있다.
또한 initialValue(초기값)을 받을 수 있다. 

사용되는 데이터 
var students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];
*/

// 9-1. 우리가 전달하는 callback함수에 이전값과 현재값을 받을 수 있다. 출력 해 본다.
var res10 = students.reduce((prev, curr) => {
  console.log('----------------');
  console.log('reduce1 prev : ', prev);
  console.log('reduce1 curr : ', curr);
});
/* 결과 
----------------
reduce1 prev : Student {name: "A", age: 29, enrolled: true, score: 45}   // prev에 초기값이 없으니깐 A부터 들어갔다. 
reduce1 curr : Student {name: "B", age: 28, enrolled: false, score: 80}  // curr에는 다음값인 B가 들어갔다. 
----------------
reduce1 prev : undefined     // 두번째 부터 이전값이 표시되지 않는 것은 API에 보면 => T 즉, 결과값을 리턴해 줘야 한다.  
reduce1 curr : Student {name: "C", age: 30, enrolled: true, score: 90}
----------------
reduce1 prev : undefined
reduce1 curr : Student {name: "D", age: 40, enrolled: false, score: 66}
----------------
reduce1 prev : undefined
reduce1 curr : Student {name: "E", age: 18, enrolled: true, score: 88}
*/

// 9-2. 결과 값을 리턴 하는 부분을 추가한다.
var res11 = students.reduce((prev, curr) => {
  console.log('----------------');
  console.log('reduce2 prev : ', prev);
  console.log('reduce2 curr : ', curr);
  return curr;
});
/* 결과
----------------
reduce2 prev : Student {name: "A", age: 29, enrolled: true, score: 45}  // 초기값이 A부터 들어갔다. 
reduce2 curr : Student {name: "B", age: 28, enrolled: false, score: 80}
----------------
reduce2 prev : Student {name: "B", age: 28, enrolled: false, score: 80}
reduce2 curr : Student {name: "C", age: 30, enrolled: true, score: 90}
----------------
reduce2 prev : Student {name: "C", age: 30, enrolled: true, score: 90}
reduce2 curr : Student {name: "D", age: 40, enrolled: false, score: 66}
----------------
reduce2 prev : Student {name: "D", age: 40, enrolled: false, score: 66}
reduce2 curr : Student {name: "E", age: 18, enrolled: true, score: 88}
*/

// 9-3. API에서 볼 수 있듯이(initialValue: T) 초기값 0을 전달 해 본다.
var res12 = students.reduce((prev, curr) => {
  console.log('----------------');
  console.log('reduce3', prev);
  console.log('reduce3', curr);
  return curr;
}, 0);
/* 결과 
----------------
reduce3 0       // 이제 초기값이 0부터 시작하면서 순환된다. 
reduce3 Student {name: "A", age: 29, enrolled: true, score: 45}
----------------
reduce3 Student {name: "A", age: 29, enrolled: true, score: 45}
reduce3 Student {name: "B", age: 28, enrolled: false, score: 80}
----------------
reduce3 Student {name: "B", age: 28, enrolled: false, score: 80}
reduce3 Student {name: "C", age: 30, enrolled: true, score: 90}
----------------
reduce3 Student {name: "C", age: 30, enrolled: true, score: 90}
reduce3 Student {name: "D", age: 40, enrolled: false, score: 66}
----------------
reduce3 Student {name: "D", age: 40, enrolled: false, score: 66}
reduce3 Student {name: "E", age: 18, enrolled: true, score: 88}
*/

// 9-4. 이제 반복이 되는 것을 알았으니 실제 값을 더하면서 리턴 해 본다.
var res13 = students.reduce((prev, curr) => {
  console.log('----------------');
  console.log('reduce4', prev);
  console.log('reduce4', curr.score);
  return prev + curr.score; // prev는 합산된 값
}, 0);
/* 결과 
----------------
reduce4 0
reduce4 45
----------------
reduce4 45
reduce4 80
----------------
reduce4 125
reduce4 90
----------------
reduce4 215
reduce4 66
----------------
reduce4 281
reduce4 88
*/

// 9-5. 완성된 모습 (한줄이면 {} 생략 , 한줄이면 return 생략)
var res14 = students.reduce((prev, curr) => prev + curr.score, 0);
console.log('평균값', res14 / students.length);
// 결과 : 평균값 73.8

// 10. 학생들의 모든 점수를 '45,80,90,66,88'과 같이 String으로 만든다. (50점 이상인 사람만 해당된다.)
// .찍고 묶어서 사용하는 것을 함수형 프로그래밍 이라고 한다. (chaining)
/*
  filter 메소드에는 진리값(boolean)을 반환하는 함수를 주어야 한다. 이처럼 진리값을 반환하는 함수를 predicate라고 한다. 
*/
var res15 = students
  .map(student => student.score)
  .filter(score => score >= 50)
  .join();
console.log('함수형 프로그래밍', res15);
// 결과 : 함수형 프로그래밍 80,90,66,88

// 11. '45,66,80,88,90'과 같이 정렬해서 String으로 만든다. (오름차순 정렬)
var res16 = students
  .map(student => student.score)
  .sort((a, b) => a - b) // @param compareFn 요소의 순서를 결정하는 데 사용되는 함수. 첫 번째 인수가 두 번째 인수보다 작으면 음의 값을 반환하고 같으면 0을 반환하고 그렇지 않으면 양의 값을 반환한다. 생략하면 오름차순으로 정렬된다.
  .join();
console.log('sort1', res16);
// 결과 : sort1 45,66,80,88,90

// 내림차순 정렬
var res17 = students
  .map(student => student.score)
  .sort((a, b) => b - a) // @param compareFn 요소의 순서를 결정하는 데 사용되는 함수. 첫 번째 인수가 두 번째 인수보다 작으면 음의 값을 반환하고 같으면 0을 반환하고 그렇지 않으면 양의 값을 반환한다. 생략하면 오름차순으로 정렬된다.
  .join();
console.log('sort2', res17);
// 결과 : sort2 90,88,80,66,45
