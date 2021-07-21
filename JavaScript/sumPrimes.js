function smallestCommons(arr) {
    var rangeArr = [];
    var dividable = false;
    arr = arr.sort((a,b) => a - b);
    for(let i = arr[0]; i < arr[1]; i++){
      rangeArr.push(i);
      // console.log(rangeArr)
    }
    for(let j = 1; !dividable; j++){
      var multiple = j * arr[1];
    //   console.log(multiple);
      for(let k = 0; k < rangeArr.length; k++){
        if(multiple%rangeArr[k] === 0){
        //   console.log(multiple)
          dividable = true;
        //   continue;
        }
        else{
          dividable = false;
          break;
        //   console.log(multiple)
        }
        
      }
    }
    // console.log(arr)
    console.log(multiple);
    return multiple;
  
  }
  
  
  smallestCommons([1,5]);
  smallestCommons([23, 18])