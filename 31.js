const Readline = require('node:readline');
const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = (question) => {
    return new Promise((resolve, reject) => readline.question(question, resolve));
}

const factorial=(n)=>{
    if(n==1){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}
const isPrime=(num)=>{
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

const multiplicationTable=(number)=> {
    console.log("Multiplication table for " + number + ":");
    for (let i = 1; i <= 10; i++) {
        console.log(number + " × " + i + " = " + (number * i));
    }
}


const main = async () => {
    let n = Number(await input("Write a number: "));

    console.log("1. Check if it's prime");
    console.log("2. Find its factorial");
    console.log("3. Print its multiplication table");

    const option = await input('Choose an operation (1-3): ');
    
    switch (option) {
        case "1":
            if (isPrime(n)) {
                console.log(n + " is prime");
            } else {
                console.log(n + " is not prime");
            }
            break;
        case "2":
            console.log("Factorial of " + n + " is: " + factorial(n));
            break;
        case "3":
            multiplicationTable(n);
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
