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
    let N=Number(await input('Enter the number of courses: '));
    let M=Number(await input('Enter the number of students: '));
    fs.writeFileSync('grades2.txt', '');
    for(let grade=0; grade<N; grade++){
        let gradesInput=await input(`Enter the grades of the ${M} students in the ${grade+1}° course: `);
        const grades = gradesInput.split(" ").map(Number);
    
        fs.appendFileSync('grades2.txt', `${gradesInput}\n`, (err) => {
            if (err) throw err;
        });
    }
}

main().catch((err) => {
    console.error(err);
}).finally(() => {
    readline.close();
});
