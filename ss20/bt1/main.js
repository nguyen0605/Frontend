let n = parseInt(prompt("Nhập vào một số nguyên: (>=1)"));
let sum=0;

if(isNaN(n) || n<1){
    alert(`Dữ liệu nhập vào không hợp lệ!`)
}else{
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    alert(sum);
}