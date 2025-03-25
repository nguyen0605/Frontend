let array = [];
let running = true;

while (running) {
    let choice = Number(prompt(`================ MENU ================\n\n`
        + `1. Nhập mảng\n`
        + `2. Hiển thị mảng\n`
        + `3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng\n`
        + `4. Tính tổng các phần tử trong mảng\n`
        + `5. Tìm số lần xuất hiện của một phần tử trong mảng\n`
        + `6. Sắp xếp mảng tăng dần\n`
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
                let maxNum = array[0], minNum = array[0];
                for (let i = 1; i < array.length; i++) {
                    if (array[i] > maxNum) maxNum = array[i];
                    if (array[i] < minNum) minNum = array[i];
                }
                alert(`Số lớn nhất: ${maxNum}\nSố nhỏ nhất: ${minNum}`);
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
                alert(`Tổng các phần tử: ${sum}`);
            }
            break;
        case 5:
            if (array.length === 0) {
                alert("Mảng chưa được khởi tạo!");
            } else {
                let searchNumber = Number(prompt("Nhập số cần tìm:"));
                let count = 0;
                for (let i = 0; i < array.length; i++) {
                    if (array[i] === searchNumber) count++;
                }
                alert(`Số ${searchNumber} xuất hiện ${count} lần trong mảng.`);
            }
            break;
        case 6:
            if (array.length === 0) {
                alert("Mảng chưa được khởi tạo!");
            } else {
                for (let i = 0; i < array.length - 1; i++) {
                    for (let j = i + 1; j < array.length; j++) {
                        if (array[i] > array[j]) {
                            let temp = array[i];
                            array[i] = array[j];
                            array[j] = temp;
                        }
                    }
                }
                alert(`Mảng sau khi sắp xếp tăng dần: ${array.join(", ")}`);
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
