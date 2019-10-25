function palindrome(str) {
    let letterArr = str.split('');
    let filterArr = new Array();
    letterArr.forEach(letter => {
        if(/^[0-9a-zA-Z]+$/.test(letter)){
            filterArr.push(letter.toLowerCase());
        }
    })
    let bottomIndex = 0; 
    let topIndex = filterArr.length-1;
    while(bottomIndex < topIndex){
        if(filterArr[bottomIndex] !== filterArr[topIndex]){
            return false;
        }
        bottomIndex++;
        topIndex--;
    }
    // Good luck!
    return true;
}
  
  
console.log(palindrome("1 eye for of 1 eye."))