const fs = require('fs')

const inputData = fs.readFileSync('./Day8Input.txt', 'utf-8'); 
const parseOnDelimiters = inputData.split(/[\n|]/)
const len = parseOnDelimiters.length

function partTwo(inputArr){
  //get the input and output arrays
  const wireInput = [];
  const wireOutput = [];
  for (let i = 0; i<len; i++){
    if (i % 2 === 1){
      wireOutput.push(inputArr[i].trim())
    } else if (i % 2 === 0) {
    wireInput.push(inputArr[i].trim())
    }
  } 
  //count characters in input, put them in 'counts' dictionary
  const countChar = (str) => {
    const counts = {};
    strNoSpace = str.replace(/ /g, "");
    for (const s of strNoSpace) {
      if (counts[s]) {
        counts[s]++
      } else {
        counts[s] = 1
      }
    } 
    return counts;
  }
  //each number is a unique sum, map sums to their corresponding numbers
  const addedNumbers = {
    '42': '0',
    '17': '1',
    '34': '2',
    '39': '3',
    '30': '4', 
    '37': '5',
    '41': '6',
    '25': '7',
    '49': '8',
    '45': '9'
  }

  const finalArr = [];
  for (let i = 0; i<wireOutput.length; i++){
    let strArr = [];
    county = countChar(wireInput[i])
    const newWireOutput = wireOutput[i].split(' ');
    for (let j=0; j<4; j++){
    strArr.push(String([...newWireOutput[j]].map(key => county[key]).reduce((acc,val) => acc + val,0)));
    }
    finalArr.push(strArr.map(key => addedNumbers[key]).join(''));
  }
  console.log(finalArr);
  console.log(finalArr.map(str => parseInt(str, 10)).reduce((acc,val)=>acc+val,0))
}

const a = performance.now();
partTwo(parseOnDelimiters)
const b = performance.now();

console.log('It took ' + (b - a) + ' ms.');