let fontSize = 24; 
function changeFontSize(change) {
    fontSize += change; 
    document.getElementById("text").style.fontSize = fontSize + "px";
}