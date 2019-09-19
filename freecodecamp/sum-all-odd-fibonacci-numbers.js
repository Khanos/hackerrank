// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers

function sumFibs(num) {
    let fibNums = [];
    let index;
    let fib;
    let odds = 0;
    for(let i=1; i<=num; i++){
        index = i-1;
        if(i>2){
            fib = fibNums[index-1]+fibNums[index-2];
            if(fib > num){
                break;
            }
        }
        switch (i) {
            case 1:
            case 2:
                fibNums.push(1);
                odds++;
                break;
            default:
                fibNums.push(fib);
                if(fib % 2 != 0){
                    odds+=fib;
                }
                break;
        }
    }
    return odds;
  }
  
  //sumFibs(4);
  //console.log(sumFibs(4));
  console.log(sumFibs(1000));
  console.log('end');