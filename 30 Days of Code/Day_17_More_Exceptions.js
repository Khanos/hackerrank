# alculator class with a single method: int power(int,int). The power method takes two integers,  and , as parameters and returns the integer result of . If either  or  is negative, then the method must throw an exception with the message: n and p should be non-negative.

# Note: Do not use an access modifier (e.g.: public) in the declaration for your Calculator class. a 

class Calculator {
  power(n, p) {
    try {
      if(n<0 || p<0) {
        throw Error;      
      }
      return Math.pow(n,p);
    } catch(e) {
      return 'n and p should be non-negative'
    }
  }
}
