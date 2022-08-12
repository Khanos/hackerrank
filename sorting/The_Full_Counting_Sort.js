function countSort(arr) {
  const n = arr.length;
  const half = parseInt(n / 2);

  // Creating a Map of the words by value
  const inputObject = arr.reduce((acc, el, index) => {
    const value = index < half ? "-" : el[1];
    acc[el[0]] = acc[el[0]] ?  [...acc[el[0]], value] : [value];
    return acc;
  }, {});

  // Getting the words array
  const wordsArray = new Array(Object.keys(inputObject).length).fill(0);
  for (const key in inputObject) {
    if (Object.hasOwnProperty.call(inputObject, key)) {
      const element = inputObject[key];
      wordsArray[key] = element;
    }
  }

  // Flat and convert to string the words array
  if (wordsArray[0] === 0) {
    wordsArray.shift();
  }
  console.log(wordsArray.flat().join(" "));
}

// // Read file in utils/sample-data/input05.txt for the test case 5
// const fs = require("fs");
// const arr = [];
// fs.readFile("utils/sample-data/input05.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   data.split("\n").forEach((el, index) => {
//     if (index !== 0) {
//       arr.push(el.split(" "));
//     }
//   });
//   // calling the method
//   countSort(arr);
// });

// const arr = [
//   ["0", "ab"],
//   ["6", "cd"],
//   ["0", "ef"],
//   ["6", "gh"],
//   ["4", "ij"],
//   ["0", "ab"],
//   ["6", "cd"],
//   ["0", "ef"],
//   ["6", "gh"],
//   ["0", "ij"],
//   ["4", "that"],
//   ["3", "be"],
//   ["0", "to"],
//   ["1", "be"],
//   ["5", "question"],
//   ["1", "or"],
//   ["2", "not"],
//   ["4", "is"],
//   ["2", "to"],
//   ["4", "the"],
// ];

const arr = [
  ["1", "e"],
  ["2", "a"],
  ["1", "b"],
  ["3", "a"],
  ["4", "f"],
  ["1", "f"],
  ["2", "a"],
  ["1", "e"],
  ["1", "b"],
  ["1", "c"],
];

countSort(arr);
