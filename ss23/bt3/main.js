let n = Number(prompt("NHập vào n số phần tử của mảng:"));
if(n<0 || isNaN(n)){
    alert("Số lượng phần tử không hợp lệ");
}else{
    let array = [];
    let cnt=0;

    for(let i=0;i<n;i++){
        array[i]=Number(prompt(`Nhập vào phần tử thứ ${i+1}`));
        if(array[i]<0){
            cnt++;
        }
    }

    if(cnt>0){
        alert(cnt);
    }else{
        alert("Mảng không có phần tử");
    }
}