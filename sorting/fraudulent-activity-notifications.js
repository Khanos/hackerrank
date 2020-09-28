// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {
  // Number of notifications
  let n = 0

  // Set midpoints for median calculation
  let [i1, i2] = [Math.floor((d - 1) / 2), Math.ceil((d - 1) / 2)]
  let m1, m2, m

  // Initialize count sorted subarray
  let cs = new Array(201).fill(0)
  for (let i = d - 1; i >= 0; i--) cs[expenditure[i]]++

  // Iterate through expenditures
  for (let i = d, l = expenditure.length; i < l; i++) {

    // Find median
    for (let j = 0, k = 0; k <= i1; k += cs[j], j++) m1 = j
    for (let j = 0, k = 0; k <= i2; k += cs[j], j++) m2 = j
    let m = (m1 + m2) / 2

    // Check if notification is given
    if (expenditure[i] >= m * 2) n++

    // Replace subarray elements
    cs[expenditure[i - d]]--
    cs[expenditure[i]]++
  }

  return n
}
let expenditure = [2, 3, 4, 2, 3, 6, 8, 4, 5];
let d = 5;
console.log(activityNotifications(expenditure, d));
expenditure = [10, 20, 30, 40, 50];
d = 3;
console.log(activityNotifications(expenditure, d));