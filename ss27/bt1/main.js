function getNumberInput(message) {
    return parseFloat(prompt(message));
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("Không thể chia cho 0!");
        return "Không hợp lệ";
    }
    return a / b;
}

let choice;
do {
    choice = parseInt(prompt(
        "1. Cộng hai số" +
        "\n2. Trừ hai số" +
        "\n3. Nhân hai số" +
        "\n4. Chia hai số" +
        "\n5. Thoát"
    ));

    if (choice >= 1 && choice <= 4) {
        let num1 = getNumberInput("Nhập số thứ nhất:");
        let num2 = getNumberInput("Nhập số thứ hai:");
        let result;

        switch (choice) {
            case 1:
                result = add(num1, num2);
                alert(`Kết quả: ${num1} + ${num2} = ${result}`);
                break;
            case 2:
                result = subtract(num1, num2);
                alert(`Kết quả: ${num1} - ${num2} = ${result}`);
                break;
            case 3:
                result = multiply(num1, num2);
                alert(`Kết quả: ${num1} × ${num2} = ${result}`);
                break;
            case 4:
                result = divide(num1, num2);
                if (result !== "Không hợp lệ") {
                    alert(`Kết quả: ${num1} ÷ ${num2} = ${result}`);
                }
                break;
        }
    } else if (choice !== 5) {
        alert("Lựa chọn không hợp lệ. Vui lòng chọn lại!");
    }
} while (choice !== 5);

alert("Thoát chương trình.");
