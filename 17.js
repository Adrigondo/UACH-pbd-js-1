const Readline = require('node:readline');
const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = (question) => {
    return new Promise((resolve, reject) => readline.question(question, resolve));
}

const forLoop = (lowerLimit, upperLimit, step) => {
    return new Promise((resolve, reject) => {
        let sum = 0;
        let count = 0;
        for (let i = lowerLimit; i <= upperLimit; i += step) {
            sum += i;
            count++;
        }
        resolve({sum, count});
    })
}

const main = async () => {
    let lowerLimit = 0;
    let upperLimit = 0;
    lowerLimit = Number(await input("Write a lower limit:  "));
    upperLimit = Number(await input("Write a upper limit:  "));

    if (isNaN(lowerLimit) || isNaN(upperLimit)) {
        throw "The value is not a number";
    } else if (upperLimit < lowerLimit) {
        throw "The upper limist must be greater than the lower limit";
    }
    return {
        lowerLimit,
        upperLimit,
        even: await forLoop(lowerLimit, upperLimit, 2),
    };
}

main().then(({
    lowerLimit, upperLimit, even
}) => {
    console.log(`The sum of even numbers between ${lowerLimit} and ${upperLimit} is ${even.sum} and the count is ${even.count}`);
}).catch((err) => {
    console.error(err);
}).finally(() => {
    readline.close();
});
