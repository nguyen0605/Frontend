let str = "";
let choice;
do {
    choice = parseInt(prompt(
        "1. Nhập chuỗi ký tự" +
        "\n2. Hiển thị chuỗi ký tự" +
        "\n3. Đếm số lượng chữ cái và số trong chuỗi" +
        "\n4. Đổi chữ hoa thành chữ thường và ngược lại" +
        "\n5. Trộn chuỗi gốc với chuỗi khác" +
        "\n6. Sắp xếp từ theo độ dài" +
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
                let letters = 0, digits = 0;
                for (let i = 0; i < str.length; i++) {
                    if (/[a-zA-Z]/.test(str[i])) {
                        letters++;
                    } else if (/[0-9]/.test(str[i])) {
                        digits++;
                    }
                }
                alert(`Số lượng chữ cái: ${letters}, số lượng chữ số: ${digits}`);
            }
            break;
        case 4:
            if (!str) {
                alert("Vui lòng nhập chuỗi trước!");
            } else {
                let swapped = "";
                for (let i = 0; i < str.length; i++) {
                    if (str[i] >= "A" && str[i] <= "Z") {
                        swapped += str[i].toLowerCase();
                    } else if (str[i] >= "a" && str[i] <= "z") {
                        swapped += str[i].toUpperCase();
                    } else {
                        swapped += str[i];
                    }
                }
                alert("Chuỗi sau khi chuyển đổi: " + swapped);
            }
            break;
        case 5:
            if (!str) {
                alert("Vui lòng nhập chuỗi trước!");
            } else {
                let str2 = prompt("Nhập chuỗi thứ 2:");
                let maxLength = Math.max(str.length, str2.length);
                let mixed = "";
                for (let i = 0; i < maxLength; i++) {
                    if (i < str.length) mixed += str[i];
                    if (i < str2.length) mixed += str2[i];
                }
                alert("Chuỗi sau khi trộn: " + mixed);
            }
            break;
        case 6:
            if (!str) {
                alert("Vui lòng nhập chuỗi trước!");
            } else {
                let words = str.split(/\s+/);
                for (let i = 0; i < words.length - 1; i++) {
                    for (let j = i + 1; j < words.length; j++) {
                        if (words[i].length > words[j].length) {
                            let temp = words[i];
                            words[i] = words[j];
                            words[j] = temp;
                        }
                    }
                }
                alert("Chuỗi sau khi sắp xếp từ ngắn đến dài: " + words.join(" "));
            }
            break;
        case 7:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng chọn lại!");
    }
} while (choice !== 7);
