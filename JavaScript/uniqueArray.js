function uniteUnique() {
    //to accept multiple arguments in a single variable
    var arr = [];
    var uniqueArr = [];
    //push arguments to arr
    for(var array in arguments){
      // console.log(arguments[array]);
      arr = arr.concat(arguments[array]) //create a single array
      // arr.push(arguments[array]);
    }
    //check arr for duplicates
    for(let i = 0; i<arr.length;i++){
      if(uniqueArr.indexOf(arr[i]) === -1){ //number is not present in unique array
        uniqueArr.push(arr[i]);
      }
      }
    
    console.log(uniqueArr);
    return arr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);