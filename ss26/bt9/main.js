function sumEvenOdd(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    if (arr.length === 0) {
        return "Mảng không có dữ liệu";
    }

    let totalEven = arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
    let totalOdd = arr.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);

    return `totalEven = ${totalEven}\ntotalOdd = ${totalOdd}`;
}

console.log(sumEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9,10,11])); 
console.log(sumEvenOdd([]));    
console.log(sumEvenOdd("abc")); 

