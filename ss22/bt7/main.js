let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7]; 
console.log(`Mảng trước khi sắp xếp: ${numbers}`)

for(let i=0;i<numbers.length-1;i++){
    for(let j=0;j<numbers.length-i-1;j++){
        if(numbers[j]>numbers[j+1]){
            let temp=numbers[j];
            numbers[j]=numbers[j+1];
            numbers[j+1]=temp;
        }
    }
}

console.log(`Mảng sau khi sắp xếp: ${numbers}`)