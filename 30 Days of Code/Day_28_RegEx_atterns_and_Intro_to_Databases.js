'use strict';
const inputStr = '6\nriya riya@gmail.com\njulia julia@julia.me\njulia sjulia@gmail.com\njulia julia@gmail.com\nsamantha samantha@gmail.com\ntanya tanya@gmail.com';
let input = inputStr.split('\n');
const N = input[0];
input.shift();
const regex = /@gmail.com$/
let gmails = [];
for (let NItr = 0; NItr < N; NItr++) {
    const firstNameEmailID = input[NItr].split(' ');

    const firstName = firstNameEmailID[0];

    const emailID = firstNameEmailID[1];
    if (regex.test(emailID)) {
        gmails.push(firstName);
    }
}
gmails.sort();
gmails.forEach(el => {
    console.log(el);
});
