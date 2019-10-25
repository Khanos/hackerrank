let currencies = new Map();
currencies.set(1,{up:{value:5,name:'Nickel'},down:{value:1,name:'Penny'}});
currencies.set(2,{up:{value:25,name:'Quarter'},down:{value:10,name:'Dime'}});
currencies.set(3,{up:{value:500,name:'Five Dollars'},down:{value:100,name:'Dollar'}});
currencies.set(4,{up:{value:2000,name:'Twenty'},down:{value:1000,name:'Ten'}});
currencies.set(4,{value:10000,name:'One-hundred Dollars'});
let change = new Array();

let getMyChange = (goal, cheat) => {
    let currency = currencies.get(goal.toString().length);
    if(goal >= currency.up.value){
        change.push([currency.up.name, (parseInt(goal/currency.up.value) * currency.up.value)]);
        goal = goal - (currency.up.value*parseInt(goal/currency.up.value)); 
        if(goal !== 0){
            getMyChange(goal, 100);
        }
    } else if(goal !== 0){
        change.push([currency.down.name, parseInt(goal/currency.down.value) * currency.down.value]);
        goal = goal - (currency.down.value*parseInt(goal/currency.down.value)); 
        if(goal !== 0){
            getMyChange(goal, 100);
        }
    }
    return change;
}
//console.log(getMyChange(9, 100));
//console.log(getMyChange(90, 100));
console.log(getMyChange(131, 100));