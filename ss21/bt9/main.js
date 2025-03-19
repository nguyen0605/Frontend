let num = Number(prompt("Nhập một số nguyên:"));
let isPrime = true;

if (num < 2) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    document.writeln(`${num} là số nguyên tố.`);
} else {
    document.writeln(`${num} không phải là số nguyên tố.`);
}
