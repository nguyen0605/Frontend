function filterStringsGreaterThan5Char(arr){
    if(!Array.isArray(arr)){
        return "Dữ liệu không hợp lệ";
    }

    if(arr.length === 0){
        return "Mảng không có phần tử nào";
    }

    let result = arr.filter(element => element.length>5);
    return result.length > 0? result : "Không có chuỗi nào lớn hơn 5 ký tự";    
}

console.log(filterStringsGreaterThan5Char(["apple", "banana", "cat", "elephant", "dog"]));
console.log(filterStringsGreaterThan5Char([]));
console.log(filterStringsGreaterThan5Char("abc"));