// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

function timeConversion(s) {
    /*
     * Write your code here.
     */
    let parsedHours = parseInt(s.substr(0,2));
    if (s.substr(8,2) === 'PM'){
        if(parsedHours === 12){   
            return s.substr(0,8);
        } else {
            parsedHours += 12;
            return parsedHours + s.substr(2,6);
        }
    } else {
        if(parsedHours === 12){
            return '00' + s.substr(2,6)
        } else {
            return s.substr(0,8);
        }
    }
}

let time = '12:40:03AM';
console.time('First Attempt');
let result = timeConversion(time);
console.log(result);
console.timeEnd('First Attempt');