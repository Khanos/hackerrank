function processData(input) {
  //Enter your code here
  let temp;
  temp = input.split('\n')[0].split(' ');
  const actual = {
    d: temp[0],
    m: temp[1],
    y: temp[2]
  };
  temp = input.split('\n')[1].split(' ');
  const expected = {
    d: temp[0],
    m: temp[1],
    y: temp[2]
  };

  let fine;
  if (actual.y == expected.y) {
    if (actual.m == expected.m) {
      if (actual.d <= expected.d) {
        fine = 0;
      } else {
        fine = 15 * (actual.d - expected.d);
      }
    } else if (actual.m < expected.m) {
      fine = 0;
    } else {
      fine = 500 * (actual.m - expected.m);
    }
  } else if (actual.y < expected.y) {
    fine = 0;
  } else {
    fine = 10000;
  }

  console.log(fine);
}
const _input = '9 4 2015\n6 6 2015'
processData(_input);