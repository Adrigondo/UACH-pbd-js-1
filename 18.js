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
    let letter =await input("Write a letter: ");
    let count=phrase.match(new RegExp(letter, "g") || []).length; 
    return {phrase,letter,count};
}
main().then(({phrase,letter,count}) => {
    console.log(`The '${letter}' letter appears ${count} times in "${phrase}"`);
}).catch((err) => {
    console.error(err);
}).finally(() => {
    readline.close();
});
