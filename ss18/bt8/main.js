let a = parseFloat(prompt("Nhập độ dài cạnh a:"));
let b = parseFloat(prompt("Nhập độ dài cạnh b:"));
let c = parseFloat(prompt("Nhập độ dài cạnh c:"));

if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a > 0 && b > 0 && c > 0) {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            alert("Đây là tam giác đều");
        } else if (a === b || a === c || b === c) {
            alert("Đây là tam giác cân");
        } else if (
            Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ||
            Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2) ||
            Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2)
        ) {
            alert("Đây là tam giác vuông");
        } else {
            alert("Đây là tam giác thường");
        }
    } else {
        alert("Ba cạnh không tạo thành tam giác!");
    }
} else {
    alert("Vui lòng nhập độ dài hợp lệ!");
}
