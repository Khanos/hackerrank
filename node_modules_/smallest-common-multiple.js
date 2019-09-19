function smallestCommons(arr) {
    let found = false;
    let min = Math.min(arr[0],arr[1]);
    let max = Math.max(arr[0],arr[1]);
    let newArr = new Array(max-min+1);
    for (let index = 0; index < newArr.length; index++) {
        newArr[index] = index+min;
    }
    let num = min*max;
    while(!found){
      found = true;
      for (let i = 0; i < newArr.length; i++) {
        if(num % newArr[i] !== 0){
          num = num + min*max;
          found = false;
          break;
        }
      }
    }    
    return num
  }
  
console.log(smallestCommons([23,18]));