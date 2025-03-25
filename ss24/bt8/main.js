let str = "";
let choice;
do {
    choice = parseInt(prompt(
        "===== MENU =====\n" +
        "1. Nhập chuỗi ký tự\n" +
        "2. Hiển thị chuỗi ký tự\n" +
        "3. Tìm từ con trùng lặp và số lần xuất hiện\n" +
        "4. Tìm từ dài nhất và ngắn nhất\n" +
        "5. Tìm ký tự xuất hiện nhiều nhất\n" +
        "6. Chuyển đổi sang snake_case\n" +
        "7. Thoát\n" +
        "=================\n" +
        "Nhập lựa chọn của bạn:"
    ));

    switch (choice) {
        case 1:
            str = prompt("Nhập chuỗi ký tự:");
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
                let words = str.toLowerCase().split(" ");
                let wordCount = {};
                for (let i = 0; i < words.length; i++) {
                    let word = words[i];
                    if (wordCount[word] === undefined) {
                        wordCount[word] = 1;
                    } else {
                        wordCount[word]++;
                    }
                }
                let result = "";
                for (let key in wordCount) {
                    if (wordCount[key] > 1) {
                        result += key + ": " + wordCount[key] + " lần\n";
                    }
                }
                if (result === "") {
                    alert("Không có từ nào trùng lặp.");
                } else {
                    alert(result);
                }
            }
            break;
        case 4:
            if (!str) {
                alert("Vui lòng nhập chuỗi trước!");
            } else {
                let words = str.split(" ");
                let minWord = words[0];
                let maxWord = words[0];
                for (let i = 1; i < words.length; i++) {
                    if (words[i].length < minWord.length) {
                        minWord = words[i];
                    }
                    if (words[i].length > maxWord.length) {
                        maxWord = words[i];
                    }
                }
                alert("Từ ngắn nhất: " + minWord + "\nTừ dài nhất: " + maxWord);
            }
            break;
        case 5:
            if (!str) {
                alert("Vui lòng nhập chuỗi trước!");
            } else {
                let charCount = {};
                for (let i = 0; i < str.length; i++) {
                    let char = str[i];
                    if (char !== " ") {
                        if (charCount[char] === undefined) {
                            charCount[char] = 1;
                        } else {
                            charCount[char]++;
                        }
                    }
                }
                let maxCount = 0;
                let result = "";
                for (let key in charCount) {
                    if (charCount[key] > maxCount) {
                        maxCount = charCount[key];
                        result = key;
                    } else if (charCount[key] === maxCount) {
                        result += ", " + key;
                    }
                }
                alert("Ký tự xuất hiện nhiều nhất: " + result + " (" + maxCount + " lần)");
            }
            break;
        case 6:
            if (!str) {
                alert("Vui lòng nhập chuỗi trước!");
            } else {
                let words = str.toLowerCase().split(" ");
                let snakeCase = words.join("_");
                alert("Chuỗi dạng snake_case: " + snakeCase);
            }
            break;
        case 7:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng chọn lại!");
    }
} while (choice !== 7);
