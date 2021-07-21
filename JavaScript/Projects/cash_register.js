function checkCashRegister(price, cash, cid) {
    //first find out how much change is due
    var changeAmount = cash - price;
    console.log("Change amount: " + changeAmount);
    //find the largest amount that the change can be divided by
    let currencyTable = {"PENNY":0.01,
    "NICKEL":0.05,
    "DIME":0.1,
    "QUARTER":0.25,
    "ONE":1,
    "FIVE":5,
    "TEN":10,
    "TWENTY":20,
    "ONE HUNDRED":100}
    var keys = Object.keys(currencyTable);

    // console.log(keys);
    //loop through my currency table to find which currency to start with
    var viableMoney = "";
    var value = false;
    // keys.forEach(key => console.log(currencyTable[key]));
    keys.every(key => {
        if(currencyTable[key] > changeAmount){
            var viableMoneyIndex = keys.indexOf(key) - 1; //go back one since this value is too high
            viableMoney = keys[viableMoneyIndex] //return the starting currency
            return false
        }
        else{
            return true
        }
    });
    var changeLeft = changeAmount;
    var returnDraw = [];
    //find starting array to start getting change from 
    // console.log(cid);
    var myIndex = cid.indexOf(cid.find((array) => array[0] == viableMoney));
        
    function countMoney(drawer){
        console.log(Math.floor(changeLeft));
        var numberofnotes = Math.floor(changeLeft / (currencyTable[drawer[0]]));//How many coins / bills goes into changeLeft
        return  (currencyTable[drawer[0]])*numberofnotes// amount needed from drawer
    }
    function getChange(drawer){
        
        if(changeLeft > drawer[1]){
            // drawer[1] = changeAmount;   //check this later
            // cid[myIndex][1] = 0;
            returnDraw.push(drawer);
            // console.log(returnDraw)
            return changeLeft - drawer[1];
        }
        else{
            var amountToSubtract = countMoney(drawer);
            if(amountToSubtract !== 0){
            returnDraw.push([drawer[0],amountToSubtract]);
            }
            return changeLeft - amountToSubtract;
        }
    }
    // console.log(myIndex);
    for(myIndex; changeLeft > 0 && myIndex >=0; myIndex--){
        changeLeft = (getChange(cid[myIndex])).toFixed(2);
    }
    if(changeLeft <= 0){
        //check money left in cid
        var cid_cash_left = cid.reduce((sum, drawer) => {
            return sum += drawer[1];
        },0);
        // console.log(cid_cash_left);
        //if cid is empty
        if(cid_cash_left == changeAmount){
        console.log({status: "CLOSED", change:cid});
        return {status: "CLOSED", change:cid};
        }
        else{
        console.log({status: "OPEN", change:returnDraw});
        return {status: "OPEN", change:returnDraw};
        }
    }
    if(changeLeft > 0){
        // console.log(myIndex);
    console.log({status: "INSUFFICIENT_FUNDS", change:[]});
    return {status: "INSUFFICIENT_FUNDS", change:[]};
    }
   
    
  
    
    // var change;
    // return change;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);