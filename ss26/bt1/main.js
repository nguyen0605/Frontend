function filterNumbersGreaterThan10(arr){
    if(!Array.isArray(arr)){
        return "Dữ liệu không hợp lệ";
    }

    if(arr.length === 0){
        return "Mảng không có phần tử nào";
    }

    let result = arr.filter(num => Number.isInteger(num) && num >= 10);
    return result.length > 0? result : "Không có số nào lớn hơn hoặc bằng 10";
}

console.log(filterNumbersGreaterThan10([1, 22, 10, 9, 8]));
console.log(filterNumbersGreaterThan10([]));
console.log(filterNumbersGreaterThan10("abc"));