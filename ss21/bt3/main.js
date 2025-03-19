let correctPassword = "12345";
let flag=0;
while(flag!=1){
    let inputPassword = prompt("Nhập mật khẩu:");

    if (inputPassword === correctPassword) {
        document.writeln("Mật khẩu chính xác. Đăng nhập thành công!");
        flag=1;
    } else {
        alert("Mật khẩu sai. Vui lòng thử lại!");
    }
}

