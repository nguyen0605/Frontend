let input = prompt("Nhập vào một ký tự:"); 

if (input.length === 1 && ((input >= 'A' && input <= 'Z') || (input >= 'a' && input <= 'z'))) {
    alert("Ký tự " + input + " là chữ cái");
} else {
    alert("Không phải chữ cái");
}
