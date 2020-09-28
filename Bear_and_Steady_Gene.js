function countGenes(string){
	let n = string.length;
	let arr = [
		["C", (string.split("C").length - 1) - n/4], 
		["G", (string.split("G").length - 1) - n/4],
		["A", (string.split("A").length - 1) - n/4],
		["T", (string.split("T").length - 1) - n/4]
	]
	return arr;
}
function getOverflowStr(arr){
	let overflowStr = "";
	arr.forEach(element => {
		overflowStr += element[1] > 0 ? element[0].repeat(element[1]) : "";
	});
	return overflowStr;
}
function findWindow(overflowArr, string){
	let haystack = string;
	let needle = getOverflowStr(overflowArr); // the order of letters doesn't matter
	let letters = {};
	needle.split('').forEach(function(ch) {
		letters[ch] = letters[ch] || 0;
		letters[ch]++;
	});
	let shortestSubstringLength = haystack.length;
    let shortestSubstrings = []; // storage for found substrings
    let startingPos = 0;
    let letterKeys = Object.keys(letters); // unique leters
    let notFound, length, lettersLeft, currentPos, posStart, posEnd;
	do {
		lettersLeft = JSON.parse(JSON.stringify(letters)); // copy letters count object
		notFound = false;
		posStart = haystack.length;
		posEnd = 0;
		letterKeys.forEach(function(ch) {
			currentPos = startingPos;
			while (!notFound && lettersLeft[ch] > 0) {
				currentPos = haystack.indexOf(ch, currentPos);
				if (currentPos >= 0) {
					lettersLeft[ch]--;
					posStart = Math.min(currentPos, posStart);
					posEnd = Math.max(currentPos, posEnd);
					currentPos++;
				} else {
					notFound = true;
				}
			}
		});
		if (!notFound) {
			length = posEnd - posStart + 1;
			startingPos = posStart + 1; // starting position for next iteration
		}
		if (!notFound && length === shortestSubstringLength) {
			shortestSubstrings.push(haystack.substr(posStart, length));
		}
		if (!notFound && length < shortestSubstringLength) {
			shortestSubstrings = [haystack.substr(posStart, length)];
			shortestSubstringLength = length;
		}
	} while (!notFound);
	return shortestSubstrings;
}
// Complete the steadyGene function below.
function steadyGene(gene) {
	let sample = gene;	
	let arr = countGenes(sample);
	let window = findWindow(arr, sample);
	return window[0].length;
}
let sample = "TGATGCCGTCCCCTCAACTTGAGTGCTCCTAATGCGTTGC";
console.log(steadyGene(sample));
//console.log(countGenes(sample));
//let arr = countGenes(sample);
//console.log(findWindow(arr, sample));