let array = [];
let running = true;

while (running) {
    let choice = Number(prompt(`================ MENU ================\n\n`
        + `1. Nhập mảng số nguyên\n`
        + `2. Hiển thị mảng\n`
        + `3. Tìm các phần tử chẵn và lẻ\n`
        + `4. Tính trung bình cộng của mảng\n`
        + `5. Xóa phần tử tại vị trí chỉ định\n`
        + `6. Tìm phần tử lớn thứ hai trong mảng\n`
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
            if (array.length === 0) {
                alert("Mảng chưa được khởi tạo!");
            } else {
                alert(`Mảng hiện tại: ${array.join(", ")}`);
            }
            break;
        case 3:
            if (array.length === 0) {
                alert("Mảng chưa được khởi tạo!");
            } else {
                let evenNumbers = [], oddNumbers = [];
                for (let i = 0; i < array.length; i++) {
                    if (array[i] % 2 === 0) evenNumbers.push(array[i]);
                    else oddNumbers.push(array[i]);
                }
                alert(`Các số chẵn: ${evenNumbers.join(", ")}\nCác số lẻ: ${oddNumbers.join(", ")}`);
            }
            break;
        case 4:
            if (array.length === 0) {
                alert("Mảng chưa được khởi tạo!");
            } else {
                let sum = 0;
                for (let i = 0; i < array.length; i++) {
                    sum += array[i];
                }
                let avg = sum / array.length;
                alert(`Trung bình cộng của mảng: ${avg}`);
            }
            break;
        case 5:
            if (array.length === 0) {
                alert("Mảng chưa được khởi tạo!");
            } else {
                let pos = Number(prompt("Nhập vị trí cần xóa:"));
                if (pos >= 0 && pos < array.length) {
                    array.splice(pos, 1);
                } else {
                    alert("Vị trí không hợp lệ!");
                }
            }
            break;
        case 6:
            if (array.length < 2) {
                alert("Mảng cần ít nhất 2 phần tử để tìm phần tử lớn thứ hai!");
            } else {
                let max = Math.max(...array);
                let secondMax = -Infinity;
                for (let i = 0; i < array.length; i++) {
                    if (array[i] < max && array[i] > secondMax) {
                        secondMax = array[i];
                    }
                }
                alert(`Phần tử lớn thứ hai trong mảng: ${secondMax}`);
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
