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
    let statusToSearch = await input('Enter the status to search for: ');

    fs.readFile('DATOS.DAT', 'utf8', (err, data) => {
        if (err) throw err;
        let records = data.split('\n');

        console.log('Records with status', statusToSearch + ':');

        for (let record of records) {
            let fields = record.split(',');
            if (fields[4] === statusToSearch) {
                console.log(record);
            }
        }
    });
}

main().catch((err) => {
    console.error(err);
}).finally(() => {
    readline.close();
});
