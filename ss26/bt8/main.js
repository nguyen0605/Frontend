function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function filterOddPrimes(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    if (arr.length === 0) {
        return "Mảng không có dữ liệu";
    }

    return arr.filter(num => isPrime(num) && num % 2 !== 0);
}

console.log(filterOddPrimes([10, 2, 3, 5, 7, 9,11,16,18,20,22])); 
console.log(filterOddPrimes([]));                  
console.log(filterOddPrimes("abc"));              
