function check(){
    let email = document.getElementById("Email").value;
    let alert = document.getElementById("alert");
    
    if(email.includes("@") && (email.slice(-4)===".com" || email.slice(-3)===".vn")){
        alert.textContent = "email hợp lệ";
        alert.style.color = "green";
    }else{
        alert.textContent = "email không hợp lệ!";
        alert.style.color = "red";
    }

    setTimeout(() => {
        alert.textContent = "";
    }, 1000);
};