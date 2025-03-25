let array = [];
let size = 0, running = true;

while (running) {
    let choice = Number(prompt(`================ MENU ================\n\n`
        + `1. Nhập số phần tử cần nhập và giá trị các phần tử\n`
        + `2. In ra giá trị các phần tử đang quản lý\n`
        + `3. In ra giá trị các phần tử chẵn và tính tổng\n`
        + `4. In ra giá trị lớn nhất và nhỏ nhất trong mảng\n`
        + `5. In ra các phần tử là số nguyên tố trong mảng và tính tổng\n`
        + `6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó\n`
        + `7. Thêm một phần tử vào vị trí chỉ định\n`
        + `8. Thoát\n\n`
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
                alert("Mảng chưa được khởi tạo!");
            } else {
                alert(`Mảng hiện tại: ${array.join(", ")}`);
            }
            break;
        case 3:
            if (array.length === 0) {
                alert("Mảng chưa được khởi tạo!");
            } else {
                let evenNumbers = [];
                let sumEven = 0;
                for (let i = 0; i < array.length; i++) {
                    if (array[i] % 2 === 0) {
                        evenNumbers.push(array[i]);
                        sumEven += array[i];
                    }
                }
                alert(`Các số chẵn: ${evenNumbers.join(", ")}\nTổng các số chẵn: ${sumEven}`);
            }
            break;
        case 4:
            if (array.length === 0) {
                alert("Mảng chưa được khởi tạo!");
            } else {
                let maxNum = array[0];
                let minNum = array[0];
                for (let i = 1; i < array.length; i++) {
                    if (array[i] > maxNum) maxNum = array[i];
                    if (array[i] < minNum) minNum = array[i];
                }
                alert(`Số lớn nhất: ${maxNum}\nSố nhỏ nhất: ${minNum}`);
            }
            break;
        case 5:
            if (array.length === 0) {
                alert("Mảng chưa được khởi tạo!");
            } else {
                let primeNumbers = [];
                let sumPrime = 0;
                for (let i = 0; i < array.length; i++) {
                    let n = array[i];
                    let isPrime = true;
                    if (n < 2) isPrime = false;
                    else {
                        for (let j = 2; j <= Math.sqrt(n); j++) {
                            if (n % j === 0) {
                                isPrime = false;
                                break;
                            }
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
                alert("Mảng chưa được khởi tạo!");
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
            alert("Thoát chương trình");
            running = false;
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại! (1-8)");
    }
}