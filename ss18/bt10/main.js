let n = parseInt(prompt("Nhập số nguyên từ 0 - 999:"));

if (isNaN(n) || n < 0 || n > 999) {
    alert("Vui lòng nhập số hợp lệ trong khoảng 0 - 999.");
} else {
    let ketQua = "";

    let tram = Math.floor(n / 100);
    let chuc = Math.floor((n % 100) / 10);
    let donVi = n % 10;

    if (tram === 1) ketQua += "một trăm ";
    else if (tram === 2) ketQua += "hai trăm ";
    else if (tram === 3) ketQua += "ba trăm ";
    else if (tram === 4) ketQua += "bốn trăm ";
    else if (tram === 5) ketQua += "năm trăm ";
    else if (tram === 6) ketQua += "sáu trăm ";
    else if (tram === 7) ketQua += "bảy trăm ";
    else if (tram === 8) ketQua += "tám trăm ";
    else if (tram === 9) ketQua += "chín trăm ";

    if (tram > 0 && chuc === 0 && donVi > 0) {
        ketQua += "linh ";
    }

    if (chuc === 1) ketQua += "mười ";
    else if (chuc === 2) ketQua += "hai mươi ";
    else if (chuc === 3) ketQua += "ba mươi ";
    else if (chuc === 4) ketQua += "bốn mươi ";
    else if (chuc === 5) ketQua += "năm mươi ";
    else if (chuc === 6) ketQua += "sáu mươi ";
    else if (chuc === 7) ketQua += "bảy mươi ";
    else if (chuc === 8) ketQua += "tám mươi ";
    else if (chuc === 9) ketQua += "chín mươi ";

    if (donVi === 1 && chuc > 1) ketQua += "mốt";
    else if (donVi === 1 && (chuc === 1 || chuc === 0 )) ketQua += "một";
    else if (donVi === 2) ketQua += "hai";
    else if (donVi === 3) ketQua += "ba";
    else if (donVi === 4) ketQua += "bốn";
    else if (donVi === 5 && chuc > 0) ketQua += "lăm";
    else if (donVi === 5 && chuc === 0) ketQua += "năm";
    else if (donVi === 6) ketQua += "sáu";
    else if (donVi === 7) ketQua += "bảy";
    else if (donVi === 8) ketQua += "tám";
    else if (donVi === 9) ketQua += "chín";

    if (n === 0) ketQua = "Không";

    alert(ketQua.trim().charAt(0).toUpperCase() + ketQua.trim().slice(1));
}
