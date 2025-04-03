function isEmailValid(email) {  
    if(email.includes("@") && !email.includes(" ")) return 1;
    return 0;
}  

function emailExists(email) {  
    return localStorage.getItem(email) !== null;  
}  

function saveAccountToLocalStorage(email, password) {  
    const account = {  
        email: email,  
        password: password,
    };  
    localStorage.setItem("account", JSON.stringify(account));  
}  

document.getElementById('registerForm').addEventListener('submit', function(event) {  
    event.preventDefault();  

    const email = document.getElementById('email').value.trim();  
    const password = document.getElementById('password').value;  
    const confirmPassword = document.getElementById('confirmPassword').value;  

    if (email === '') {  
        alert('Email không được bỏ trống.');  
        return;  
    }  

    if (!isEmailValid(email)) {  
        alert('Email không hợp lệ.');  
        return;  
    }  

    if (password === '') {  
        alert('Mật khẩu không được bỏ trống.');  
        return;  
    }  

    if (password !== confirmPassword) {  
        alert('Mật khẩu và xác nhận mật khẩu không khớp.');  
        return;  
    }  

    if (emailExists(email)) {  
        alert('Email đã tồn tại. Vui lòng chọn email khác.');  
        return;  
    }  
 
    saveAccountToLocalStorage(email, password);  
    alert('Đăng ký thành công!');  
});  