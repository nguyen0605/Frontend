let tienGui = parseFloat(prompt("Nhập số tiền gửi (VND):"));
let soThang = parseInt(prompt("Nhập số tháng gửi:"));
let laiSuatThang = 4.3 / 12 / 100; 

if (!isNaN(tienGui) && !isNaN(soThang) && tienGui > 0 && soThang > 0) {
    let tienLai = tienGui * laiSuatThang * soThang;
    let tongTien = tienGui + tienLai;

    document.writeln("Số tiền lãi nhận được: " + tienLai.toLocaleString() + " VND<br>");
} else {
    document.writeln("Vui lòng nhập số hợp lệ!");
}
