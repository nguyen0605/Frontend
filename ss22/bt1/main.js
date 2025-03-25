let numberArray =[];

numberArray.push(1);
numberArray[numberArray.length] = 2;
numberArray.unshift(5);
numberArray.splice(1,0,3);
console.log(numberArray);