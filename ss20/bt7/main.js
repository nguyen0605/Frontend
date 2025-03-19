let n = Number(prompt("Nhập số lượng số fibonacci cần hiển thị:"));
let a=1;b=1;cnt=0;

while(cnt<n){
    document.writeln(`${a} <br>`);
    let next=a+b;
    a=b;
    b=next;
    cnt++;
}