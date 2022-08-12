function processData(input) {
  // strip out the strings and convert; only numbers matter
  const inputArr = input.split("\n").map((el) => el.split(" "));
  const n = parseInt(inputArr.shift()[0]); // Not used
  const numberArr = inputArr.map((el) => parseInt(el[0]));
  // const stringArray = inputArr.map(el => el[1]); // Not used

  // Finding the frequency of each number in the array
  const indexArray = new Array(100).fill(0);
  const frequencyArray = numberArr.reduce((acc, el) => {
    acc[Number.parseInt(el)]++;
    return acc;
  }, indexArray);

  // Creating the cumulative frequency array
  const bigL = frequencyArray.reduce((acc, el, index, arr) => {
    let count = 0;
    for (let i = 0; i < index + 1; i++) {
      count += arr[i];
    }
    acc.push(count);
    return acc;
  }, []);
  console.log(bigL.join(" "));

// Putting the words in the correct order
const sortedList = frequencyArray.reduce((acc, el, index) => {
  if (el > 0) {
    for (let i = 0; i < el; i++) {
      acc.push(index);
    }
  }
  return acc;
}, []);
const inputMap = new Map();
for (let el of inputArr) {
  if (inputMap.has(el[0])) {
    inputMap.set(el[0], [...inputMap.get(el[0]), el[1]]);
  } else {
    inputMap.set(el[0], [el[1]]);
  }
}
const sortedWordsArray = sortedList.reduce((acc, el) => {
  const wordValue = inputMap.get(`${el}`);
  if (wordValue.length > 1) {
    acc.push(wordValue.shift());
    inputMap.set(`${el}`, wordValue);
  } else {
    acc.push(wordValue[0]);
    inputMap.delete(`${el}`);
  }
  return acc;
}, []);
console.log(sortedWordsArray.join(" "));
}

const input = `10\n4 that\n3 be\n0 to\n1 be\n5 question\n1 or\n2 not\n4 is\n2 to\n4 the`;

processData(input);
