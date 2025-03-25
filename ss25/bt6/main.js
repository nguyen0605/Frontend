function isPalindrome(str) {
    let reversedStr = str.split("").reverse().join(""); 
    return str === reversedStr ? "là chuỗi đối xứng" : "không phải chuỗi đối xứng";
}

let userInput = prompt("Nhập vào một chuỗi:");
alert(isPalindrome(userInput));
