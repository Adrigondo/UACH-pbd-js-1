const Readline = require('node:readline');
const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = (question) => {
    return new Promise((resolve, reject) => readline.question(question, resolve));
}
const main = async () => {
    let number = 0;
    let greatest=-100000000;
    let lowest=100000000;

    for(let i=0; i<5; i++){
        number = Number(await input(`Input the ${i+1}° number: `));
        greatest=Math.max(number,greatest);
        lowest=Math.max(number,lowest);
    }
    return {
        greatest, lowest
    }
}
main().then(({greatest, lowest}) => {
    readline.close();
    console.log(`The greatest number is ${greatest} and the lowest is ${lowest}`)
});
