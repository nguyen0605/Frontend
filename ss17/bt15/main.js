let r = parseFloat(prompt("Nhập bán kính của hình cầu (r):"));

if (!isNaN(r) && r > 0) {
    const PI = Math.PI;
    let theTich = (4 / 3) * PI * Math.pow(r, 3);
    let dienTichBeMat = 4 * PI * Math.pow(r, 2);
    let chuViLonNhat = 2 * PI * r;

    document.writeln("Bán kính: " + r + " cm<br>");
    document.writeln("Thể tích: " + theTich.toFixed(2) + " cm³<br>");
    document.writeln("Diện tích bề mặt: " + dienTichBeMat.toFixed(2) + " cm²<br>");
    document.writeln("Chu vi lớn nhất: " + chuViLonNhat.toFixed(2) + " cm");
} else {
    document.writeln("Vui lòng nhập giá trị hợp lệ!");
}
