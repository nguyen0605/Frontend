function demSoNguyenDuong(arr) {
    if (!Array.isArray(arr)) {
        return "dữ liệu không hợp lệ";
    }

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i] > 0) {
            count++;
        }
    }

    return count > 0 ? count : "không có số nguyên dương trong mảng";
}

console.log(demSoNguyenDuong([4, 5.4, 6, -2]));  
console.log(demSoNguyenDuong([1, 2, 5, 7, -8, 6]));
console.log(demSoNguyenDuong([1.2, -3, -6]));    
