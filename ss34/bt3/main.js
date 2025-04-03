let form = document.getElementById("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    const account = JSON.parse(localStorage.getItem('account'));

    if (email === '') {  
        alert('Email không được bỏ trống.');  
        return;  
    } 

    if (password === '') {
        alert('Mật khẩu không được bỏ trống.');
        return;
    }

    if (!account || email !== account.email || password !== account.password) {
        alert("Tài khoản hoặc mật khẩu không đúng !");
        return;
    }

    alert("Đăng nhập thành công!");
    window.location.href = "home.html";
});