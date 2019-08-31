// Find the overlap area for two given rectangles
// imputs. For every rectangle, there is only the button left corner and the top right corner.
//let rect1 = [[2,1],[5,5]]
//let rect2 = [[3,2],[5,7]]

let rect1 = [[0,0],[2,2]]
let rect2 = [[3,0],[5,2]]

let findOverlap = (rect1, rect2) => {
        if(rect1[1][0] < rect2[0][0]){
            return false;
        }
        if(rect2[0][1] > rect1[1][1]) {
            return false;
        }
        let base = rect1[1][0] - rect2[0][0];
        let high = rect1[1][1] - rect2[0][1];
        let area = base * high;
        return area;
}

console.time('First attemp');
console.log(findOverlap(rect1,rect2));
console.timeEnd('First attemp');

console.log('-----------------------------------------------')
rect1 = [[0,0],[5,5]]
rect2 = [[3,0],[6,6]]

let findOverlap_v2 = (rect1, rect2) => {
    if(rect1[0][0] > rect2[1][0]){
        return false;
    }
    if(rect1[1][0] < rect2[0][0]){
        return false;
    } 
    // check for x axis
    if(rect1[1][1] < rect2[0][1]){
        return false;
    }
    if(rect1[0][1] > rect2[1][1]) {
        return false;
    }
    let base = Math.min(rect1[1][0], rect2[1][0]) - Math.max(rect1[0][0], rect2[0][0]);
    let high = Math.min(rect1[1][1], rect2[1][1]) - Math.max(rect1[0][1], rect2[0][1]);
    let area = base * high;
    return area;
}

console.time('Second attemp');
console.log(findOverlap_v2(rect1,rect2));
console.timeEnd('Second attemp');