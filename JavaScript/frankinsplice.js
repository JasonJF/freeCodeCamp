function frankenSplice(arr1, arr2, n) {
    //from the first array copy into second arraym begin at n
    var arr3 = [];
    arr3= arr2.slice(0,arr2.length)
    arr3.splice(n,0,...arr1)
    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    return arr3;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);