const Readline = require('node:readline');
const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = (question) => {
    return new Promise((resolve, reject) => readline.question(question, resolve));
}
const multiplicationTable=(number)=> {
    console.log("Multiplication table for " + number + ":");
    for (let i = 1; i <= 10; i++) {
        console.log(number + " × " + i + " = " + (number * i));
    }
}

const main = async () => {
    let number = Number(await input("Write a number: "));
    multiplicationTable(number);
}
main().catch((err) => {
    console.error(err);
}).finally(() => {
    readline.close();
});
