function truthCheck(collection, pre) {
    // Is everyone being true?
    let isTrue = true;
    for (let i = 0; i < collection.length; i++) {
        if(!collection[i][pre]){
            return false;
        }
    }
    return isTrue;
}
  
 console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
 console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"))