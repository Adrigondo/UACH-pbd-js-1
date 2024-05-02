const { rejects } = require('assert');
const fs = require('fs');

const Readline = require('node:readline');
const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = (question) => {
    return new Promise((resolve, reject) => readline.question(question, resolve));
}

const main = () => {
    return new Promise(async (resolve,reject)=>{
        let idToModify = await input('Enter the ID of the record to modify: ');
    
        fs.readFile('DATOS.DAT', 'utf8', async (err, data) => {
            if (err) throw err;
            let records = data.split('\n');
            let newData = '';
            let recordModified = false;
    
            for (let record of records) {
                let fields = record.split(',');
                if (fields[0] === idToModify) {
                    recordModified = true;
                    let inputName = await input(`Enter the new name for ID ${idToModify}: `);
                    let inputLastNames = await input(`Enter the new last names for ID ${idToModify}: `);
                    let inputAddress = await input(`Enter the new address for ID ${idToModify}: `);
                    let inputStatus = await input(`Enter the new status for ID ${idToModify}: `);
    
                    newData += `${idToModify},${inputName},${inputLastNames},${inputAddress},${inputStatus}\n`;
                } else {
                    newData += record + '\n';
                }
            }
    
            if (recordModified) {
                // Write updated data back to the file
                fs.writeFile('DATOS.DAT', newData, (err) => {
                    if (err) throw err;
                    console.log('Record modified in DATOS.DAT file');
                });
                resolve(true);
            } else {
                console.log('Record with the specified ID not found');
                resolve(false);
            }
        });
    })
}

main().catch((err) => {
    console.error(err);
}).finally(() => {
    readline.close();
});
