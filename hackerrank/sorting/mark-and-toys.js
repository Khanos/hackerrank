// Complete the maximumToys function below.
function maximumToys(prices, k) {
    let budget = k;
    let count = 0;
    let sortedPrices = prices.sort((prev, next) => {
        return prev-next;
    });
    for(const toyPrice of sortedPrices){
        if(budget - toyPrice > 0){
            budget -= toyPrice;
            count++;
        } else {
            break;
        }
    }
    return count;
}
let prices = [ 1, 12, 5, 111, 200, 1000, 10 ];
let k = 50;
console.log(maximumToys(prices, k));