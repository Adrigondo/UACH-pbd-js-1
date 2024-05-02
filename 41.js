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
    let inputId = await input('Enter the id ');
    let inputName = await input('Enter the name ');
    let inputLastNames = await input('Enter the last names ');
    let inputAddres = await input('Enter the address ');
    let inputStatus = await input('Enter the status ');

    let save = `${inputId},${inputName},${inputLastNames},${inputAddres},${inputStatus}\n`
    // Write grades to a file
    fs.appendFile('DATOS.DAT', save, (err) => {
        if (err) throw err;
        console.log('Record saved into DATOS.DAT file');
    });
}

main().catch((err) => {
    console.error(err);
}).finally(() => {
    readline.close();
});
