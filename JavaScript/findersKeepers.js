function findElement(arr, func) {
    let num = 0;
    // return num;
    for(let i = 0; i < arr.length; i++){
        num = arr[i];
        if(func(num)){
            console.log(num);
            return num;
        }       
    }
    return undefined;
    // func(num);
    // console.log(arr);
    // console.log(func);
  }
  
  findElement([1, 3, 5, 9], num => num % 2 === 0);