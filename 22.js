const Readline = require('node:readline');
const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = (question) => {
    return new Promise((resolve, reject) => readline.question(question, resolve));
}

const main = async () => {
    let phrase = await input("Write a phrase: ");
    for(let i=0; i<5; i++){
        for(let j=1; j<=4*i; j++){
            process.stdout.write(` `);
        }
        console.log(phrase);
    }
}
main().catch((err) => {
    console.error(err);
}).finally(() => {
    readline.close();
});
