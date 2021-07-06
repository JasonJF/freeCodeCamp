function truncateString(str, num) {
    var newStr = ""
    var strArray = [];
    for(let i = 0; i < num ; i++){
      // console.log(str[i]);
      strArray.push(str[i])
      
    }
    if(strArray.length < str.length){
    strArray.push('...');
    newStr = strArray.join('');
      console.log(newStr);
    }
    else{
        console.log(newStr);
        newStr = strArray.join('');
    }
    return newStr;
  }
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
  truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)