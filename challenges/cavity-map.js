// Example
// cavityMap([['1112', '1912', '1892', '1234']]) = ['1112', '1X12', '18X2', '1234']
function cavityMap(grid) {
  for (let index = 1; index < grid.length - 1; index++) {
    const rowUp = grid[index-1].split('');
    let row = grid[index].split('');
    const rowDown = grid[index+1].split('');
    for (let index = 1; index < row.length - 1 ; index++) {
      if(row[index-1] < row[index] && row[index] > row[index+1] ) {
        if(row[index] > rowUp[index] && row[index] > rowDown[index]) {
          row[index] = 'X';
        }
      }
    }
    grid[index] = row.join('');
  }
  return grid
}

const grid = ['1112', '1912', '1892', '1234']
console.log(grid);
console.log(cavityMap(grid));