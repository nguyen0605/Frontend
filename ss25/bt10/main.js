let products = [
    ["mì tôm", 5, 5000],
    ["bánh mì", 12, 15000],
    ["bánh bao", 5, 8000],
    ["mèn mén", 30, 20000]
];

let cart = [];
let running = true;

function showProducts() {
    let message = "=========== SẢN PHẨM HIỆN CÓ ==========\n";
    for (let i = 0; i < products.length; i++) {
        message += `${products[i][0]}: ${products[i][1]} cái - ${products[i][2]}đ\n`;
    }
    alert(message);
}

function addToCart() {
    let productName = prompt("Nhập tên sản phẩm muốn mua:");
    let productIndex = -1;

    for (let i = 0; i < products.length; i++) {
        if (products[i][0].toLowerCase() === productName.toLowerCase()) {
            productIndex = i;
            break;
        }
    }

    if (productIndex === -1) {
        alert("Sản phẩm không có trong cửa hàng!");
        return;
    }

    if (products[productIndex][1] === 0) {
        alert(`Sản phẩm "${products[productIndex][0]}" đã hết hàng!`);
        return;
    }

    let cartIndex = -1;
    for (let j = 0; j < cart.length; j++) {
        if (cart[j][0].toLowerCase() === productName.toLowerCase()) {
            cartIndex = j;
            break;
        }
    }

    if (cartIndex !== -1) {
        cart[cartIndex][1] += 1;
    } else {
        cart.push([products[productIndex][0], 1, products[productIndex][2]]);
    }

    products[productIndex][1] -= 1; 
    alert(`Đã thêm "${products[productIndex][0]}" vào giỏ hàng!`);
}

function showCart() {
    if (cart.length === 0) {
        alert("Giỏ hàng trống!");
        return;
    }

    let message = "================ GIỎ HÀNG CỦA BẠN ================\n";
    for (let i = 0; i < cart.length; i++) {
        message += `• ${cart[i][0]}: ${cart[i][1]} cái - ${cart[i][2]}đ\n`;
    }
    alert(message);
}

function checkout() {
    if (cart.length === 0) {
        alert("Giỏ hàng trống, không thể thanh toán!");
        return;
    }

    let total = 0;
    let receipt = "================ HÓA ĐƠN CỦA BẠN ================\n";
    for (let i = 0; i < cart.length; i++) {
        receipt += `${cart[i][0]}: ${cart[i][1]} cái - ${cart[i][2]}đ\n`;
        total += cart[i][1] * cart[i][2];
    }
    receipt += `----------------------------------------\nTổng tiền: ${total}đ`;
    
    alert(receipt);
    cart = [];
}

while (running) {
    let choice = Number(prompt(`================ MENU ================\n\n`
        + `1. Xem danh sách sản phẩm\n`
        + `2. Mua sản phẩm\n`
        + `3. Xem giỏ hàng\n`
        + `4. Thanh toán\n`
        + `5. Thoát chương trình\n\n`
        + `====================================\nLựa chọn của bạn:`));
    
    switch (choice) {
        case 1:
            showProducts();
            break;
        case 2:
            addToCart();
            break;
        case 3:
            showCart();
            break;
        case 4:
            checkout();
            break;
        case 5:
            alert("Tạm biệt! Hẹn gặp lại.");
            running = false;
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại! (1-5)");
    }
}
