let StackBuilder = require('./stack-builder');
/* const GetBinary = (number) => {
    let remSTack = StackBuilder(), rem, binaryString = '';
    while(number > 0){
        rem = Math.floor(number % 2);
        remSTack.push(rem);
        number = Math.floor(number / 2);
    }

    if (remSTack.isEmpty()){ return '0'}

    while(!remSTack.isEmpty()){
        binaryString += remSTack.pop().toString();
    }
    return binaryString;
} */
const BaseConverter = (number, base) => {
    let remSTack = StackBuilder(), 
    rem, 
    binaryString = '',
    digits = '0123456789ABCDEF';

    while(number > 0){
        rem = Math.floor(number % base);
        remSTack.push(rem);
        number = Math.floor(number / base);
    }

    if (remSTack.isEmpty()){ return '0'}

    while(!remSTack.isEmpty()){
        binaryString += digits[remSTack.pop()];
    }
    return binaryString;
}

module.exports = BaseConverter;