// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {
  let notifications = 0;
  let getMedian = (arr, start, end) => {
    let transactions = arr.slice(start, end).sort((prev, next) => prev-next);
    let middle = parseInt(transactions.length / 2);
    return transactions.length % 2 !== 0 ? transactions[middle] : (transactions[parseInt(middle)] + transactions[parseInt(middle) + 1]) / 2
  }
  for(let index = d; index < expenditure.length; index++){
    let median = getMedian(expenditure, index-d, index);
    if(expenditure[index] >= 2 * median){
      notifications++;
    }
  }
  return notifications;
}
let expenditure = [ 2, 3, 4, 2, 3, 6, 8, 4, 5 ];
let d = 5;
console.log(activityNotifications(expenditure, d));
expenditure = [ 10, 20, 30, 40, 50 ];
d = 3;
console.log(activityNotifications(expenditure, d));