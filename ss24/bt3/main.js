let array = [];
let running = true;

while (running) {
    let choice = Number(prompt(`================ MENU ================\n\n`
        + `1. Nhập mảng số nguyên\n`
        + `2. Hiển thị mảng\n`
        + `3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó\n`
        + `4. Tính tổng và trung bình cộng của các số dương trong mảng\n`
        + `5. Đảo ngược mảng\n`
        + `6. Kiểm tra mảng có đối xứng không\n`
        + `7. Thoát chương trình\n\n`
        + `====================================\nLựa chọn của bạn:`));
    
    switch (choice) {
        case 1:
            let size = Number(prompt("Nhập số lượng phần tử của mảng:"));
            array = [];
            for (let i = 0; i < size; i++) {
                array.push(Number(prompt(`Nhập phần tử thứ ${i + 1}:`)));
            }
            break;
        case 2:
            alert(`Mảng hiện tại: ${array.join(", ")}`);
            break;
        case 3:
            if (array.length === 0) {
                alert("Mảng chưa được khởi tạo!");
            } else {
                let max = Math.max(...array);
                let indices = [];
                for (let i = 0; i < array.length; i++) {
                    if (array[i] === max) indices.push(i);
                }
                alert(`Giá trị lớn nhất: ${max}\nVị trí: ${indices.join(", ")}`);
            }
            break;
        case 4:
            let sum = 0, count = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i] > 0) {
                    sum += array[i];
                    count++;
                }
            }
            let avg = count > 0 ? sum / count : 0;
            alert(`Tổng số dương: ${sum}\nTrung bình cộng: ${avg.toFixed(2)}`);
            break;
        case 5:
            if (array.length === 0) {
                alert("Mảng chưa được khởi tạo!");
            } else {
                array.reverse();
                alert(`Mảng sau khi đảo ngược: ${array.join(", ")}`);
            }
            break;
        case 6:
            let isSymmetric = true;
            for (let i = 0; i < Math.floor(array.length / 2); i++) {
                if (array[i] !== array[array.length - 1 - i]) {
                    isSymmetric = false;
                    break;
                }
            }
            alert(isSymmetric ? "Mảng đối xứng!" : "Mảng không đối xứng!");
            break;
        case 7:
            alert("Thoát chương trình");
            running = false;
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại! (1-7)");
    }
}
