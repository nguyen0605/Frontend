let n = prompt("Nhập vào chuỗi số bất kì:");

if(isNaN(n) || !n){
    alert("Số không hợp lệ");
}else{
    let flag=1;
    for(let i = 0; i<=n.length/2; i++){
        if(n.charAt(i) != n.charAt(n.length-i-1)){
            flag=0;
            break;
        }
    }
    if(flag){
        alert("Là số đối xứng");
    }else{
        alert("Không phải số đối xứng");
    }
}