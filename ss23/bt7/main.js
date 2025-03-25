let n = Number(prompt("Nhập vào n số phần tử của mảng:"));

if (n < 0) {
    alert("Số lượng phần tử không được âm");
} else if (n === 0) {
    alert("Mảng không có phần tử");
} else {
    let array = [];
    let max1st;
    let max2nd;

    for(let i=0;i<n;i++){
        array[i]=Number(prompt(`Nhập vào phần tử thứ ${i+1}`));
        if(array[i]>array[i-1]){
            max2nd=max1st;
            max1st=array[i];
        }
    }

    alert(max2nd);
}
