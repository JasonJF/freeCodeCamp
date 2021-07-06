let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
    var myKeys = ['Alan','Jeff','Sarah','Ryan'];
    for(var key in myKeys){
        if(userObj.hasOwnProperty(myKeys[key])){
            continue
        }
        else {
            return false
        }
        
    }
    return true
//    return userObj.hasOwnProperty('Alan');
  
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));