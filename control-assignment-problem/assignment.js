const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if(randomNumber > 0.7){
    alert('Number > 0.7');
}

let numberArray = [1,2,3,4,5,6,7,8,9,10];

for (const num of numberArray) {
        console.log(num);
    }

for(let i=numberArray.length - 1; i >= 0; i--){
    console.log(numberArray[i]);
}

const randomNumber2 = Math.random();

if(randomNumber > 0.7 && randomNumber2 > 0.7 || randomNumber < 0.2 || randomNumber2 < 0.2){
    alert('Both random numbers > 0.7');
}