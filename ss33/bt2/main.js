function check(){
    let inputField = document.getElementById("text");
    let inputValue = inputField.value.trim();
    let count = document.getElementById("countT");

    count.innerHTML = `${inputValue.length} ký tự`
}