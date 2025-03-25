function findMissingNumber(arr) {
    if (!Array.isArray(arr) || arr.some(item => typeof item !== "number")) {
        return "dữ liệu không hợp lệ";
    }

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] !== arr[i] + 1) {
            return arr[i] + 1;
        }
    }

    return "Không thiếu số nào"; 
}

console.log(findMissingNumber([1, 2, 3, 5]));  
console.log(findMissingNumber([1, 2, 4, 5])); 
console.log(findMissingNumber("abc"));         
