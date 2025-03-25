let numbers = [];

function nhapSoNguyen() {
    let count = parseInt(prompt("Nhập số lượng số nguyên:"));
    if (isNaN(count) || count <= 0) {
        alert("Số lượng không hợp lệ!");
    } else {
        numbers = [];
        for (let i = 0; i < count; i++) {
            let num = parseInt(prompt(`Nhập số nguyên thứ ${i + 1}:`));
            numbers.push(num);
        }
    }
}

function tinhTrungBinh() {
    if (numbers.length === 0) {
        alert("Danh sách số nguyên chưa được khởi tạo!");
        return;
    }
    let sum = numbers.reduce((a, b) => a + b, 0);
    let average = sum / numbers.length;
    alert(`Trung bình cộng các số: ${average.toFixed(2)}`);
}

function timSoChanLonNhat() {
    if (numbers.length === 0) {
        alert("Danh sách số nguyên chưa được khởi tạo!");
        return;
    }
    let maxEven = numbers.filter(num => num % 2 === 0).reduce((max, num) => (num > max ? num : max), -Infinity);
    alert(maxEven === -Infinity ? "Không có số chẵn trong danh sách!" : `Số chẵn lớn nhất: ${maxEven}`);
}

function timSoLeNhoNhat() {
    if (numbers.length === 0) {
        alert("Danh sách số nguyên chưa được khởi tạo!");
        return;
    }
    let minOdd = numbers.filter(num => num % 2 !== 0).reduce((min, num) => (num < min ? num : min), Infinity);
    alert(minOdd === Infinity ? "Không có số lẻ trong danh sách!" : `Số lẻ nhỏ nhất: ${minOdd}`);
}

function menu() {
    let running = true;
    while (running) {
        let choice = parseInt(prompt(
            "===== MENU XỬ LÝ SỐ NGUYÊN =====\n" +
            "1. Nhập danh sách số nguyên\n" +
            "2. Tính trung bình các số\n" +
            "3. Tìm số chẵn lớn nhất\n" +
            "4. Tìm số lẻ nhỏ nhất\n" +
            "5. Thoát\n" +
            "=================================\n" +
            "Nhập lựa chọn của bạn:"
        ));

        switch (choice) {
            case 1:
                nhapSoNguyen();
                break;
            case 2:
                tinhTrungBinh();
                break;
            case 3:
                timSoChanLonNhat();
                break;
            case 4:
                timSoLeNhoNhat();
                break;
            case 5:
                alert("Thoát chương trình.");
                running = false;
                break;
            default:
                alert("Lựa chọn không hợp lệ, vui lòng chọn lại!");
        }
    }
}

menu();
