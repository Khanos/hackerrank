class Point {
  distance(a, b){
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  // static __distance(a, b){
  //   const dx = a.x - b.x;
  //   const dy = a.y - b.y;
  //   return Math.sqrt(dx * dx + dy * dy);
  // }
}
module.exports = Point;