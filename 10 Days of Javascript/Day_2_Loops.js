/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  let vowels = ['a','e','i','o','u'];
  let sArr = s.split('');
  for(const letter of sArr){
      if (vowels.indexOf(letter) !== -1) {
          console.log(letter);
      }
  }
  for(const letter of sArr){
      if (vowels.indexOf(letter) === -1) {
          console.log(letter);
      }
  }
}