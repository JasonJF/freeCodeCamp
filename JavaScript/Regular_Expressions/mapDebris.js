function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var alpha = 0;
    var T = 2 * Math.PI * Math.sqrt(Math.pow(earthRadius + 35873.5553,3)/GM);
    // console.log(Math.round(T));
    var givenArr = arguments[0];
    var calculatedArr = [];
    calculatedArr = givenArr.map(function(obj){
      console.log(obj.avgAlt);
      alpha = obj.avgAlt + earthRadius;
      // console.log(alpha);
      obj.avgAlt = (2 * Math.PI * Math.sqrt(Math.pow(alpha,3)/GM));
      console.log(obj.avgAlt);
      return obj.avgAlt; 
    })
    // console.log(givenArr);
    // console.log(calculatedArr);
    return arr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
  orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])