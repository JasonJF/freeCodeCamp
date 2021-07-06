function sortNumArray(arr) {
    var sortedArray = [];

    sortedArray = arr.sort((a, b) => a - b);
    console.log(sortedArray);
}
  
sortNumArray([10, 30, 70, 50, 40, 30, 50]);