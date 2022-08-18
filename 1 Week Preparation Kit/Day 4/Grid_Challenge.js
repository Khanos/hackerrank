// Given a square grid of characters in the range ascii[a-z], 
// rearrange elements of each row alphabetically, ascending. 
// Determine if the columns are also in ascending alphabetical order, top to bottom. 
// Return YES if they are or NO if they are not.
function gridChallenge(grid) {
    // Write your code here
    function isInAlphabeticalOrder(arr){
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let isInAlphabeticalOrder = true;
        let currentIndex = 0;
        let prevIndex = 0;
        for (let i = 0; i < arr.length; i++) {
            currentIndex = alphabet.indexOf(arr[i]);
            if(currentIndex < prevIndex) {
                isInAlphabeticalOrder = false;
                break;
            } else {
                prevIndex = currentIndex;
            }
        }
        return isInAlphabeticalOrder
    }
    const gridInAlphabeticalOrder = grid.map(row => row.split('').sort());
    const columnArray = [];
    for (let i = 0; i < gridInAlphabeticalOrder[0].length; i++) {
        const column = [];
        for (let j = 0; j < gridInAlphabeticalOrder.length; j++) {
            column.push(gridInAlphabeticalOrder[j][i]);
        }
        columnArray.push(column);
    }
    let isGridInAlphabeticalOrder = true;
    for (let i = 0; i < columnArray.length; i++) {
        if(!isInAlphabeticalOrder(columnArray[i])) {
            isGridInAlphabeticalOrder = false;
            break;
        }
    }
    return isGridInAlphabeticalOrder ? 'YES' : 'NO';
}

const grid = [ 'kc', 'iu' ];
const grid2 = ['uxf', 'vof', 'hmp'];
const grid3 = ['eabcd', 'fghij', 'olkmn', 'trpqs', 'xywuv']; // YES
const grid4 = ['mpxz', 'abcd', 'wlmf']; // NO
console.log(gridChallenge(grid4)); // YES