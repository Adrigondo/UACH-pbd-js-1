const rollDice=()=> {
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    return die1 + die2;
}

const countSumOfTen=()=> {
    let count = 0;
    for (let i = 0; i < 100; i++) {
        const sum = rollDice();
        if (sum === 10) {
            count++;
        }
    }
    return count;
}

const totalTries = 100;
const sumOfTenCount = countSumOfTen();

console.log("Total tries: " + totalTries);
console.log("Number of times the sum is 10: " + sumOfTenCount);
