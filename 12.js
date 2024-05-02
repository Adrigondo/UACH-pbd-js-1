const upperLimit=100;
let oddSum=0;
let evenSum=0;
for(let i=1; i<=upperLimit; i+=2){
    oddSum+=i;
}
for(let i=0; i<=upperLimit; i+=2){
    evenSum+=i;
}
console.log(`The sum of even numbers is ${evenSum} and the sum of od numbers is ${oddSum}`);