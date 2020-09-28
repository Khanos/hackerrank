/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  try {
      let reverse = s.split('').reverse().join('');
      console.log(reverse);
  } catch (error) {
      console.log(error.message);
      console.log(s);
  }
}