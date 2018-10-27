const numbers = "0123456789";
const letters = "abcdefghijklmnopqrstuvwxyz";
const capital_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let default_options = {
    size: 5,
    type: ['numbers', 'letters', 'capital_letters']
}
const randomStr = (options) => {
    options = {...default_options, ...options};
    let str = "";
    let possible = '';
    for (let value of options.type) {
        switch (value) {
            case 'numbers':
                possible += numbers;
                break;
            case 'letters':
                possible += letters;
                break;
            case 'capital_letters':
                possible += capital_letters;
                break;
        }
    };
    possible
    for (let i = 0; i < options.size; i++)
      str += possible.charAt(Math.floor(Math.random() * possible.length));
    return str;
}
//console.log(randomStr({type: ['letters']}))
module.exports = randomStr;
