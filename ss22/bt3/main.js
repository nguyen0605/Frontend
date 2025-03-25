let input = prompt("Nhập vào một dãy số:");
let isValid = true;

for (let i = 0; i < input.length; i++) {
    if (input[i] < '0' || input[i] > '9') {
        isValid = false;
        break;
    }
}

if (isValid) {
    let reversed = "";
    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }
    document.writeln("Output: " + reversed);
} else {
    document.writeln("Output: dãy không hợp lệ");
}
