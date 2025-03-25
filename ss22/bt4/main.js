let input = prompt("Nhập vào một dãy số:");
let isValid = true;

for (let i = 0; i < input.length; i++) {
    if (input[i] < '0' || input[i] > '9') {
        isValid = false;
        break;
    }
}

if (isValid) {
    newArray = input.split("").map(Number);
    let max=newArray[0];
    for(let i =1;i<newArray.length;i++){
        if(newArray[i]>max){
            max=newArray[i];
        }
    }
    document.writeln(`${max} là sô lớn nhất trong dãy số`);
} else {
    document.writeln("Output: dãy không hợp lệ");
}
