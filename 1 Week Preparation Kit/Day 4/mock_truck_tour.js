function truckTour(petrolpumps){
    const result = petrolpumps.reduce((acc, el, index) => {
        acc.petrol += el[0] - el[1];
        if(acc.petrol < 0){
            acc.petrol = 0;
            acc.pump = index + 1;
        }
        return acc;
    }, {petrol: 0, pump: 0});

    return result.pump;
}

const petrolpumps = [ [ 1, 5 ], [ 10, 3 ], [ 3, 4 ] ];
console.log(truckTour(petrolpumps)); // 1