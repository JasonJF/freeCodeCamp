function destroyer(arr,...values) {

    //test each item in values and delete from arr
    for(let i = 0; i < values.length; i++){
      arr = arr.filter(item => item != values[i]); //return items that are not equal to value
      }
    
    // arr.forEach(console.log)
    console.log(arr);
    return arr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);