let matrix = [];
let rows = 0, cols = 0;
let running = true;

while (running) {
    let choice = Number(prompt(`================ MENU ================\n\n`
        + `1. Nhập mảng 2 chiều\n`
        + `2. Hiển thị mảng 2 chiều\n`
        + `3. Tính tổng các phần tử trong mảng\n`
        + `4. Tính tổng đường chéo chính\n`
        + `5. Tính tổng đường chéo phụ\n`
        + `6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột\n`
        + `7. Thoát chương trình\n\n`
        + `====================================\nLựa chọn của bạn:`));

    switch (choice) {
        case 1:
            rows = Number(prompt("Nhập số hàng của mảng: "));
            cols = Number(prompt("Nhập số cột của mảng: "));
            matrix = [];
            for (let i = 0; i < rows; i++) {
                matrix[i] = [];
                for (let j = 0; j < cols; j++) {
                    matrix[i][j] = Number(prompt(`Nhập phần tử tại vị trí [${i}][${j}]:`));
                }
            }
            break;
        case 2:
            let output = matrix.map(row => row.join(" ")).join("\n");
            alert(`Mảng 2 chiều:\n${output}`);
            break;
        case 3:
            let totalSum = 0;
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    totalSum += matrix[i][j];
                }
            }
            alert(`Tổng các phần tử trong mảng: ${totalSum}`);
            break;
        case 4:
            if (rows !== cols) {
                alert("Mảng không phải vuông, không có đường chéo chính!");
                break;
            }
            let mainDiagonalSum = 0;
            for (let i = 0; i < rows; i++) {
                mainDiagonalSum += matrix[i][i];
            }
            alert(`Tổng đường chéo chính: ${mainDiagonalSum}`);
            break;
        case 5:
            if (rows !== cols) {
                alert("Mảng không phải vuông, không có đường chéo phụ!");
                break;
            }
            let secondaryDiagonalSum = 0;
            for (let i = 0; i < rows; i++) {
                secondaryDiagonalSum += matrix[i][cols - 1 - i];
            }
            alert(`Tổng đường chéo phụ: ${secondaryDiagonalSum}`);
            break;
        case 6:
            let type = prompt("Bạn muốn tính trung bình cộng theo hàng (h) hay cột (c)?");
            if (type === "h") {
                let rowIndex = Number(prompt("Nhập chỉ số hàng cần tính trung bình cộng:"));
                if (rowIndex >= 0 && rowIndex < rows) {
                    let sum = 0;
                    for (let j = 0; j < cols; j++) {
                        sum += matrix[rowIndex][j];
                    }
                    alert(`Trung bình cộng hàng ${rowIndex}: ${sum / cols}`);
                } else {
                    alert("Chỉ số hàng không hợp lệ!");
                }
            } else if (type === "c") {
                let colIndex = Number(prompt("Nhập chỉ số cột cần tính trung bình cộng:"));
                if (colIndex >= 0 && colIndex < cols) {
                    let sum = 0;
                    for (let i = 0; i < rows; i++) {
                        sum += matrix[i][colIndex];
                    }
                    alert(`Trung bình cộng cột ${colIndex}: ${sum / rows}`);
                } else {
                    alert("Chỉ số cột không hợp lệ!");
                }
            } else {
                alert("Lựa chọn không hợp lệ!");
            }
            break;
        case 7:
            alert("Thoát chương trình");
            running = false;
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại! (1-7)");
    }
}
