let a = Number(prompt("Nhập hệ số a:"));
let b = Number(prompt("Nhập hệ số b:"));
let c = Number(prompt("Nhập hệ số c:"));

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    document.writeln("Vui lòng nhập số hợp lệ!");
} else if (a === 0) {
    document.writeln("Đây không phải phương trình bậc 2 (a phải khác 0).");
} else {
    let delta = b * b - 4 * a * c;

    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.writeln(`Phương trình có hai nghiệm phân biệt:<br>`);
        document.writeln(`x1 = ${x1} <br>`);
        document.writeln(`x2 = ${x2} <br>`);
    } else if (delta === 0) {
        let x = -b / (2 * a);
        document.writeln(`Phương trình có nghiệm kép: x = ${x}`);
    } else {
        document.writeln("Phương trình không có nghiệm thực.");
    }
}
