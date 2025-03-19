let a = Number(prompt("Nhập a:"));
let b = Number(prompt("Nhập b:"));

if(isNaN(a) || isNaN(b)){
    alert("không hợp lệ");
}else{
    let temp=a;
    for(let i=1;i<b;i++){
        a*=temp;
    }
    alert(a);
}