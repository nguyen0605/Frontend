let str = "";
let choice;
do {
    choice = parseInt(prompt(
        "1. Nhập chuỗi" +
        "\n2. Hiển thị chuỗi" +
        "\n3. Loại bỏ khoảng trắng ở đầu và cuối chuỗi" +
        "\n4. Đảo ngược chuỗi ký tự" +
        "\n5. Đếm số lượng từ trong chuỗi" +
        "\n6. Tìm kiếm và thay thế ký tự" +
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
                str = str.trim();
                alert("Chuỗi sau khi loại bỏ khoảng trắng: " + str);
            }
            break;
        case 4:
            if (!str) {
                alert("Vui lòng nhập chuỗi trước!");
            } else {
                let reversed = str.split('').reverse().join('');
                alert("Chuỗi sau khi đảo ngược: " + reversed);
            }
            break;
        case 5:
            if (!str) {
                alert("Vui lòng nhập chuỗi trước!");
            } else {
                let wordCount = str.trim().split(/\s+/).length;
                alert("Số lượng từ trong chuỗi: " + wordCount);
            }
            break;
        case 6:
            if (!str) {
                alert("Vui lòng nhập chuỗi trước!");
            } else {
                let charToFind = prompt("Nhập ký tự cần tìm:");
                if (!charToFind) {
                    alert("Bạn chưa nhập ký tự cần tìm!");
                    break;
                }
                let replacementChar = prompt("Nhập ký tự thay thế:");
                str = str.split(charToFind).join(replacementChar);
                alert("Chuỗi sau khi thay thế: " + str);
            }
            break;
        case 7:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng chọn lại!");
    }
} while (choice !== 7);
