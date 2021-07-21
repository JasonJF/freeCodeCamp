function steamrollArray(arr) {
    var newArr = [];
    for(let i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i])){
        newArr.push(...steamrollArray(arr[i]));
      }
      else{
        // console.log(arr[i]);
        newArr.push(arr[i]);
        console.log(newArr)
      }
    }
    
    // console.log(newArr);
    return arr;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);