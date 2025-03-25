function squareAndFilterEven(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    if (arr.length === 0) {
        return "Mảng không có dữ liệu";
    }

    return arr.map(num => num * num).filter(num => num % 2 === 0);
}

console.log(squareAndFilterEven([2, 5, 10]));  
console.log(squareAndFilterEven([]));          
console.log(squareAndFilterEven("abc"));      
