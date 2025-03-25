let matrix = [];
let running = true;

while (running) {
    let choice = Number(prompt(`===== MENU =====\n\n`
        + `1. Nhập mảng 2 chiều\n`
        + `2. Hiển thị mảng 2 chiều\n`
        + `3. Tính tổng các phần tử trong mảng\n`
        + `4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó\n`
        + `5. Tính trung bình cộng các phần tử của một hàng cụ thể\n`
        + `6. Đảo ngược các hàng trong mảng\n`
        + `7. Thoát chương trình\n\n`
        + `====================\nLựa chọn của bạn:`));
    
    switch (choice) {
        case 1:
            let rows = Number(prompt("Nhập số hàng của mảng: "));
            let cols = Number(prompt("Nhập số cột của mảng: "));
            matrix = [];
            for (let i = 0; i < rows; i++) {
                matrix[i] = [];
                for (let j = 0; j < cols; j++) {
                    matrix[i][j] = Number(prompt(`Nhập phần tử tại [${i}][${j}]:`));
                }
            }
            break;
        case 2:
            let output = matrix.map(row => row.join(" ")).join("\n");
            alert(`Mảng hiện tại:\n${output}`);
            break;
        case 3:
            let totalSum = 0;
            for (let row of matrix) {
                for (let num of row) {
                    totalSum += num;
                }
            }
            alert(`Tổng các phần tử trong mảng: ${totalSum}`);
            break;
        case 4:
            let maxVal = matrix[0][0], maxPos = "[0][0]";
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] > maxVal) {
                        maxVal = matrix[i][j];
                        maxPos = `[${i}][${j}]`;
                    }
                }
            }
            alert(`Phần tử lớn nhất là ${maxVal} tại vị trí ${maxPos}`);
            break;
        case 5:
            let rowIndex = Number(prompt("Nhập số thứ tự hàng cần tính trung bình cộng: "));
            let sum=0;
            if (rowIndex >= 0 && rowIndex < matrix.length) {
                for(let i=0;i<matrix[rowIndex].length;i++){
                    sum+=matrix[rowIndex][i];
                }
                let avg = sum / matrix[rowIndex].length;
                alert(`Trung bình cộng hàng ${rowIndex}: ${avg}`);
            } else {
                alert("Hàng không hợp lệ!");
            }
            break;
        case 6:
            matrix = matrix.reverse();
            alert("Đã đảo ngược các hàng trong mảng!");
            break;
        case 7:
            alert("Thoát chương trình");
            running = false;
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại!");
    }
}
