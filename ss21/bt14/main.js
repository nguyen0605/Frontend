let width = parseInt(prompt("Nhập chiều ngang:"));
let height = parseInt(prompt("Nhập chiều dọc:"));

document.write("*".repeat(width) + "<br>");

for (let i = 1; i < height - 1; i++) {
    document.write("*" + "&nbsp;".repeat((width - 2) * 2) + "*<br>");
}

if (height > 1) {
    document.write("*".repeat(width) + "<br>");
}
