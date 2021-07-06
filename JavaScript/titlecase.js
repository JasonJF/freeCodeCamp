function titleCase(str) {
    str = str.toLowerCase();
    var strArray = str.split(' ');
    for(let i = 0; i < strArray.length; i++){
        
        strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
        console.log(strArray[i]);
    }
    var newStr = strArray.join(' ');
    return newStr;
  }
  
  titleCase("I'm a little tea pot");