const Readline = require('node:readline');
const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = (question) => {
    return new Promise((resolve, reject) => readline.question(question, resolve));
}
let number = 0;
const main = async () => {
    number = Number(await input("Write a number:  "));
    if (isNaN(number)) {
        throw "The value is not a number";
    }
    return number;
}
main().then((number) => {
    if (number >= 0) {
        console.log(`${number} is positive`);
    } else {
        console.log(`${number} is negative`);
    }
}).catch((err) => {
    console.error(err);
}).finally(() => {
    readline.close();
});
