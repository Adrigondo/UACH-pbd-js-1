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
const main = async () => {
    let n = Number(await input("Write a number: "));
    return {
        n,
        factorialN: factorial(n)
    };
}
main().then(({n,factorialN}) => {
    console.log(`The factorial of ${n} is ${factorialN}`);
}).catch((err) => {
    console.error(err);
}).finally(() => {
    readline.close();
});
