function locSoChan(arr) {
    if (!Array.isArray(arr)) {
        return "dữ liệu không hợp lệ";
    }

    let soChan = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            soChan.push(arr[i]);
        }
    }

    return soChan.length > 0 ? soChan.join(", ") : "mảng không chứa số chẵn";
}

console.log(locSoChan([11, 4, 65, 6]));  
console.log(locSoChan([1, 3, 5, 17]));   
console.log(locSoChan("text"));          
