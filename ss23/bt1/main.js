let array = [2,6,-3,66,32,6,9,31,11,22];
let flag=0;
for(let i=0;i<array.length;i++){
    if(array[i]>=10){
        flag=1;
        console.log(array[i]);
    }
}
if(!flag){
    alert("Không có số nào lớn hơn 10");
}