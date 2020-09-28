 function getMaxLessThanK(n, k){
  let max_value = 0;
  for (let b = n; b > 0; b--) {
      for (let a = b-1; a > 0; a--) {
          if ((a & b) < k && (a & b) > max_value){
            max_value = (a&b);
          }
      }
  }
  return max_value;
}

console.log(getMaxLessThanK(5,2));
console.log(getMaxLessThanK(8,5));