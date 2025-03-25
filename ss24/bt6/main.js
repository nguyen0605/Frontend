let str = "";
let choice;
do {
    choice = parseInt(prompt(
        "1. Nhập chuỗi" +
        "\n2. Hiển thị chuỗi" +
        "\n3. Tính độ dài của chuỗi" +
        "\n4. Đếm số lần xuất hiện của một ký tự" +
        "\n5. Kiểm tra chuỗi có phải là chuỗi đối xứng không" +
        "\n6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ" +
        "\n7. Thoát chương trình"
    ));

    switch (choice) {
        case 1:
            str = prompt("Nhập vào chuỗi:");
            break;
        case 2:
            if (!str) {
                alert("Vui lòng nhập chuỗi trước!");
            } else {
                alert("Chuỗi hiện tại: " + str);
            }
            break;
        case 3:
            if (!str) {
                alert("Vui lòng nhập chuỗi trước!");
            } else {
                alert("Độ dài của chuỗi: " + str.length);
            }
            break;
        case 4:
            if (!str) {
                alert("Vui lòng nhập chuỗi trước!");
            } else {
                let charToFind = prompt("Nhập ký tự cần tìm:");
                let count = str.split(charToFind).length - 1;//split() tách chuỗi thành từng phần tử dựa theo giá trị được truyền vào
                alert(`Ký tự '${charToFind}' xuất hiện ${count} lần trong chuỗi.`);
            }
            break;
        case 5:
            if (!str) {
                alert("Vui lòng nhập chuỗi trước!");
            } else {
                let reversed = str.split('').reverse().join('');
                alert(str === reversed ? "Chuỗi là chuỗi đối xứng." : "Chuỗi không phải là chuỗi đối xứng.");
            }
            break;
        case 6:
            if (!str) {
                alert("Vui lòng nhập chuỗi trước!");
            } else {
                let capitalized = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                //map() tạo ra mảng mới sau khi thay đổi phần tử trong mảng hay chuỗi gốc
                alert("Chuỗi sau khi chuyển đổi: " + capitalized);
            }
            break;
        case 7:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng chọn lại!");
    }
} while (choice !== 7);
