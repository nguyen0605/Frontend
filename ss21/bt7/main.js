let P = Number(prompt("Nhập số tiền gửi ban đầu:"));
let r = Number(prompt("Nhập lãi suất tháng (%):")) / 100;  // Chuyển % thành số thập phân
let t = Number(prompt("Nhập số tháng gửi:"));

if (isNaN(P) || isNaN(r) || isNaN(t) || P <= 0 || r < 0 || t <= 0) {
    document.writeln("Dữ liệu nhập không hợp lệ!");
} else {
    let A = P * Math.pow((1 + r), t);
    let interest = A - P;  

    document.writeln(`Tiền lãi: ${interest.toFixed(3)} <br>`);
    document.writeln(`Tiền nhận được: ${A.toFixed(3)}`);
}
