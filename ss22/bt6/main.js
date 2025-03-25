let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7]; 

let inputNumber = Number(prompt("Nhập một số nguyên cần tìm:"));
let count = 0;

for (let num of numbers) {
    if (num === inputNumber) {
        count++;
    }
}

if (count > 0) {
    document.writeln(`Số ${inputNumber} xuất hiện ${count} lần trong mảng.`);
} else {
    document.writeln(`Số ${inputNumber} không tồn tại trong mảng.`);
}
