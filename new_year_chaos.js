let t = 1
let n = 5;
// let arr = [1, 2, 5, 3, 7, 8, 6, 4]
// let arr = [2, 1, 5, 3, 4];
 let arr = [2, 5, 1, 3, 4];
let flag = true;
let temp = 0;
let result = {isChaotic: false, count: 0, arr: arr}
function isOrdered(arr){
	let response = true;
	for(let i = 0; i<arr.length; i++){
		if(arr[i]>arr[i+1]){
			response = false;
			break;
		}
	}
	return response;
}
function bride(result){
	let arr = result.arr;
	for (let i = 0; i < n ; i++) {
		if((arr[i]-1) - i > 2 || ((arr[i+1])-1)-(i+1) > 2){
			result.isChaotic = true;
			break;
		}
		if(((arr[i])-i !== 1) && (i < n - 1) && (arr[i] > arr[i+1]) ){
			temp = arr[i];
			arr[i] = arr[i+1];
			arr[i+1] = temp;
			result.count += 1;
		}
	}
	result.arr = arr;
	if(isOrdered(result.arr) || result.isChaotic){
		return true;
	} else {
		bride(result);
	}
	
}


bride(result);
if(result.isChaotic){
	console.log('Is chaotic');
}else {
	console.log('Too chaotic', arr);
	console.log(result.count);
}

