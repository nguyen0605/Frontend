let n = parseInt(prompt("Nhập n:"));

if(isNaN(n)){
    alert("Vui lòng nhập sô hợp lệ!");
}else{
    if(n%3==0 && n%5==0){
        alert(n+ " chia hết cho cả 3 và 5");
    }else{
        alert(n + " không chia hết cho cả 3 và 5");
    }
}