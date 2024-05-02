const Readline = require('node:readline');
const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = (question) => {
    return new Promise((resolve, reject) => readline.question(question, resolve));
}
const intToRoman=(num)=>{
    const romanNumerals = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MM", "MMM"]
    ];

    let roman = "";
    let digit = 0;
    while (num > 0) {
        roman = romanNumerals[digit][num % 10] + roman;
        num = Math.floor(num / 10);
        digit++;
    }
    return roman;
}

const main = async () => {
    let number = 0;
    number = Number(await input("Write a number:  "));
    
    if (isNaN(number)) {
        throw "The value is not a number";
    }
    const romanNumber= intToRoman(number);
    
    console.log(romanNumber);
}
main().catch((err) => {
    console.error(err);
}).finally(() => {
    readline.close();
});
