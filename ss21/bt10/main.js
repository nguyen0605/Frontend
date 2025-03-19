let n = Number(prompt("Nhập vào n số nguyên tố muốn hiển thị:"));
let cnt=0, num=2;
if(n<0 || isNaN(n)){
    alert("Không hợp lệ");
}else{
    while(cnt<n){
        let flag=1;

        for(let j = 2;j<=Math.sqrt(num);j++){
            if(num%j==0){
                flag=0;
            }
        }
        if(flag){
            document.writeln(`${num} <br>`);
            cnt++;
        }
        num++;
    }
}
