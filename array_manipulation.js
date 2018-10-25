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
//let n = 10;
//let queries = [ [ 1, 5, 3 ], [ 4, 8, 7 ], [ 6, 9, 1 ] ];
// expected 10
//let n = 5;
//let queries = [ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ]
// expected 200
let n = 10;
let queries = [ [ 2, 6, 8 ], [ 3, 5, 7 ], [ 1, 8, 1 ], [ 5, 9, 15 ] ];
// expected 31
let arr = [];
let currentMax = 0;
let max = {
	value: false,
	a: 0,
	b: n-1
};
function getMax(a,b,k){
	max.value = currentMax;
	max = arr.reduce((prev,current) => {
		if (prev.value>current.value) {
			return {
				value: prev.value,
				a: prev.a>current.a ? prev.a : current.a,
				b: prev.b<current.b ? prev.b : current.b
			}
		}
	},max);
	console.log(max);
	if(a<=max.b){
		max.a = a>max.a ? a : max.a;
		max.b = b<max.b ? b : max.b;
		max.value += k;
		arr.push(max)
	}else{
		arr.push(
			{
				value: k,
				a: a,
				b: b
			}
		);
	}
	console.log('a:',a,'b:',b,'k',k);
	console.log(arr);
	console.log('------------------')
	return max.value;
}
for(let value of queries){
	currentMax = getMax(value[0],value[1],value[2]);
}
console.log(currentMax);