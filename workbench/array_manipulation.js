// let n = 5;
// let queries = [ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ];
// let arr = Array.from({length: n}, () => 0);
// for(let value of queries){
// 	for(let i = value[0]-1; i<value[1]; i++){
// 		i
// 		arr[i]+= value[2]; 
// 	}
// }
// let result = arr.reduce((accumulator, currentValue) => accumulator > currentValue ? accumulator : currentValue);
// console.log(result);

// try 1 filed test cases

// let n = 5;
// let queries = [ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ];
// let arr = Array.from({length: n}, () => 0);
// let currentMax = 0;
// for(let value of queries){
// 	value
// 	for(let i = value[0]-1; i<value[1]; i++){
// 		arr[i]+= value[2];
// 		if (currentMax < arr[i]){
// 			currentMax = arr[i];
// 			break;
// 		}; 
// 	}
// }
// console.log(currentMax);

// try 2 filed
// let n = 10;
// let queries = [ [ 2, 6, 8 ], [ 3, 5, 7 ], [ 1, 8, 1 ], [ 5, 9, 15 ] ];
// let currentMax = 0;
// let max = {
// 	value: 0,
// 	a: 0,
// 	b: 0
// };
// function getMax(a,b,k){
// 	max.value = currentMax;
// 	console.log(a,b);
// 	console.log(max.value);
// 	max.a = a>max.a ? a : max.a;
// 	max.b = b<max.b ? b : max.b;
// 	max.value += k;
// 	return max.value;
// }
// for(let value of queries){
// 	currentMax = getMax(value[0],value[1],value[2]);
// }
// console.log(currentMax);

//try 4 failed
// let n = 10;
// let queries = [ [ 1, 5, 3 ], [ 4, 8, 7 ], [ 6, 9, 1 ] ];
// expected 10
// let n = 5;
// let queries = [ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ]
// expected 200
// let n = 10;
// let queries = [ [ 2, 6, 8 ], [ 3, 5, 7 ], [ 1, 8, 1 ], [ 5, 9, 15 ] ];
// expected 31
//let n = 50
//let queries = [[1,2,1],[4,5,1],[12,16,1],[22,23,1]]
// let arr = [];
// let prev = [];
// let current = [];
// let currentMax = 0;
// let max = {
// 	value: 0,
// 	a: 0,
// 	b: n-1,
// 	multi: false
// };
// var isOverlap = false;
// let getOverlap = function(a,b,c,d){
// 	let result;
// 	if (c <= a && a <= d){
// 		if(c <= b && b <= d){
// 			result = [a,b];
// 		}else{
// 			result = [a,d];
// 		}
// 	} else {
// 		if(a<c){
// 			if(c <= b && b <= d){
// 				result = [c,b];
// 			}else{
// 				if(b>d){
// 					result = [c,d];
// 				}else{
// 					result = false;
// 				}
// 			}
// 		} else {
// 			result = false
// 		}
// 	}
// 	return result;
// }
// let getMax = function(){
// 	return arr.reduce((prev, current) => {
// 		return prev.value < current.value ? current : prev;
// 	},max)
// }
// let setMax = function(a,b,value,multi){
// 	arr.push({
// 		value: value,
// 		a: a,
// 		b: b,
// 		multi: multi
// 	});
// }

// for (let index in queries){
// 	if(index < queries.length-1){
// 		prev = queries[parseInt(index)];
// 		current = queries[parseInt(index)+1];
// 		isOverlap = getOverlap(prev[0],prev[1],current[0],current[1]);
// 		if (isOverlap) {
// 			setMax(isOverlap[0],isOverlap[1],prev[2]+current[2],false);
// 			console.log('here:',isOverlap);
// 		} else {
// 			max = getMax()
// 			if(prev[2] < current[2]){
// 				if(max.value < current[2]){
// 					setMax(current[0], current[1],current[2],false)
// 				} else {
// 					if(max.value == current.value){
// 						isOverlap = getOverlap(max.a,max.b,current.a,current.b);
// 						if (isOverlap){
// 							setMax(isOverlap[0],isOverlap[1],current.value,false);
// 						} else {
// 							setMax([isOverlap[0],current.a],[isOverlap[1],current.b],current.value,true);
// 						}
// 					}
// 				}
// 			} else {
// 				isOverlap = getOverlap(prev[0],prev[1],current[0],current[1]);
// 				if (isOverlap){
// 					setMax(isOverlap[0],isOverlap[1],current.value,false);
// 				} else {
// 					setMax([isOverlap[0],current.a],[isOverlap[1],current.b],current.value,true);
// 				}
// 			}
// 			console.log(max.value);
// 			console.log('Nope',isOverlap);
// 		}
// 	}
// }

// console.log('Done!',currentMax);

let n = 10;
let queries = [ [ 2, 6, 8 ], [ 3, 5, 7 ], [ 1, 8, 1 ], [ 5, 9, 15 ] ];
// expected 31
//let n = 5;
//let queries = [ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ]
// expected 200
//let n = 50
//let queries = [[1,2,1],[4,5,1],[12,16,1],[22,23,1]]
let arr = Array.from({length: n}, () => 0);
let max = 0;
for (let i = 0; i < queries.length; i++) {
	arr[queries[i][0]-1] += queries[i][2];
	if (queries[i][1] < arr.length) {
		arr[queries[i][1]] -= queries[i][2];
	}
	
}
for (let i = 1; i < n; i++) {
	arr[i] += arr[i-1];
	max = Math.max(max, arr[i]);
}

console.log(max);