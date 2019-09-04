function getDecimal(divident, divisor){
    if(divident=='0'){
        let subzero = new Array(divisor).fill('0').join('');
        return '0.'+ subzero;
    }
    let decimal = (divident/divisor).toString().split('.');
    if(decimal[1]==undefined){
        let subzero = new Array(divisor).fill('0').join('');
        return decimal[0]+'.'+ subzero;
    }
    if(decimal[1].length < divisor){
        while(decimal[1].length < divisor){
            decimal[1]+='0'
        }
    } else {
        decimal[1] = decimal[1].toString().substr(0,divisor)
    }

    return decimal[0]+'.'+decimal[1];
}

function plusMinus(arr) {
    let minus = 0;
    let plus = 0;
    let zero = 0;
    for(let i=0; i < arr.length; i++){
        if(arr[i] > 0){
            plus++;
        } else {
            if(arr[i] == 0){
                zero++;
            } else {
                minus++;
            }
        }
    }
    let minus_decimal = getDecimal(minus, arr.length);
    let zero_decimal = getDecimal(zero, arr.length);
    let plus_decimal = getDecimal(plus, arr.length);
    console.log('done');
}
let arr = [-4, -3, -3]
plusMinus(arr)