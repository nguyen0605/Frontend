let amount = Number(prompt("Nhập số tiền cần rút (chia hết cho 1000):"));
if (amount % 1000 !== 0 || amount <= 0 || isNaN(amount)) {
    document.writeln("Số tiền không hợp lệ!");
} else {
    document.writeln(`Số tiền cần rút: ${amount}<br>`);
    document.writeln("Các mệnh giá:<br>");

    let bill500k = Math.floor(amount / 500000);
    amount -= bill500k * 500000;
    if (bill500k > 0) document.writeln(`500.000 - ${bill500k} tờ<br>`);

    let bill200k = Math.floor(amount / 200000);
    amount -= bill200k * 200000;
    if (bill200k > 0) document.writeln(`200.000 - ${bill200k} tờ<br>`);

    let bill100k = Math.floor(amount / 100000);
    amount -= bill100k * 100000;
    if (bill100k > 0) document.writeln(`100.000 - ${bill100k} tờ<br>`);

    let bill50k = Math.floor(amount / 50000);
    amount -= bill50k * 50000;
    if (bill50k > 0) document.writeln(`50.000 - ${bill50k} tờ<br>`);

    let bill20k = Math.floor(amount / 20000);
    amount -= bill20k * 20000;
    if (bill20k > 0) document.writeln(`20.000 - ${bill20k} tờ<br>`);

    let bill10k = Math.floor(amount / 10000);
    amount -= bill10k * 10000;
    if (bill10k > 0) document.writeln(`10.000 - ${bill10k} tờ<br>`);

    let bill5k = Math.floor(amount / 5000);
    amount -= bill5k * 5000;
    if (bill5k > 0) document.writeln(`5.000 - ${bill5k} tờ<br>`);

    let bill2k = Math.floor(amount / 2000);
    amount -= bill2k * 2000;
    if (bill2k > 0) document.writeln(`2.000 - ${bill2k} tờ<br>`);

    let bill1k = Math.floor(amount / 1000);
    amount -= bill1k * 1000;
    if (bill1k > 0) document.writeln(`1.000 - ${bill1k} tờ<br>`);
}
