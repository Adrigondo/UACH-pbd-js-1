const Readline = require('node:readline');
const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


readline.question("Enter a number: ", (value) => {
    const upperLimit = Number(value);
    for (let i = 1; i <= upperLimit; i++) {
        console.log(i);
    }
    readline.close();
});