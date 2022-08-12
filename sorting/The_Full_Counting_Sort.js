function countSort(arr) {
  const inputArr = arr;
  const n = arr.length;
  const half = parseInt(n / 2);
  const counts = {};
  const sorted =  [];
  for (let i = 0; i < n; i++) {
    // Adding dashed to first half of array
    if (i < half) {
      inputArr[i][1] = '-';
    }
    // Counting the frequency of each value in the array
    if(counts.hasOwnProperty(inputArr[i][0])){
      counts[inputArr[i][0]]++;
    } else {
      counts[inputArr[i][0]] = 1;
    }
  }
  // Grouping the words in the correct order
  for (let key in counts) {
    const numArr = inputArr.reduce((acc, el) => {
      if (el[0] === key) {
        acc.push(el[1]);
      }
      return acc;
    }, []);
    sorted.push(numArr);
  }
  console.log(sorted.flat().join(' '));
}

// Read file in utils/sample-data/input05.txt for the test case 5
const fs = require("fs");
const arr = [];
fs.readFile("utils/sample-data/input05.txt", "utf8", (err, data) => {
  if (err) throw err;
  data.split("\n").forEach((el, index) => {
    if (index !== 0) {
      arr.push(el.split(" "));
    }
  });
  // calling the method
  countSort(arr);
});

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

// const arr = [
//   ["1", "e"],
//   ["2", "a"],
//   ["1", "b"],
//   ["3", "a"],
//   ["4", "f"],
//   ["1", "f"],
//   ["2", "a"],
//   ["1", "e"],
//   ["1", "b"],
//   ["1", "c"],
// ];

// countSort(arr);
