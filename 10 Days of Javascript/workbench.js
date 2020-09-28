'use strict';
let Test = require('./test');
let myDistance = function(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
const t1 = new Test();

// The correct way to call a static method
console.log(Point.distance(p1, p2));
//console.log(Test.__distance(p1, p2));
console.log(t1.distance(p1, p2));
console.log(typeof Point);
console.log(typeof Test);
console.log(typeof p1);
console.log(p1);
console.log(p1 instanceof Point);
console.log(p1 instanceof Test);

// Attempt to call a static method on an instance of the class
try {
    Point.prototype.distance = myDistance;
    console.log(p1.distance(p1, p2));
}
catch (exception) {
    console.log(exception.name + ': ' + exception.message);
}