let gio = parseInt(prompt("Nhập giờ (0-23):"));
let phut = parseInt(prompt("Nhập phút (0-59):"));
let giay = parseInt(prompt("Nhập giây (0-59):"));

if (
    !isNaN(gio) && !isNaN(phut) && !isNaN(giay) &&
    gio >= 0 && gio <= 23 &&
    phut >= 0 && phut <= 59 &&
    giay >= 0 && giay <= 59
) {
    let suffix = (gio >= 12) ? "PM" : "AM";
    let gio12 = gio % 12;
    gio12 = gio12 === 0 ? 12 : gio12; 

    let ketQua = `${gio12.toString().padStart(2, "0")}:${phut.toString().padStart(2, "0")}:${giay.toString().padStart(2, "0")} ${suffix}`;
    alert(`Giờ sau khi chuyển đổi: ${ketQua}`);
} else {
    alert("Vui lòng nhập thời gian hợp lệ!");
}
