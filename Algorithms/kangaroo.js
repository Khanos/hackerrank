// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    if (v1 < v2 && x1 < x2 || v1 > v2 && x1 > x2) {
        return "NO"
    } else {
        if((x1 - x2) % (v2 - v1) === 0){
            return "YES"
        } else {
            return "NO"
        }
    }
}
let x1 = 0;
let v1 = 3;
let x2 = 4;
let v2 = 2;
let result = kangaroo(x1, v1, x2, v2);
console.log(result);
x1 = 0;
v1 = 2;
x2 = 5;
v2 = 3;
result = kangaroo(x1, v1, x2, v2);
console.log(result);