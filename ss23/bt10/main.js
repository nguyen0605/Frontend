let array = [];
let size = 0, running = true;

while (running) {
    let choice = Number(prompt(`================ MENU ================\n\n`
        + `1. Nhập số phần tử cần nhập và giá trị các phần tử\n`
        + `2. In ra giá trị các phần tử đang quản lý\n`
        + `3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần\n`
        + `4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng\n`
        + `5. In ra số nguyên tố trong mảng và tính tổng\n`
        + `6. Nhập vào một số và đếm số lần xuất hiện trong mảng\n`
        + `7. Thêm một phần tử vào vị trí chỉ định\n`
        + `8. Xóa một phần tử theo giá trị\n`
        + `9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần\n`
        + `0. Thoát\n\n`
        + `====================================\nLựa chọn của bạn:`));
    
    switch (choice) {
        case 1:
            size = Number(prompt("Nhập số lượng phần tử của mảng:"));
            array = [];
            for (let i = 0; i < size; i++) {
                array.push(Number(prompt(`Nhập phần tử thứ ${i + 1}:`)));
            }
            break;
        case 2:
            if (array.length === 0) {
                alert("Mảng chưa có phần tử nào!");
            } else {
                alert(`Mảng hiện tại: ${array.join(", ")}`);
            }
            break;
        case 3:
            if (array.length === 0) {
                alert("Mảng chưa có phần tử nào!");
            } else {
                let evenNumbers = [];
                let sumEven = 0;
                for (let i = 0; i < array.length; i++) {
                    if (array[i] % 2 === 0) {
                        evenNumbers.push(array[i]);
                        sumEven += array[i];
                    }
                }
                alert(`Các số chẵn: ${evenNumbers.sort((a, b) => b - a).join(", ")}\nTổng các số chẵn: ${sumEven}`);
            }
            break;
        case 4:
            if (array.length === 0) {
                alert("Mảng chưa được khởi tạo!");
            } else {
                let maxNum = array[0], maxIdx;
                let minNum = array[0], minIdx;
                for (let i = 1; i < array.length; i++) {
                    if (array[i] > maxNum){
                        maxNum = array[i];
                        maxIdx=i;
                    }
                    if (array[i] < minNum){
                        minNum = array[i];
                        minIdx=i;
                    }
                }
                alert(`Số lớn nhất: ${maxNum} - Vị trí ${maxIdx}\nSố nhỏ nhất: ${minNum} - Vị trí ${minIdx}`);
            }
            break;
        case 5:
            if (array.length === 0) {
                alert("Mảng chưa có phần tử nào!");
            } else {
                let primeNumbers = [];
                let sumPrime = 0;
                for (let i = 0; i < array.length; i++) {
                    let n = array[i];
                    let isPrime = n > 1;
                    for (let j = 2; j <= Math.sqrt(n); j++) {
                        if (n % j === 0) {
                            isPrime = false;
                            break;
                        }
                    }
                    if (isPrime) {
                        primeNumbers.push(n);
                        sumPrime += n;
                    }
                }
                alert(`Các số nguyên tố: ${primeNumbers.join(", ")}\nTổng các số nguyên tố: ${sumPrime}`);
            }
            break;
        case 6:
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
        case 7:
            if (array.length === 0) {
                alert("Mảng chưa có phần tử nào!");
            } else {
                let pos = Number(prompt("Nhập vị trí cần thêm:"));
                if (pos >= 0 && pos <= array.length) {
                    let newElement = Number(prompt("Nhập phần tử muốn thêm:"));
                    array.splice(pos, 0, newElement);
                } else {
                    alert("Vị trí không hợp lệ!");
                }
            }
            break;
        case 8:
            if (array.length === 0) {
                alert("Mảng chưa có phần tử nào!");
            } else {
                let valueToRemove = Number(prompt("Nhập giá trị cần xóa:"));
                let found = false;
                for (let i = 0; i < array.length; i++) {
                    if (array[i] === valueToRemove) {
                        array.splice(i, 1);
                        found = true;
                        break;
                    }
                }
                if (found) {
                    alert(`Đã xóa giá trị ${valueToRemove} khỏi mảng.`);
                } else {
                    alert("Giá trị không tồn tại trong mảng.");
                }
            }
            break;
        case 9:
            if (array.length === 0) {
                alert("Mảng chưa có phần tử nào!");
            } else {
                let order = prompt("Nhập 'tăng' để sắp xếp tăng dần, 'giảm' để sắp xếp giảm dần:").toLowerCase();
                if (order === "tăng") {
                    array.sort((a, b) => a - b);
                } else if (order === "giảm") {
                    array.sort((a, b) => b - a);
                } else {
                    alert("Lựa chọn không hợp lệ!");
                }
            }
            break;
        case 0:
            alert("Thoát chương trình");
            running = false;
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại! (0-9)");
    }
}