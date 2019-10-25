const fs = require('fs');
let output = fs.readFileSync('./utils/sample-data/shopping-cart.txt', 'utf8')
    .replace(/ |\r/gi, '')
    .split('\n')
    .map(line => line.split('\t'))
    .reduce((customers, line) => {
        let tes;

        return customers;
    }, {})


console.log('output: ', output);