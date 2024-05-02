const Readline = require('node:readline');
const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = (question) => {
    return new Promise((resolve, reject) => readline.question(question, resolve));
}
let option = 'y';
const main = async () => {
    let phraseCounter = 0;
    while (option != 'n') {
        await input("Enter a phrase: ");
        phraseCounter++;

        do {
            option = await input("Continue? (y/n) ");

            if (option != 'y' && option != 'n') {
                console.log('Invalid option (y/n): ');
            }
        } while (option != 'y' && option != 'n');
    }
    return phraseCounter;
}
main().then((phraseCounter) => {
    readline.close();
    console.log(`You wrote ${phraseCounter} phrases`);
});
