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
    let idToDelete = await input('Enter the ID of the record to delete: ');

    fs.readFile('DATOS.DAT', 'utf8', (err, data) => {
        if (err) throw err;
        let records = data.split('\n');
        let newData = '';
        let recordDeleted = false;

        for (let record of records) {
            let fields = record.split(',');
            if (fields[0] === idToDelete) {
                recordDeleted = true;
                continue; // Skip this record
            }
            if(record!=""){
                newData += record + '\n';
            }
        }

        if (recordDeleted) {
            // Write updated data back to the file
            fs.writeFile('DATOS.DAT', newData, (err) => {
                if (err) throw err;
                console.log('Record deleted from DATOS.DAT file');
            });
        } else {
            console.log('Record with the specified ID not found');
        }
    });

}

main().catch((err) => {
    console.error(err);
}).finally(() => {
    readline.close();
});
