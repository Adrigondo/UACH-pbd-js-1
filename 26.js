const Readline = require('node:readline');
const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = (question) => {
    return new Promise((resolve, reject) => readline.question(question, resolve));
}
const printCentered=(phrase)=> {
    const screenWidth = process.stdout.columns;
    const padding = Math.floor((screenWidth - phrase.length) / 2);
    const centeredPhrase = " ".repeat(padding) + phrase;
    console.log(centeredPhrase);
}

const main = async () => {
    let phrase = await input("Write a phrase: ");
    printCentered(phrase);
}
main().catch((err) => {
    console.error(err);
}).finally(() => {
    readline.close();
});
