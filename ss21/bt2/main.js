let evenCount = 0; 
let oddCount = 0;  

for (let i = 1; i <= 5; i++) {
    let num = Number(prompt(`Nhập số nguyên thứ ${i}:`));

    if (!isNaN(num)) { 
        if (num % 2 === 0) {
            evenCount++; 
        } else {
            oddCount++;  
        }
    } else {
        alert("Vui lòng nhập số nguyên hợp lệ!");
        i--;
    }
}

document.writeln(`Số lượng số chẵn: ${evenCount} <br>`);
document.writeln(`Số lượng số lẻ: ${oddCount}`);
