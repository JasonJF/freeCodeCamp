function chunkArrayInGroups(arr, size) {
    var smlArray = [];
    var newArray = [];
    for(let i = 0; i < arr.length; i++){
      // console.log(arr[i]);
       smlArray.push(arr[i]);
      if(smlArray.length == size){
       newArray.push(smlArray);
        smlArray = [];
       }
       else if(i == (arr.length) -1){
         newArray.push(smlArray);
       }
      
  
    }
    console.log(newArray)
    return arr;
  
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);