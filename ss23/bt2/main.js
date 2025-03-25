let array = [];

let maxEle=array[0];
let maxIdx=-1;

for(let i = 0; i<array.length;i++){
    if(array[i]>maxEle){
        maxEle=array[i];
        maxIdx=i;
    }
}

if(maxIdx !== -1){
    document.writeln(`Số lớn nhất: ${maxEle}`);
    document.writeln(`Vị trí: ${maxIdx}`);
}else{
    document.writeln("Không có số lớn nhất");
}