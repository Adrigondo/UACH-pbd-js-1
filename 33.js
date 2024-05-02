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
    let gradesInput=await input('Enter the grades of the student in 10 subjects (separated by spaces): ');
    const grades = gradesInput.split(" ").map(Number);

    // Calculate average
    const totalSubjects = grades.length;
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    const average = sum / totalSubjects;

    console.log("Grades entered: " + grades.join(", "));
    console.log("Total subjects: " + totalSubjects);
    console.log("Average grade: " + average.toFixed(2));

    // Write grades to a file
    fs.writeFile('grades.txt', gradesInput, (err) => {
        if (err) throw err;
        console.log('Grades have been saved to grades.txt file.');
    });
}

main().catch((err) => {
    console.error(err);
}).finally(() => {
    readline.close();
});
