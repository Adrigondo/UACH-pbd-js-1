const Readline = require('node:readline');
const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = (question) => {
    return new Promise((resolve, reject) => readline.question(question, resolve));
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
const main = async () => {
    let number = 0;
    number = Number(await input("Write a number:  "));
    
    if (isNaN(number)) {
        throw "The value is not a number";
    }
    
    return isPrime(number);
}
main().then((numberIsPrime) => {
    if(numberIsPrime){
        console.log("The number is prime");
    }else{
        console.log("The number isn't prime");
    }
}).catch((err) => {
    console.error(err);
}).finally(() => {
    readline.close();
});
