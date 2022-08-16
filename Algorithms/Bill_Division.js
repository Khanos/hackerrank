// Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.

// bonAppetit has the following parameter(s):

// bill: an array of integers representing the cost of each item ordered
// k: an integer representing the zero-based index of the item Anna doesn't eat
// b: the amount of money that Anna contributed to the bill

function bonAppetit(bill, k, b) {
    // Write your code here
    console.log(bill, k, b)
    const billTotal = bill.reduce((a, b) => a + b, 0);
    const totalLeftEach = (billTotal - bill[k])/2;
    return b-totalLeftEach;
}

const bill = [ 3, 10, 2, 9 ];
const k =  1;
const b = 12;

console.log(bonAppetit(bill, k, b));