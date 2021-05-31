'use strict';

var data =
  '[{"co":0.6,"so2":0.006,"o3":0.009,"no2":0.029,"pm10":56,"msrdt_de":"20181216","pm25":39,"msrste_nm":"강남구"},{"co":0.7,"so2":0.005,"o3":0.007,"no2":0.046,"pm10":69,"msrdt_de":"20181216","pm25":34,"msrste_nm":"강남대로"},{"co":0.6,"so2":0.006,"o3":0.014,"no2":0.03,"pm10":49,"msrdt_de":"20181216","pm25":31,"msrste_nm":"강동구"}]';

/*
// 위의 데이터를 보기 쉽게 줄을 바꾸면 아래와 같다. 
var data = '[ 
    {"co":0.6,"so2":0.006,"o3":0.009,"no2":0.029,"pm10":56,"msrdt_de":"20181216","pm25":39,"msrste_nm":"강남구"}, 
    {"co":0.7,"so2":0.005,"o3":0.007,"no2":0.046,"pm10":69,"msrdt_de":"20181216","pm25":34,"msrste_nm":"강남대로"}, 
    {"co":0.6,"so2":0.006,"o3":0.014,"no2":0.03,"pm10":49,"msrdt_de":"20181216","pm25":31,"msrste_nm":"강동구"} 
]';

*/

// 위의 데이터는 JSON이 아니라 문자열이기 아래의 경우 undefined 가 표시된다.
console.log('JSON.parse() 없이 사용', data[0].co); // undefined

// ========================== JSON.parse() (문자열 -> JSON(Map객체 : 키,값))==========================
var data2 = JSON.parse(data);
console.log('JSON.parse() 사용', data2[0].co); // 0.6

// ========================== JSON.parse() (JSON(Map객체 : 키,값) -> 문자열)==========================
var data3 = { id: 2, title: 'bbb' };

var stringdata = JSON.stringify(data3);
console.log('JSON.stringify() 사용', typeof stringdata); // string
