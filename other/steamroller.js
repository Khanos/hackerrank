function steamrollArray(arr) {
  // I'm a steamroller, baby
  let newArr = [];
  function steamroll(arr){
    if(Array.isArray(arr)){
        arr.forEach(element => {
            steamroll(element);
        })
    } else {
      newArr.push(arr);
    }
  }
  steamroll(arr);
  return newArr;
}
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log('test')