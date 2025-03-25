let running = true;

while (running) {
    let choice = parseInt(prompt(
        "===== MENU TÍNH TOÁN HÌNH HỌC =====\n" +
        "1. Tính diện tích hình tròn\n" +
        "2. Tính chu vi hình tròn\n" +
        "3. Tính diện tích hình chữ nhật\n" +
        "4. Tính chu vi hình chữ nhật\n" +
        "5. Thoát\n" +
        "===================================\n" +
        "Nhập lựa chọn của bạn:"
    ));

    switch (choice) {
        case 1:
            let radius1 = parseFloat(prompt("Nhập bán kính hình tròn:"));
            if (isNaN(radius1) || radius1 <= 0) {
                alert("Bán kính không hợp lệ!");
            } else {
                let areaCircle = Math.PI * radius1 * radius1;
                alert(`Diện tích hình tròn: ${areaCircle.toFixed(2)}`);
            }
            break;

        case 2:
            let radius2 = parseFloat(prompt("Nhập bán kính hình tròn:"));
            if (isNaN(radius2) || radius2 <= 0) {
                alert("Bán kính không hợp lệ!");
            } else {
                let circumferenceCircle = 2 * Math.PI * radius2;
                alert(`Chu vi hình tròn: ${circumferenceCircle.toFixed(2)}`);
            }
            break;

        case 3:
            let length = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
            let width = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
            if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
                alert("Kích thước không hợp lệ!");
            } else {
                let areaRectangle = length * width;
                alert(`Diện tích hình chữ nhật: ${areaRectangle.toFixed(2)}`);
            }
            break;

        case 4:
            let length2 = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
            let width2 = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
            if (isNaN(length2) || isNaN(width2) || length2 <= 0 || width2 <= 0) {
                alert("Kích thước không hợp lệ!");
            } else {
                let perimeterRectangle = 2 * (length2 + width2);
                alert(`Chu vi hình chữ nhật: ${perimeterRectangle.toFixed(2)}`);
            }
            break;

        case 5:
            alert("Thoát chương trình.");
            running = false;
            break;

        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại!");
    }
}
