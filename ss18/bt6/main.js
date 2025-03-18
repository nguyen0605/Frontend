let year = parseInt(prompt("Nhập vào một năm bất kì:"));
let isLeapYear = false;

if(year % 4 == 0){
    if(year % 100 == 0){
        if(year % 400 == 0){
            isLeapYear = true;
        }
    }else{
        isLeapYear = true;
    }
}

if(isLeapYear){
    alert(year + " là năm nhuận");
}else{
    alert(year + " không phải là năm nhuận");
}