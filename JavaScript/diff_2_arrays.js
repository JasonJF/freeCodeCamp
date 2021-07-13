function diffArray(arr1, arr2) {
    var newArr = [];
    arr1.map(function(item){
      // console.log(item);
      if(!arr2.includes(item)){
        console.log(item);
        newArr.push(item);
      }
    });
    arr2.map(function(item){
        // console.log(item);
        if(!arr1.includes(item)){
          console.log(item);
          newArr.push(item);
        }
      })
    console.log(newArr);
    return newArr;
  }
  
  diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);