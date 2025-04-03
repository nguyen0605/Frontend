function login() {
  
    const correctUsername = "huanrose@gmail.com";
    const correctPassword = "123456";

    let username = document.getElementById("username").value;
    let password = document.getElementById("exampleInputPassword1").value;

    if (username === correctUsername && password === correctPassword) {
        console.log("Đăng nhập thành công");
    } else {
        console.log("Đăng nhập thất bại");
    }
}