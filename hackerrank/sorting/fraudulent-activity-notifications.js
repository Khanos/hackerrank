// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {
  let notifications = 0;
  for(let index = d; index < expenditure.length; index++){
    let transactions = expenditure.slice(index-d, index)
    transactions.sort((prev, next) => prev-next);
    let middle = parseInt(transactions.length / 2);
    let median = transactions.length % 2 !== 0 ? transactions[middle] : (transactions[parseInt(middle)] + transactions[parseInt(middle) + 1]) / 2;
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