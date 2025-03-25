let users = [];

function registerEmail(email) {
    if (typeof email !== "string") {
        console.log("Dữ liệu không hợp lệ!");
        return;
    }

    email = email.trim().toLowerCase(); 

    if (!email.includes("@") || (!email.endsWith(".com") && !email.endsWith(".vn"))) {
        console.log("Email không hợp lệ!");
        return;
    }

    if (users.includes(email)) {
        console.log("Tài khoản đã tồn tại!");
    } else {
        users.push(email);
        console.log("Đăng ký thành công!");
    }
}

registerEmail("test@example.com"); 
registerEmail("test@example.com"); 
registerEmail("user@domain.vn");  
registerEmail("invalid_email");     
registerEmail("another@domain.xyz"); 
