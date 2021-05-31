'use strict';

// json4에서 했던 방식과 동일하다.
// Create
var memberObject = {
  manager: 'egoing',
  developer: 'graphittie',
  designer: 'leezhce',
};

// Update
memberObject.designer = 'leezche';

// Read
console.log(memberObject.designer); // leezche
console.log(memberObject['designer']); // leezche

// Delete (delete는 연산자이다. 키도 없어진다.)
delete memberObject.manager;
console.log(memberObject.manager); // undefined

for (var key in memberObject) {
  console.log(key, memberObject[key]);
}
/*
  developer graphittie
  designer leezche
*/

//========================= built in class ================================
console.log('Math.PI', Math.PI); // 3.141592653589793
console.log('Math.random()', Math.random()); // (매번 다르게 나옴) 0.9556878669495288

var MyMath = {
  PI: 3.1415,
  random: function () {
    return 12345;
  },
};

console.log('MyMath.PI', MyMath.PI); // 3.1415
console.log('MyMath.random()', MyMath.random()); // 12345
