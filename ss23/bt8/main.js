let n = Number(prompt("Nhập vào số lượng phần tử của mảng:"));

if (n < 0 || isNaN(n)) {
    alert("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
    alert("Không phải dãy số fibonacci");
} else {
    let array = [];

    for (let i = 0; i < n; i++) {
        array[i] = Number(prompt(`Nhập phần tử thứ ${i + 1}:`));
    }

    let isFibonacci = true; 
    if (n < 3) {
        isFibonacci = false; 
    } else {
        for (let i = 2; i < n; i++) {
            if (array[i] !== array[i - 1] + array[i - 2]) {
                isFibonacci = false;
                break; 
            }
        }
    }

    if (isFibonacci) {
        alert("Là dãy số fibonacci");
    } else {
        alert("Không phải dãy số fibonacci");
    }
}
