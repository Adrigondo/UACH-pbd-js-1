const forLoop = (lowerLimit, upperLimit, step ) => {
    return new Promise((resolve, reject) => {
        let sum = 0;
        for (let i = lowerLimit; i <= upperLimit; i += step) {
            sum += i;
        }
        resolve(sum);
    })
}
(() => {
    forLoop(1, 100, 2).then((oddSum) => {
        console.log(`The sum of odd numbers is ${oddSum}`);
    });
    forLoop(0, 100, 2).then((evenSum) => {
        console.log(`The sum of even numbers is ${evenSum}`);
    });
})();