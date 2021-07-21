function telephoneCheck(str) {
    let reg1 = /^\(\d{3}\)\d{3}-\d{4}/g;
      let reg2 = /^\(\d{3}\)\s\d{3}-\d{4}/g;
      let reg3 = /^\d{3}-\d{3}-\d{4}/g;
      let reg4 = /^\d{3}\s\d{3}\s\d{4}/g;
      let reg5 = /1\s\d{3}\s\d{3}\s\d{4}/g;
     
    let digitReg = /\d+/g;
   
    // console.log(str);
    var number = 0;
    
    // console.log(number);
    //remove all non-numeric characters
    //check number of digits
    //if digits more than 10, check if first digit is 1
    if(reg1.test(str) || reg2.test(str) || reg3.test(str) || reg4.test(str)){
      console.log(str + "-&1");
      return true;
    }
    else if(reg5.test(str)){
       console.log(str + "-&2");
       return true;
      }
    else if(/^\d{10}/g.test(str)){
      if(str[0] != 1){
        return false;
      }
      else{
      console.log(str + "-&3");
      return true;
      }
    }
    else{
    console.log(str + "-&4");
    return false;
  }
  }
  
  
  telephoneCheck("2 (757) 622-7382");
  telephoneCheck("-1 (757) 622-7382");
  telephoneCheck("10 (757) 622-7382");
  telephoneCheck("27576227382");
  telephoneCheck("2(757)622-7382");
  telephoneCheck("(555-555-5555");
  
  