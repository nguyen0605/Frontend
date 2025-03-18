let choice = prompt("Chọn loại chuyển đổi:\n1. VND -> USD\n2. USD -> VND");

if (choice === "1") {
    let vnd = parseFloat(prompt("Nhập số tiền VND:"));
    let usd = vnd / 23000;
    alert(vnd + " VND = " + usd.toFixed(2) + " USD");
} else if (choice === "2") {
    let usd = parseFloat(prompt("Nhập số tiền USD:"));
    let vnd = usd * 23000;
    alert(usd + " USD = " + vnd + " VND");
} else {
    alert("Lựa chọn không hợp lệ!");
}
