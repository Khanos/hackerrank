function countSort(arr) {
  const n = arr.length;
  const half = parseInt(n / 2);

  // Creating a Map of the words by value
  const inputMap = new Map();
  arr.forEach((el, index) => {
    const value = index < half ? "-" : el[1];
    if (inputMap.has(el[0])) {
      inputMap.set(el[0], [...inputMap.get(el[0]), value]);
    } else {
      inputMap.set(el[0], [value]);
    }
  });

  // Getting the words array
  const wordsArray = new Array([...inputMap.keys()].length).fill(0);
  inputMap.forEach((value, key) => {
    wordsArray[key] = value;
  });

  // Flat and convert to string the words array
  if(wordsArray[0] === 0) {
    wordsArray.shift();
  }
  console.log(wordsArray.flat().join(" "));
}

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
