let n = Number(prompt("Nhập vào một số nguyên:"));
let flag=1;
if (n < 2) flag=0
for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0){
        flag=0;
    }
}
if(flag){
    alert("Là số nguyên tố");
}else{
    alert("Không phải là số nguyên tố");
}
