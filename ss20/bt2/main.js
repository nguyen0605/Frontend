let n = parseInt(prompt("Nhập vào một số nguyên: (>=1)"));

if(isNaN(n) || n<1){
    document.writeln(`Dữ liệu nhập vào không hợp lệ!`)
}else{
    document.writeln(`Các số chia hết cho 5 từ 1 đến ${n} là: `);
    for(let i=1;i<=n;i++){
        if(i%5==0){
            document.writeln(i);
        }
    }
}