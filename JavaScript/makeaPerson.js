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
      if(str.length >10 && str[0] != 1){
        return false;
      }
      else{
      console.log(str + "-&3");
      return true;
      }
    }
    else if(str[0] == 1){
      var x = str.match(/(?<=1).+/g) //lookbehind to find numbers after 1
      // x.join('');
     x = x[0].replace(/^\s+/g,'');
      // console.log(x);
      if(reg1.test(x) || reg2.test(x) || reg3.test(x) || reg4.test(x)){
      console.log(x + "-&1");
      return true;
    }
    else{
      for(let i = 0; i < str.length; i++){
        if(!digitReg.test(str[0])){
          return false;
        }
      }
      str = str.split(/\D/);
      number = str.join('');
      // console.log(number);
      if(number.length == 11){
        // console.log(str + "-&4");
        return true;
      }
    }
      
    }
    else{
    console.log(str + "-&5");
    return false;
  }
  }
  telephoneCheck("1 555-555-5555");
  telephoneCheck("1 (555) 555-5555");
  telephoneCheck("1(555)555-5555");
  
  