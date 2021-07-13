function spinalCase(str) {

    const spReg = /\s+|_+/g; //regex to replace spaces or underscores
    // str = str.toLowerCase();
    //add a space between lowercase letters that are followed by an uppercase letter
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2") // first group plus space plus second group
    str = str.replace(spReg, "-"); //replace spaces and underscores with dashes
    str = str.toLowerCase(); //make all letters lowercase
    console.log(str);
    return str;
  }
  
  spinalCase('This Is Spinal Tap');
  spinalCase("thisIsSpinalTap");
  spinalCase("The_Andy_Griffith_Show");
  spinalCase("Teletubbies say Eh-oh");
  spinalCase("AllThe-small Things")