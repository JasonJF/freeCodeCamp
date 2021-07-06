function getIndexToIns(arr, num) {
    var sortedArray = [];
  
      sortedArray = arr.sort((a, b) => a - b);
      console.log(sortedArray);
    var myIndex = 0;
    for(let i = 0; i < sortedArray.length; i++){
      if(num > sortedArray[i]){
        myIndex++;
      }
    //   myIndex = 0;
    }
    var newIndex = myIndex;
    myIndex = 0;
      
    console.log(newIndex);
    // return num;
  }
  
  getIndexToIns([40, 60], 50);
  getIndexToIns([10, 20, 30, 40, 50], 35);