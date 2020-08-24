let Box1 = ['R', 'R', 'R', 'R', 'B', 'B', 'B'];
let Box2 = ['R', 'R', 'R', 'R', 'R', 'B', 'B', 'B', 'B'];
let Box3 = ['R', 'R', 'R', 'R', 'B', 'B', 'B', 'B'];

let PR1 = {
  num: Box1.reduce((accu, value) => value == 'R' ? accu + 1 : accu, 0),
  den: Box1.length,
  text: `${Box1.reduce((accu, value)=>value == 'R' ? accu + 1 : accu, 0)}/${Box1.length}`
};
let PB1 = {
  num: Box1.reduce((accu, value) => value == 'B' ? accu + 1 : accu, 0),
  den: Box1.length,
  text: `${Box1.reduce((accu, value)=>value == 'B' ? accu + 1 : accu, 0)}/${Box1.length}`
};
let PR2 = {
  num: Box2.reduce((accu, value) => value == 'R' ? accu + 1 : accu, 0),
  den: Box2.length,
  text: `${Box2.reduce((accu, value)=>value == 'R' ? accu + 1 : accu, 0)}/${Box2.length}`
};
let PB2 = {
  num: Box2.reduce((accu, value) => value == 'B' ? accu + 1 : accu, 0),
  den: Box2.length,
  text: `${Box2.reduce((accu, value)=>value == 'B' ? accu + 1 : accu, 0)}/${Box2.length}`
};
let PR3 = {
  num: Box3.reduce((accu, value) => value == 'R' ? accu + 1 : accu, 0),
  den: Box3.length,
  text: `${Box3.reduce((accu, value)=>value == 'R' ? accu + 1 : accu, 0)}/${Box3.length}`
};
let PB3 = {
  num: Box3.reduce((accu, value) => value == 'B' ? accu + 1 : accu, 0),
  den: Box3.length,
  text: `${Box3.reduce((accu, value)=>value == 'B' ? accu + 1 : accu, 0)}/${Box3.length}`
};

let combOf2Reds1Black = [
  ['R', 'R', 'B'],
  ['R', 'B', 'R'],
  ['B', 'R', 'R']
];
combOf2Reds1Black = [
  `${(PR1.num * PR2.num * PB3.num)} / ${(Box1.length * Box2.length * Box3.length)}`,
  `${(PR1.num * PB2.num * PR3.num)} / ${(Box1.length * Box2.length * Box3.length)}`,
  `${(PB1.num * PR2.num * PR3.num)} / ${(Box1.length * Box2.length * Box3.length)}`
];
let num = (PR1.num * PR2.num * PB3.num) + (PR1.num * PB2.num * PR3.num) + (PB1.num * PR2.num * PR3.num);
let den = (Box1.length * Box2.length * Box3.length);
num = num/2;
den = den/2;
num = num/2;
den = den/2;
num = num/3;
den = den/3;
combOf2Reds1Black = `${num} / ${den}`

console.log(PR1);