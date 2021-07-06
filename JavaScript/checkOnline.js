function countOnline(usersObj) {
    // Only change code below this line
    let onlineCounter = 0;
  for (let user in usersObj){
    //   console.log(usersObj[user]['online']);
      if(usersObj[user]['online'] == true){
        //   console.log("yes");
          onlineCounter++;
      }
  }
  return onlineCounter;
    // Only change code above this line
  }
  countOnline({
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: true
    }
  });