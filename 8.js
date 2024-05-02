const Readline = require('node:readline');
const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = (question) => {
    return new Promise((resolve, reject) => readline.question(question, resolve));
}
let option = 'a';
const main = async () => {
    do {
        option = await input("To end write 'S' or 'N':  ");
    } while (option != 'S' && option != 'N');
}
main().then(() => {
    readline.close();
});
