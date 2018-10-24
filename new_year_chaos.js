let t = 1
let n = 8;
let arr = [1, 2, 5, 3, 7, 8, 6, 4]
// let arr = [2, 1, 5, 3, 4];
// let arr = [2, 5, 1, 3, 4];
let temp = 0;
let result = {isChaotic: false, count: 0}
for (let i = 0; i < n ; i++) {
	console.log(i);
	console.log(arr);
	console.log('validation1:', ((arr[i]-1) - i));
	console.log('validation2:', ((arr[i+1])-1)-(i+1) == true);
	if((arr[i]-1) - i > 2 || ((arr[i+1])-1)-(i+1) > 2){
		result.isChaotic = true;
		break;
	}
	if((arr[i])-i !== 1 && i < n - 1){
		temp = arr[i];
		arr[i] = arr[i+1];
		arr[i+1] = temp;
		result.count += 1;
	}
	console.log('------------------')
	
}
if(result.isChaotic){
	console.log('Is chaotic');
}else {
	console.log('result_arr', arr);
	console.log('count', result.count);
}

