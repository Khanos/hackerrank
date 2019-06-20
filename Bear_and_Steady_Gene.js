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
function countOverflow(arr){
	return arr.reduce((last, current) => {
		return last[1] > current[1] ? last : current;
	})
}
function findWindow(overflowArr, string){
	let overflow = countOverflow(overflowArr);
	let run = true;
	let overStr = overflow[0].repeat(overflow[1]);
	let candidateArr = []
	while (run) {
		candidateArr = string.split(overStr);
		if (candidateArr.length == 1){
			overStr.slice(0, -1);	
		} else {
			run = false;
		}
	}
	return candidateArr;
}
// Complete the steadyGene function below.
function steadyGene(gene) {


}
let sample = "GAAATAAA";
console.log(countGenes(sample));