let n = Number(prompt("Nhập vào sô nguyên bất kỳ"));

if(isNaN(n) || !Number.isInteger(n)){
    alert("Vui lòng nhập số nguyên hợp lệ");
}else{
    for(let i=0;i<=n;i++){
        if(n%i==0){
            console.log(i);
        }
    }
}
