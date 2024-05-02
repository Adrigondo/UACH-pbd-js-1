const getRandomNumber=(min, max)=>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const matrix = new Array(4).fill().map(() => {
    return new Array(5).fill().map(() => {
        return getRandomNumber(1, 100);
    });
});
console.log(matrix)
