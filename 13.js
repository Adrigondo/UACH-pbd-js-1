const forLoop = (lowerLimit, upperLimit, step ) => {
    return new Promise((resolve, reject) => {
        let count = 0;
        for (let i = lowerLimit; i <= upperLimit; i += step) {
            count += i;
        }
        resolve(count);
    })
}
(() => {
    forLoop(1, 100, 2).then((count) => {
        console.log(`There are ${count} multiples of 2 between 1 and 100`);
    });
    forLoop(1, 100, 3).then((count) => {
        console.log(`There are ${count} multiples of 3 between 1 and 100`);
    });
})();