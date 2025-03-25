function findMaxAndPosition(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    if (arr.length === 0) {
        return "Mảng ko có dữ liệu";
    }

    let max = arr.reduce((a, b) => (a > b ? a : b)); 
    let position = arr.indexOf(max); 

    return `max = ${max}\nposition: ${position}`;
}

console.log(findMaxAndPosition([10, 9, 5, 11, 24, 5]));
console.log(findMaxAndPosition([]));
console.log(findMaxAndPosition("abc"));
