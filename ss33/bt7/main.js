const products = [
    { id: 1, name: 'Điện thoại Samsung Galaxy A54', price: 7490000, image: 'https://cdn.tgdd.vn/Products/Images/42/335177/samsung-galaxy-a56-5g-green-thumb-600x600.jpg' },
    { id: 2, name: 'Laptop Dell Inspiron 15', price: 15990000, image: 'https://bizweb.dktcdn.net/100/446/400/products/laptop-dell-vostro-3490-1-gia-loc.jpg?v=1699258008053' },
    { id: 3, name: 'Tai nghe AirPods Pro', price: 4990000, image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=90&.v=1724041668836' },
    { id: 4, name: 'Đồng hồ thông minh Apple Watch', price: 8990000, image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80' },
    { id: 5, name: 'Máy ảnh Canon EOS M50', price: 12490000, image: 'https://cdn.vjshop.vn/may-anh/mirrorless/canon/canon-eos-r50/black-18-45/canon-eos-r50-lens-18-45mm-500x500.jpg' },
    { id: 6, name: 'Loa Bluetooth JBL Flip 5', price: 2190000, image: 'https://bizweb.dktcdn.net/100/445/498/products/jbl-go-4-3-4-left-black-48178-x1.jpg?v=1732646465910' },
    { id: 7, name: 'Bàn phím cơ Logitech G Pro', price: 2490000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MvD76Mt-Ne0IC2DPMMsTZpG05xDxJOzkqw&s' },
    { id: 8, name: 'Chuột không dây Logitech MX Master', price: 1890000, image: 'https://product.hstatic.net/200000722513/product/h_mx_master_3_wireless__graphite_.jpg_1e5491e35f754dcc90b90582a9c3be95_ca0c63ca59de4ed1b4d46fcc5c81c1ed.png' }
];

let productList = document.getElementById("productList");
let cart = [];
let totalPrice;

function renderProducts() {
    productList.innerHTML = "";

    products.forEach(product => {
        productList.innerHTML += `
            <div class="card">
                <img src="${product.image}">
                <p>${product.name}</p>
                <p><strong>${product.price.toLocaleString()}đ</strong></p>
                <button onclick="addToCart(${product.id})">Thêm vào giỏ hàng</button>
            </div>
        `;
    });
}

function addToCart(productId) {
    let product = products.find(p => p.id === productId);
    let item = cart.find(p => p.id === productId);

    if (item) {
        item.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    renderCart();
}

function renderCart() {
    let items = document.getElementsByClassName("items")[0];
    let total = document.getElementById("total");
    let cartContainer = document.getElementsByClassName("cart")[0];
    
    if (cart.length === 0) {
        items.innerHTML = `<div id="cart-item" style="display: flex; justify-content: center;">Giỏ hàng trống</div>`;
        total.innerHTML = "Tổng: 0đ";
        return;
    }

    let itemsHTML = ""; 
    totalPrice = 0;

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        itemsHTML += `
            <div class="cart-item" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #ddd; padding: 5px;">
                <p style="text-align: start; color: black; font-size: 14px; font-weight: bold;">
                    ${item.name}<br>
                    <span style="color: red;">${item.price.toLocaleString()}đ x ${item.quantity}</span>
                </p>
                <div class="btn" style="display: flex; align-items: center; gap: 5px;">
                    <button onclick="updateQuantity(${item.id}, -1)" style="width: 20px; height: 20px; background: green; color: white; border: none; font-size: 10px; display: flex; align-items: center; justify-content: center;">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)" style="width: 20px; height: 20px; background: green; color: white; border: none; font-size: 10px; display: flex; align-items: center; justify-content: center;">+</button>
                    <button onclick="removeFromCart(${item.id})" style="width: 30px; height: 30px; background: red; color: white; border: none; font-size: 10px; display: flex; align-items: center; justify-content: center;">X</button>
                </div>
            </div>
        `;
    });

   
    items.innerHTML = `<div id="cart-item" style="display: flex; flex-direction: column; gap: 10px;">${itemsHTML}</div>`;
    total.innerHTML = `Tổng: <strong>${totalPrice.toLocaleString()}đ</strong>`;
}


function updateQuantity(productId, change) {
    let item = cart.find(p => p.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(p => p.id !== productId);
        }
    }
    renderCart();
}

function removeFromCart(productId) {
    cart = cart.filter(p => p.id !== productId);
    renderCart();
}

function pay() {
    if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
        return;
    }
    alert(`Cảm ơn bạn đã mua hàng 
Tổng giá trị đơn hàng: ${totalPrice.toLocaleString()}đ`);
    cart = [];
    renderCart();
}

renderProducts();
renderCart();
