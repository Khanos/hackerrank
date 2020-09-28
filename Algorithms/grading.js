/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */
function gradingStudents(grades) {
    // Write your code here
    let getNextMultOfFive = (n) => (n - (n % 5))+ 5;
    let finalGrades = [];
    for(const grade of grades){
        if(grade < 38){
            finalGrades.push(grade);
        } else {
            let nextMultOfFive = getNextMultOfFive(grade);
            if(nextMultOfFive<grade+3){
                finalGrades.push(nextMultOfFive);
            } else {
                finalGrades.push(grade);
            }
        }
    }
    return finalGrades;
}
let grades = [ 73, 67, 38, 33 ];
let finalGrades = gradingStudents(grades);
for(const grade of finalGrades){
    console.log(grade);
}