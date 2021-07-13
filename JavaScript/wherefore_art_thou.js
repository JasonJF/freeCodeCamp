function whatIsInAName(collection, source) {
    var arr = [];
    //extract object properties from source
    var prop = Object.keys(source);
    // console.log(prop[0])

    // arr = collection.filter(person => person.hasOwnProperty(prop[0]));
    arr = collection.filter(function(obj){
        for(let i = 0; i < prop.length; i++){
            console.log(prop[i]);
            console.log(obj.hasOwnProperty(prop[i]));
            console.log(source[prop[i]]);

            if(!obj.hasOwnProperty(prop[i]) || obj[prop[i]] !== source[prop[i]]){
                return false;
            }
            else{
                continue;
            }
           
        }
        return true
    })
    // Only change code below this line

    // Only change code above this line
    console.log(arr);
    return arr;
  }
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });