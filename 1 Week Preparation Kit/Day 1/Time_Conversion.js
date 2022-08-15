/**
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 */


/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    const [hour, minute, rest] = s.split(':');
    const seconds = rest.slice(0,2);
    const ampm = rest.slice(2);
    let militaryHour 
    if(ampm === 'AM') {
        if(hour === '12') {
            militaryHour = '00';
        } else {
            militaryHour = hour;
        }
    } else {
        if(hour === '12') {
            militaryHour = hour;
        } else {
            militaryHour = parseInt(hour) + 12;
        }
    }
    console.log(`${militaryHour}:${minute}:${seconds}`);
}

const time = '12:01:00AM';
console.log(timeConversion(time));