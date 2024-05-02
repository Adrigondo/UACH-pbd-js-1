const Readline = require('node:readline');
const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = (question) => {
    return new Promise((resolve, reject) => readline.question(question, resolve));
}

const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero!";
    }
    return a / b;
}

const main = async () => {
    let a = 0;
    let b = 0;
    a = Number(await input('Enter the first number: '));
    b = Number(await input('Enter the second number: '));

    if (isNaN(a) || isNaN(b)) {
        throw "The value is not a number";
    } else if (b < a) {
        throw "The upper limist must be greater than the lower limit";
    }

    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");

    const option = await input('Choose an operation (1-4): ');
    switch (option) {
        case '1':
            console.log("Result of addition:", add(a, b));
            break;
        case '2':
            console.log("Result of subtraction:", subtract(a, b));
            break;
        case '3':
            console.log("Result of multiplication:", multiply(a, b));
            break;
        case '4':
            console.log("Result of division:", divide(a, b));
            break;
        default:
            console.log("Invalid choice!");
    }
}

main().catch((err) => {
    console.error(err);
}).finally(() => {
    readline.close();
});
