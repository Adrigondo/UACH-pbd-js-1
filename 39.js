const rows = 4;
const columns = 5;
const pages = 3;

let number = 1;

console.log('----------------------------------');
for (let page = 1; page <= pages; page++) {

    for (let row = 1; row <= rows; row++) {
        let rowStr = '';

        for (let column = 1; column <= columns; column++) {
            const num = (page - 1) * rows * columns + (row - 1) * columns + column;
            process.stdout.write(`${num}\t`);
        }

        process.stdout.write(`\n`);
    }

    console.log('----------------------------------');
}
