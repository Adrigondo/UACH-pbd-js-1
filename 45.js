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
    const id = await input('Enter the ID to query: ');

    fs.readFile('DATOS.DAT', 'utf8', (err, data) => {
        if (err) throw err;
        const records = data.split('\n');
        for (const record of records) {
            const fields = record.split(',');
            if (fields[0] === id) {
                console.log('Record found:');
                console.log(record);
                return;
            }
        }
        console.log('Record not found for the specified ID.');
    });
}

main().catch((err) => {
    console.error(err);
}).finally(() => {
    readline.close();
});
