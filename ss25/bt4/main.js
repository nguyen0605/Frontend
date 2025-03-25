function checkPrime(number){
    if(isNaN(number)){
        return "dữ liệu không hợp lệ";
    }
    if(number<2){
        return "không phải là số nguyên tố";
    }
    
    for(let i = 2;i<= Math.sqrt(number);i++){
        if(number%i === 0){
            return "không phải là số nguyên tố";
        }
    }
    return "là số nguyên tố";
}

console.log(checkPrime(17));
console.log(checkPrime(6));
console.log(checkPrime('text'));
