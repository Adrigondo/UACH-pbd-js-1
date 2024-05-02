const upperLimit=100;
let oddCounter=0;
for(let i=1; i<=upperLimit; i+=2){
    console.log(i);
    oddCounter++;
}
console.log(`There exists ${oddCounter} odd numbers between 0 and ${upperLimit}`);