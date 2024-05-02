const Readline = require('node:readline');
const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = (question) => {
    return new Promise((resolve, reject) => readline.question(question, resolve));
}
const shellSortArray = (arr) => {
    let n = arr.length;

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {

        for (let i = gap; i < n; i += 1) {
            let temp = arr[i];
            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
                arr[j] = arr[j - gap];
            arr[j] = temp;
        }
    }
    return arr;
}
const shellSortMatrix = (matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const flatMatrix = matrix.reduce((acc, row) => acc.concat(row), []);
    const sortedFlatMatrix=shellSortArray(flatMatrix);
    const sortedMatrix = [];
    for (let i = 0; i < rows; i++) {
        sortedMatrix[i] = flatMatrix.slice(i * cols, (i + 1) * cols);
    }

    return sortedMatrix;
}

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const main = async () => {
    const N = Number(await input('Enter N: '));
    const M = Number(await input('Enter M: '));

    const matrix = new Array(M).fill().map(() => {
        return new Array(N).fill().map(() => {
            return getRandomNumber(1, 100);
        });
    });

    const sortedMatrix = shellSortMatrix(matrix);
    console.log(matrix);
    console.log(sortedMatrix);
}

main().catch((err) => {
    console.error(err);
}).finally(() => {
    readline.close();
});
