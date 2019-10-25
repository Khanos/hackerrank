function dropElements(arr, func) {
    // Drop them elements.
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(func(arr[i])){
            break;
        }
        newArr.push(arr[i]);
    }
    newArr.map(element => {
        if(arr.indexOf(element) != -1){
            arr.splice(arr.indexOf(element), 1);
        }
    })
    return arr
  }
  
  //console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
  console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));