function mutation(arr) {
    //normalize data and put into string
    var str1 = arr[0].toLowerCase();
    var str2 = arr[1].toLowerCase();
    var match = false;
    //split string into array
    str1 = str1.split('');
    str2 = str2.split('');
  //sort array alphabetically
  str1.sort();
  str2.sort();
  //check if all characters of str1 is present in str2
  
  for(let i = 0; i < str2.length; i++){
    for(let j = 0; j < str1.length; j++){
      if(str2[i] == str1[j]){
        match = true;
        break;
      }
      else{
        match = false;
        continue;
      }
    }
    if(match){
      continue
    }
    else{
      return false
    }
  }
  if(match){
    console.log(true);
    return true;
  }
    // console.log(str1);
    // return arr;
  }
  
  mutation(["hello", "hey"]);