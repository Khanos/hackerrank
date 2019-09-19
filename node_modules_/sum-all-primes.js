function sumPrimes(num) {
    let arr = new Array(num); 
    for(let i=1; i < arr.length; i++){
        arr[i]=i+1; 
    }
    arr = arr.filter(number => {
        for(let i=2; i <= Math.sqrt(number); i++){
            if(number % i === 0){
                return false;
            }
        }
        return true;
    })
    arr = arr.reduce((prev, curr) => prev+curr, 0);
    return arr;
  }
  
  console.log(sumPrimes(10)); 
