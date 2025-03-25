let n = Number(prompt("Nhập vào n số phần tử của mảng:"));

if (n < 0) {
    alert("Số lượng phần tử không được âm");
} else if (n === 0) {
    alert("Mảng không có phần tử");
} else {
    let array = [];
    let sum = 0;
    let hasNumber = false;

    for (let i = 0; i < n; i++) {
        let value = prompt(`Nhập vào phần tử thứ ${i + 1}:`);
        array.push(value);

        if (!isNaN(value) && value.trim() !== "") {
            sum += Number(value);
            hasNumber = true;
        }
    }

    if (hasNumber) {
        alert(`Tổng các phần tử là số: ${sum}`);
    } else {
        alert("Không có phần tử nào là số");
    }
}
