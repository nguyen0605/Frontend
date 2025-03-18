let soNamKinhNghiem = parseFloat(prompt("Nhập số năm kinh nghiệm của nhân viên:"));

if (!isNaN(soNamKinhNghiem) && soNamKinhNghiem >= 0) {
    if (soNamKinhNghiem < 1) {
        alert("Mới vào nghề");
    } else if (soNamKinhNghiem >= 1 && soNamKinhNghiem <= 3) {
        alert("Nhân viên có kinh nghiệm");
    } else if (soNamKinhNghiem >= 4 && soNamKinhNghiem <= 6) {
        alert("Chuyên viên");
    } else {
        alert("Quản lý");
    }
} else {
    alert("Vui lòng nhập số năm kinh nghiệm hợp lệ!");
}
