function checkCashRegister(price, cash, cid) {
    //a little cheat to avoid dealing with fractions.
    let cheat = 100;
    let cashTypes = ['ONE HUNDRED','TWENTY','TEN','FIVE','ONE','QUARTER','DIME','NICKEL','PENNY'];

    // Now lets set our cash-in-drawer, for easy access
    let cashInDrawer = new Map();
    cid.forEach(element => {
        cashInDrawer.set(element[0], element[1]*cheat);
    });

    // We set the currencies types and values depending on the number of decimals.
    // And then used recursion to iterate until i got all the change needed
    let currencies = new Map();
    currencies.set(1,{up:{value:5,name:'NICKEL'},down:{value:1,name:'PENNY'}});
    currencies.set(2,{up:{value:25,name:'QUARTER'},down:{value:10,name:'DIME'}});
    currencies.set(3,{up:{value:500,name:'FIVE'},down:{value:100,name:'ONE'}});
    currencies.set(4,{up:{value:2000,name:'TWENTY'},down:{value:1000,name:'TEN'}});
    currencies.set(5,{value:10000,name:'ONE HUNDRED'});
    let change = new Array();
    let getMyChange = (goal, cheat) => {
        let currency = currencies.get(goal.toString().length);
        if(goal >= currency.up.value){
            change.push([currency.up.name, (parseInt(goal/currency.up.value) * currency.up.value)/cheat]);
            goal = goal - (currency.up.value*parseInt(goal/currency.up.value)); 
            if(goal !== 0){
                getMyChange(goal, 100);
            }
        } else if(goal !== 0){
            change.push([currency.down.name, (parseInt(goal/currency.down.value) * currency.down.value)/100]);
            goal = goal - (currency.down.value*parseInt(goal/currency.down.value)); 
            if(goal !== 0){
                getMyChange(goal, 100);
            }
        }
    }
    getMyChange((cash-price)*cheat, cheat);

    let result = new Object();
    // Now let's Check if we have the funds
    let remaining = 0; // if any
    let lastChance = false;
    for (let index = 0; index < change.length; index++) {
        change[index][1] = change[index][1] + remaining;
        if(cashInDrawer.get(change[index][0])/cheat < change[index][1]){
            remaining = change[index][1] - cashInDrawer.get(change[index][0])/cheat;
            change[index][1] = cashInDrawer.get(change[index][0])/cheat;
        } else {
            remaining = 0;
            lastChance = false;
        }
        if(remaining > 0 && change[index][0] !== "PENNY"){
            lastChance = true;
        }
    }

    if(lastChance){
        let lastCurrency = change[change.length-1][0];
        change = [];
        for (let index = 0; index < cashTypes.length; index++) {
            if(index < cashTypes.indexOf(lastCurrency) + 1){
                change.push([cashTypes[index],0]);
            } else {
                if(index <= cashTypes.length && cashInDrawer.get(cashTypes[index])/cheat >= remaining){
                    remaining = remaining - cashInDrawer.get(cashTypes[index])/cheat;
                    change.push([cashTypes[index],cashInDrawer.get(cashTypes[index])/cheat]);
                } else {
                    change.push([cashTypes[index],0]);
                }
            }
        }
        if(remaining == 0){
            let temp = [].concat(change);
            temp.forEach((e,i) => {
                change[temp.length-i-1] = temp[i];
            })
            result = {status: "CLOSED", change: change};
        }
    }

    if(remaining > 0){
        result = {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (!lastChance){
        result = {status: "OPEN", change: change};
    }

    // Here is your change, ma'am.
    
    return result;
}
//checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
//checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
console.log('end')
// let cid = [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100]
// ];
// let test = checkCashRegister(19.5, 20, cid);
// console.log(test);
