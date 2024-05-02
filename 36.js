const getRandomNumber=(min, max)=>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const matrix = new Array(4).fill().map(() => {
    return new Array(5).fill().map(() => {
        return getRandomNumber(1, 100);
    });
});

const transposedMatrix = new Array(5).fill().map((value,i) => {
    return new Array(4).fill().map((value,j) => matrix[j][i]);
});

console.log(matrix)
console.log(transposedMatrix)
