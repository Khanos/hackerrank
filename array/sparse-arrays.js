// Complete the matchingStrings function below.
function matchingStrings(strings, queries) {
    let count = 0;
    let countArr = [];
    for(const query of queries){
        for(const string of strings){
            if(query === string){
                count++;
            }
        }
        countArr.push(count);
        count = 0;
    }
    return countArr;
}
let strings = [ 'aba', 'baba', 'aba', 'xzxb' ];
let queries = [ 'aba', 'xzxb', 'ab' ];
console.log(matchingStrings(strings, queries));