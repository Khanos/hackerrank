function getLetter(s) {
  let letter;
  // Write your code here
  switch (true) {
      case ['a','e','i','o','u'].indexOf(s[0]) !== -1:
          letter = 'A';
          break;
      case ['b','c','d','f','g'].indexOf(s[0]) !== -1:
          letter = 'B';
          break;
      case ['h','j','k','l','m'].indexOf(s[0]) !== -1:
          letter = 'C';
          break;
      case ['n','p','q','r','s','t','v','w','x','y','z'].indexOf(s[0]) !== -1:
          letter = 'D';
          break;
  }
  return letter;
}