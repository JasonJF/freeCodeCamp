function translatePigLatin(str) {
    const vowelStartReg = /^[aeiou]/g;
    const vowelReg = /^[^aeiou]*/g;
    var interStr = "";
    var pigStr = "";
    var myConst = ""
    if(vowelStartReg.test(str) == true){
      // console.log(str);
      pigStr = str + "way";
    }
    else{
      //find index of first vowel
      interStr = str.match(vowelReg);
      // console.log(interStr)
      myConst = str.slice(0,(interStr.join()).length);
      console.log(myConst);
      pigStr = str.slice(myConst.length,str.length) + myConst + "ay";
    }
    console.log(pigStr);
    return pigStr;
  }
  
  translatePigLatin("consonant");
  translatePigLatin("eight");
  translatePigLatin("glove");
  translatePigLatin("rhythm");