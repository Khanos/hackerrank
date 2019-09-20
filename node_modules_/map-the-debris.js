function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const PI = Math.PI;
    let result = new Array();
    let orbitalPeriod = new Number();
    arr.forEach(element => {
      orbitalPeriod = 2 * PI * Math.sqrt((Math.pow(earthRadius+element.avgAlt, 3))/GM);
      result.push({
        name: element.name,
        orbitalPeriod: Math.round(orbitalPeriod)
      });
    });
    return result;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));