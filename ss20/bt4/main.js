let str = prompt("Nhập vào chuỗi bất kì:");
let search = prompt("Nhập ký tự cần tìm kiếm:");

if(search.length > 1){
    alert("Vui lòng chỉ nhập một ký tự để tìm kiếm!");
}else{
    for(let i = 0; i<=str.length; i++){
        if(str.charAt(i) == search){
            alert("Tồn tại từ cần tìm kiếm")
            break;
        }
    }
    if(i === str.length){
        alert("Không tồn tại từ cần tìm kiếm");
    }
}

