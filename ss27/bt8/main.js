function largestNumberFromDigits(num) {
    if (typeof num !== "number" || !Number.isInteger(num) || num < 0) {
        return "dữ liệu không hợp lệ";
    }

    return parseInt(num.toString().split('').sort((a, b) => b - a).join(''));
}

console.log(largestNumberFromDigits(2941)); 
console.log(largestNumberFromDigits(3875));
console.log(largestNumberFromDigits("1h8t")); 
