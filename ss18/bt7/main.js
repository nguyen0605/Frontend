let a = parseFloat(prompt("Mời bạn nhập vào số a"));
let b = parseFloat(prompt("Mời bạn nhập vào số b"));
let phepTinh = prompt("Mời bạn nhập vào các phép tính (+, -, *, /)");

let ketQua;
let bieuThuc = `${a} ${phepTinh} ${b}`;

if (!isNaN(a) && !isNaN(b)) {
    if (phepTinh === "+") {
        ketQua = a + b;
    } else if (phepTinh === "-") {
        ketQua = a - b;
    } else if (phepTinh === "*") {
        ketQua = a * b;
    } else if (phepTinh === "/") {
        if (b !== 0) {
            ketQua = a / b;
        } else {
            alert("Không thể chia cho 0!");
            ketQua = "Không hợp lệ";
        }
    } else {
        alert("Phép toán không hợp lệ!");
        ketQua = "Không hợp lệ";
    }

    if (ketQua !== "Không hợp lệ") {
        alert(`Kết quả của phép tính trên: ${bieuThuc} = ${ketQua}`);
    }
} else {
    alert("Vui lòng nhập số hợp lệ!");
}
