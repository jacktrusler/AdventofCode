const fs = require('fs');
const inputText = fs.readFileSync('./Day7Input.txt', 'utf-8');
const crabPositions = inputText.split(',').map(num=>parseInt(num))

//Part 1
const median = crabPositions.sort((a,b) => {return a-b})[499]

const fuelUsed = crabPositions.reduce((acc, val) => acc + (Math.abs(median - val)),0);

//Part 2

function averageGet(arr){
  const len = arr.length;
    let sum = 0;
    for (let i = 0; i<len; i++){
      sum += arr[i];
    }
    return sum/len;
}

const average = Math.floor(averageGet(crabPositions))

const fuelCost = (pos) => {
  const n = Math.abs(pos - average)
  const stepwiseAddition = ((n+1))/2
  return n * stepwiseAddition; 
}

function actualFuelUsed(arr) {
  const len = arr.length;
  let sum = 0;
  for (let i = 0; i<len; i++){
    sum = sum + fuelCost(arr[i]);
  }
  return sum;
}

console.log(actualFuelUsed(crabPositions));