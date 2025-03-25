let arr = ['c', '2', 'd', '3']; // Mảng đầu vào
let hasDigit = false;

for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i]) && arr[i] !== ' ') {
        console.log(arr[i]);
        hasDigit = true;
    }
}

if (!hasDigit) {
    console.log("Không có ký tự số");
}
