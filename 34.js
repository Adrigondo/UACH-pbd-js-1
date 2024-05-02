const fs = require('fs');

const Readline = require('node:readline');
const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = (question) => {
    return new Promise((resolve, reject) => readline.question(question, resolve));
}


const main = async () => {
    const gradeToSearch=Number(await input('Enter the grade you want to search for: '));

    fs.readFile('grades.txt', 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }

        const grades = data.split(" ").map(Number);
        const foundIndex = grades.indexOf(gradeToSearch);
        if (foundIndex !== -1) {
            console.log("Grade " + gradeToSearch + " found at index " + foundIndex);
        } else {
            console.log("Grade " + gradeToSearch + " not found in the list.");
        }
    });
}

main().catch((err) => {
    console.error(err);
}).finally(() => {
    readline.close();
});
