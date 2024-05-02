function flipCoin() {
    const randomNumber = Math.random();

    if (randomNumber < 0.5) {
        return "Heads";
    } else {
        return "Tails";
    }
}

console.log("The coin landed on:",flipCoin());