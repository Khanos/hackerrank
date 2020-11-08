const inputStr = '3\n5 2\n8 5\n2 2';
const input = inputStr.split('\n');
const t = parseInt(input.shift(), 10);


for (let tItr = 0; tItr < t; tItr++) {
    const nk = input[tItr].split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const S = Array(n).fill().map((el,i)=>i+1);
    let nLessK = 0;
    for (let idx = 0; idx < S.length; idx++) {
      let thisN = S[idx]
      for(let z = idx + 1; z < S.length; z++) {
          let bitwise = thisN & S[z]
          if((bitwise) < k) {
              if(bitwise > nLessK) {
                nLessK = bitwise;
              }

          }
      };
    }
    console.log(nLessK);
}