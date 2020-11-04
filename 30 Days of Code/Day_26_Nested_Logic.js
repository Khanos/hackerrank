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

  const getFine = (actual, expected) => {
    const yearFine = 10000 * (actual.y - expected.y);
    const monthFine = 500 * (actual.m - expected.m);
    const dayFine = 15 * (actual.d - expected.d);

    if (yearFine === 0) {
      if (monthFine === 0) {
        return (dayFine > 0) ? dayFine : 0;
      } else {
        return (monthFine > 0) ? monthFine : 0;
      }
    }
    return (yearFine > 0) ? 10000 : 0;
  }

  const fine = getFine(actual, expected);
  console.log(fine);
}
const _input = '9 4 2015\n6 6 2015'
processData(_input);