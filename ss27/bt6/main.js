function isArithmeticSequence(arr) {
    if (!Array.isArray(arr) || arr.some(item => typeof item !== "number")) {
        return "dữ liệu không hợp lệ";
    }

    if (arr.length < 2) return true;

    let diff = arr[1] - arr[0];

    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== diff) {
            return false;
        }
    }

    return true;
}

console.log(isArithmeticSequence([2, 4, 6, 8]));       // Output: TRUE
console.log(isArithmeticSequence([3, 6, 9, 12, 14]));  // Output: FALSE
console.log(isArithmeticSequence("abc"));              // Output: "dữ liệu không hợp lệ"
