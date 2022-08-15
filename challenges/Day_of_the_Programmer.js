// Given a year, y, find the date of the 256th day of that year according to the official Russian calendar during that year. 
// Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is y.

// For example, the given year = 1984. 1984 is divisible by 4, so it is a leap year. 
// The 256th day of a leap year after 1918 is September 12, so the answer is 12.09.1984.

function dayOfProgrammer(year) {
    // Write your code here
    let day = 13;
    if(!(year%4) && (year < 1918 || year%100 || !(year%400))) day--;
    if(year == 1918) day = 26;
    return `${day}.09.${year}`;
}

const year = 2100;
dayOfProgrammer(year);