/* Each time Sunny and Johnny take a trip to the Ice Cream Parlor, they pool their money to buy ice cream. On any given day, the parlor offers a line of flavors. Each flavor has a cost associated with it.

Given the value of  and the  of each flavor for  trips to the Ice Cream Parlor, help Sunny and Johnny choose two distinct flavors such that they spend their entire pool of money during each visit. ID numbers are the 1- based index number associated with a . For each trip to the parlor, print the ID numbers for the two types of ice cream that Sunny and Johnny purchase as two space-separated integers on a new line. You must print the smaller ID first and the larger ID second.

For example, there are  flavors having . Together they have  to spend. They would purchase flavor ID's  and  for a cost of . Use  based indexing for your response. */
//imputs
let money = 4;
let cost = [1, 4, 5, 3, 2];
// Output
let result;

// this is a O(N^2)
function whatFlavors(cost, money) {
    let flavors = [];
    let found = false;    
    for(let i=0; i<cost.length; i++){
        for(let j=0; j<cost.length; i++){
            if(j != i){
                if(cost[i]+cost[j] == money){
                    flavors = [j+1, i+1];
                    found = true
                    break;
                }
            }
        };  
        break;
    };
    return found ? flavors[0]+' '+flavors[1] : 'Not Found'    
}
console.time('First Attempt');
result = whatFlavors(cost, money);
console.log('result: ', result);
console.timeEnd('First Attempt');

// Second Attempt
function whatFlavors_v2(cost, money) {
    let flavors = [];
    let found = false;
    let hashTable = new Map();
    for (var i = 0; i < cost.length; i++) { 
        hashTable.set(cost[i], i + 1);
    }
    for(let j=0; j<cost.length; j++){
        if(hashTable.has(money-cost[j]) && hashTable.get(money-cost[j])-1 != j){
            flavors=[j+1, hashTable.get(money-cost[j])];
            found = true;
            break;
        }
    };
    return found ? flavors[0]+' '+flavors[1] : 'Not Found'    
}
cost = [4, 3, 2, 5, 7];
money = 8;
// expected 2 4
console.time('Second Attempt');
result = whatFlavors_v2(cost, money);
console.log('result: ', result);
console.timeEnd('Second Attempt');