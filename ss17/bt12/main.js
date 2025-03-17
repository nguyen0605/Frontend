let num = prompt("Nhập một số:");

if (!isNaN(num) && num.trim() !== "") {
    let binary = Number(num).toString(2); 
    alert(binary);
} else {
    alert("Vui lòng nhập một số hợp lệ!");
}
