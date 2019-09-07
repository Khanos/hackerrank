// arr = [ [x,y] ...], we need to find the closest to cero.
// let imputArr = [[1,1],[2,2],[-2,2],[-2,-2],[2,-2]];
let imputArr = [[1,1],[2,2],[-2,2],[-2,-2],[2,-2],[3,3],[-3,3],[-3,-3],[3,-3],[4,4],[-4,4],[-4,-4],[4,-4]];
let k = 3;

let getDistanceToCero = (point) => {
    return Math.sqrt(point[0]**2 + point[1]**2);
};

let getNearest = (imputArr) => {
    let min = {
        distance: getDistanceToCero(imputArr[0]),
        point: imputArr[0]
    };
    let temp;
    for(let i = 1; i < imputArr.length; i++){
        temp = getDistanceToCero(imputArr[i]);
        if(temp < min.distance){
            min = {
                distance: temp,
                point: imputArr[i]
            };
        }
    }
    return min;
}
console.time('First Attempt');
// console.log('imputArr: ', imputArr);
console.log(getNearest(imputArr));
//console.log(getDistanceToCero([1,1]))
//console.log(getDistanceToCero([2,-2]))
console.timeEnd('First Attempt');

console.log('-------------------------------------');
// Now you has to find the K numbers of points.
let getNearest_2 = (imputArr, k) => {
    let distanceArr = [];
    for(let i = 0; i < imputArr.length; i++){
        min = {
            distance: getDistanceToCero(imputArr[i]),
            point: imputArr[i]
        };
        distanceArr.push(min);
    }
    distanceArr.sort((prev, curr) => {return prev.distance - curr.distance});
    return distanceArr.slice(0,k);
}
console.time('Second Attempt');
//console.log('imputArr: ', imputArr);
console.log(getNearest_2(imputArr, 3));
console.timeEnd('Second Attempt');

console.log('-------------------------------------');
// Now you has to find the K numbers of points.
let findBiggest = (arr) => {
    let biggest = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(biggest.distance > arr[i].distance){
            biggest = arr[i];
            biggest.index = i;
        }
    }
    return biggest;
};
let getNearest_3 = (imputArr, k) => {
    let distanceArr = [];
    for(let i = 0; i < imputArr.length; i++){
        min = {
            distance: getDistanceToCero(imputArr[i]),
            point: imputArr[i]
        };
        distanceArr.push(min);
    }
    let heap = {
        elements: distanceArr.slice(0,k)
    }
    heap.biggest = findBiggest(heap.elements);
    heap.replaceBiggest = (element) => {
        heap.elements[heap.biggest.index] = element;
        return true;
    }
    for(let i = k; i<distanceArr.length; i++ ){
        if(distanceArr[i].distance < heap.biggest.distance){
            heap.replaceBiggest(distanceArr[i]);
        }
    }
    return heap.elements;
}
console.time('Third Attempt');
//console.log('imputArr: ', imputArr);
console.log(getNearest_3(imputArr, 3));
console.timeEnd('Third Attempt');