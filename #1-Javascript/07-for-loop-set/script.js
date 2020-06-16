// formula ==> for(init; condition; expression){}

// 1. Print All numbers between -10 and 19

for(let num = -10; num <= 19; num++){
    console.log(num);
}

console.log("Success Print -10 and 19");

// 2. Print all even numbers between 10 and 40

for(let evenNum = 10; evenNum <= 40; evenNum += 2){
    console.log(evenNum);
}
console.log("Success Print all even number 10 and 40");

// 3. Print all odd numbers between 300 and 399
for(let oddNum = 300; oddNum <= 333; oddNum++){
    if(oddNum % 2 !== 0){
        console.log(oddNum);
    }
}
console.log("Success Print all even number 10 and 40");

// 4. Divisible by 5 and 3 between 5 and 50
for(let devFT = 5; devFT <= 50; devFT++){
    if(devFT % 5  === 0 && devFT % 3 === 0){
        console.log(devFT);
    }
}
console.log("Success Print all even number 10 and 40");