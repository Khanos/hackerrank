// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union
function uniteUnique(...arr) {
    let newArr = new Array();
    arr.map(element => {
      newArr.push.apply( newArr, element.filter(element => newArr.indexOf(element) == -1) );
    })
    return newArr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
  console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));
  console.log('end')