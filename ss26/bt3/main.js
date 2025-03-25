function filterValidEmails(arr){
    if(!Array.isArray(arr)){
        return "Dữ liệu không hợp lệ";
    }

    if(arr.length === 0){
        return "Mảng không có phần tử nào";
    }

    let result = arr.filter(element => element.includes("@") && !element.includes(" "));
    return result.length > 0? result : "Không có email hợp lệ"; 
}

console.log(filterValidEmails(["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space @out.com"]));


console.log(filterValidEmails([]));


console.log(filterValidEmails("abc"));
