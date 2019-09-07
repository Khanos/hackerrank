let num_ways = (n) => {
    if (n == 0 || n == 1){
        return 1
    } else {
        return num_ways(n-1) + num_ways(n-2);
    }
}
let num_ways_botton_up = (n) => {
    if (n == 0 || n == 1){
        return 1
    }
    let nums = new Array(n+1);
    nums[0] = nums[1] = 1;
    for (let index = 2; index < nums.length; index++) {
        nums[index] = nums[index-1] + nums[index-2];
    }
    return nums.pop()
}
console.log('result: ', num_ways(4));
console.log('result: ', num_ways_botton_up(4));
console.log('------------------------------------------------');
