let users = [];
let running = true;

function isValidEmail(email) {
    return email.includes("@") && (email.endsWith(".com") || email.endsWith(".vn"));
}

function isValidPassword(password) {
    let hasUpper = /[A-Z]/.test(password);
    let hasSpecial = /[^A-Za-z0-9]/.test(password);
    return password.length >= 6 && hasUpper && hasSpecial;
}

while (running) {
    let choice = Number(prompt(
        `=========== HỆ THỐNG TÀI KHOẢN ===========\n\n`
        + `1. Đăng ký tài khoản mới\n`
        + `2. Đăng nhập\n`
        + `3. Thoát\n\n`
        + `==========================================\nLựa chọn của bạn:`));

    switch (choice) {
        case 1:
            let name = prompt("Nhập tên người dùng:");
            let email = prompt("Nhập email:");
            let password = prompt("Nhập mật khẩu:");

            if (!isValidEmail(email)) {
                alert("Email không hợp lệ. Phải chứa '@' và kết thúc bằng .com hoặc .vn");
                break;
            }

            if (!isValidPassword(password)) {
                alert("Mật khẩu không hợp lệ. Phải có ít nhất 6 ký tự, gồm ký tự hoa và ký tự đặc biệt.");
                break;
            }

            let exists = users.some(user => user.email.toLowerCase() === email.toLowerCase());
            if (exists) {
                alert("Email đã tồn tại. Vui lòng sử dụng email khác.");
            } else {
                users.push({ name, email, password });
                alert("Đăng ký thành công!");
            }
            break;

        case 2:
            let loginEmail = prompt("Nhập email:");
            let loginPassword = prompt("Nhập mật khẩu:");

            let foundUser = users.find(user => user.email === loginEmail && user.password === loginPassword);
            if (foundUser) {
                alert(`Đăng nhập thành công!\n\nTên: ${foundUser.name}\nEmail: ${foundUser.email}`);
            } else {
                alert("Sai email hoặc mật khẩu!");
            }
            break;

        case 3:
            alert("Thoát chương trình.");
            running = false;
            break;

        default:
            alert("Lựa chọn không hợp lệ. Vui lòng chọn từ 1 đến 3.");
    }
}
