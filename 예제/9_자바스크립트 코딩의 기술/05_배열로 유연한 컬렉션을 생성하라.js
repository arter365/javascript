/*
    자바스크립트에는 배열(추가, 제거, 정렬, 필터링, 교처에 적합)과 객체 두가지가 있었다.
    모던 자바스크립트에서는 Map, Set, WeakMap(위크맵), WeakSet(위크셋), 벼열, 객체를 사용 할 수 있다.
*/
const team = ['Joe', 'Dyan', 'Bea', 'Theo'];

function alphabetizeTeam(team) {
  return [...team].sort();
}

const res1 = alphabetizeTeam(team);
console.log('원본 : ', team); // [ 'Joe', 'Dyan', 'Bea', 'Theo' ]
console.log('res1 : ', res1); // [ 'Bea', 'Dyan', 'Joe', 'Theo' ]

//----------

const staff = [
  { name: 'Wesley', position: 'musician' },
  { name: 'Davis', position: 'engineer' },
];
function getMusicians(staff) {
  return staff.filter(member => member.position === 'musician');
}

const res2 = getMusicians(staff);
console.log(res2);

//----------

const game1 = { player: 'Jim Jonas', hits: 2, runs: 1, errors: 0 };
const game2 = { player: 'Jim Jonas', hits: 3, runs: 0, errors: 1 };
const total = {};
const stats = Object.keys(game1);
for (let i = 0; i < stats.length; i++) {
  const stat = stats[i];
  if (stat !== 'player') {
    total[stat] = game1[stat] + game2[stat];
  }
}

const dog = { name: 'Don', color: 'black' };
dog.name;

const dogPair = [
  ['name', 'Don'],
  ['color', 'black'],
];
function getName(dog) {
  return dog.find(attribute => {
    return attribute[0] === 'name';
  })[1];
}
