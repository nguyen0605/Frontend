let numbers = [2, 3, 2, 5, 3, 3, 2, 2, 5, 3]; 
let frequency = {}; 
let maxCount = 0;
let mostFrequentNum = null;

for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i]; 
    if (frequency[num] === undefined) {
        frequency[num] = 1; 
    } else {
        frequency[num]++; 
    }

    if (frequency[num] > maxCount || (frequency[num] === maxCount && num < mostFrequentNum)) {
        maxCount = frequency[num];
        mostFrequentNum = num;
    }
}
console.log(`Mảng hiện tại: ${numbers}`)
console.log(`Số xuất hiện nhiều nhất là ${mostFrequentNum}`);
