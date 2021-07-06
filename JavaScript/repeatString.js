function repeatStringNumTimes(str, num) {
    var newStr = "";
    if( num > 0){
      for(let i = 0; i <= num; i++){
        newStr = newStr + str;
      }
    }
      else{
        newStr = "";
      }
    
  
    return newStr;
  }
  
  repeatStringNumTimes("abc", 3);