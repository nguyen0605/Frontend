let r = parseFloat(prompt("Nhập bán kính (r):"));
let h = parseFloat(prompt("Nhập chiều cao (h):"));

if (!isNaN(r) && !isNaN(h) && r > 0 && h > 0) {
    const PI = Math.PI;
    let chuViDay = 2 * PI * r;
    let dienTichXungQuanh = 2 * PI * r * h;
    let dienTichToanPhan = 2 * PI * r * (h + r);
    let theTich = PI * Math.pow(r, 2) * h;

    document.writeln("Bán kính: " + r + " cm<br>");
    document.writeln("Chiều cao: " + h + " cm<br>");
    document.writeln("Chu vi đáy: " + chuViDay.toFixed(2) + " cm<br>");
    document.writeln("Diện tích xung quanh: " + dienTichXungQuanh.toFixed(2) + " cm²<br>");
    document.writeln("Diện tích toàn phần: " + dienTichToanPhan.toFixed(2) + " cm²<br>");
    document.writeln("Thể tích: " + theTich.toFixed(2) + " cm³");
} else {
    document.writeln("Vui lòng nhập giá trị hợp lệ!");
}
