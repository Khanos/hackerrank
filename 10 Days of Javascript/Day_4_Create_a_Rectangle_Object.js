/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
  return {
      length: a,
      width: b,
      perimeter: 2 * (a + b),
      area: a * b
  }
}

let a = 10,
    b = 2
let myRectangle = Rectangle(a, b);
console.log('length: ', myRectangle.length);
console.log('width: ', myRectangle.width);
console.log('perimeter: ', myRectangle.perimeter);
console.log('area: ', myRectangle.area);