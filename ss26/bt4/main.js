function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function filterPrimeNumbers(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    if (arr.length === 0) {
        return "Mảng không có phần tử nào";
    }

    let result = arr.filter(num => Number.isInteger(num) && isPrime(num));

    return result.length > 0 ? result : "Không có số nguyên tố nào";
}

console.log(filterPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log(filterPrimeNumbers([]));

console.log(filterPrimeNumbers("abc"));

