function processData(input) {
  const inputArr = input.split('\n');
  const n = inputArr.shift();
  const data = inputArr.slice(0, n);
  const phoneBook = data.reduce((acc, el) => {
      const keyValue = el.split(' ');
      acc[keyValue[0]] = keyValue[1];
      return acc;
  }, {});
  const dataToCheck = inputArr.slice(n);
  dataToCheck.forEach(el => {
      if (phoneBook[el]) {
          console.log(`${el}=${phoneBook[el]}`)
      } else {
          console.log('Not found');
      }
  });
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
 processData(_input);
});
