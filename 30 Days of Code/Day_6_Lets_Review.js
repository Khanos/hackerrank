function processData(input) {
  function printWord(word) {
      let even_indexed = new String();
      let odd_indexed = new String();
      word.split('').forEach((letter, index)=>{
          if (index % 2 == 0) {
              even_indexed+=letter;
          } else {
              odd_indexed+=letter;
          }
      });
      console.log(`${even_indexed} ${odd_indexed}`);
  }
  let n = input.split('\n')[0];
  for (let i = 1; i <= n; i++) {
      printWord(input.split('\n')[i]);
  }
}