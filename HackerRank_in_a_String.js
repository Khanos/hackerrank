function findIt(letter_, string_){
	//console.log("Find the letter: ", letter_, " in the string: ", string_);
	return string_.indexOf(letter_) == -1 ? {result:false} : {result:true, in: string_.indexOf(letter_)}
}
function popThat(index_,string_){
	//console.log("Slice the  string", string_, " at index: ", string_);
	return string_.slice(index_+1,string_.length);
}
// Complete the hackerrankInString function below.
function hackerrankInString(s) {
	let word = "hackerrank";
	for (let index = 0; index < word.length; index++) {
		const element = word[index];
		let match = findIt(element, s);
		if(match.result){
			s = popThat(match.in, s);
		} else {
			
			return "NO";
		}
	}
	return "YES"
}

console.log(hackerrankInString("hereiamstackerrank"));
console.log(hackerrankInString("rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt"));