const Readline = require('node:readline');
const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


readline.question("Enter a number: ", (value) => {
    let counter=0;
    const upperLimit = Number(value);
    for (let i = 1; i <= upperLimit; i+=3) {
        console.log(i);
        counter++
    }
    console.log(`There exists ${counter} multiples of 3 between 1 and ${upperLimit}`);
    readline.close();
});