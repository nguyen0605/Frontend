let numbers = [2,5,9,4,1,8,6];

let input = Number(prompt("Nhập một số bất kì:"));
let flag=0;
for(let i =0;i<numbers.length;i++){
    if(input === numbers[i]){
        flag=1;
    }
}
if(flag){
    alert("Bingo");
}else{
    alert("Chúc bạn may mắn lần sau")
}
