
const products = [
    {
        id: 1,
        name: 'Laptop Dell XPS 15',
        price: 35990000,
        image:'https://th.bing.com/th/id/R.dd66a48254aca2d1e37b8887993a100c?rik=Ileg6QdLFs2iTA&pid=ImgRaw&r=0', 
        description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.',
    },
    {
        id: 2,
        name: 'iPhone 15 Pro Max',
        price: 32990000,
        image: 'https://cdn-img-v2.mybota.vn/uploadv2/web/82/8269/product/2023/09/16/01/19/1694867294_don-tim-truoc-thiet-ke-mau-sac-cua-iphone-15-pro-1.jpg', 
        description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.',
    },
    {
        id: 3,
        name: 'Samsung Galaxy S24 Ultra',
        price: 28990000,
        image: 'https://th.bing.com/th/id/OIP.n5ZE0e4C910Ed2cLhNKjPAHaEK?rs=1&pid=ImgDetMain', 
        description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.',
    },
    {
        id: 4,
        name: 'Tai nghe Sony WH-1000XM5',
        price: 7990000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIruByOBTwpCaeeIEFH--dymkiglCsgQVlug&s',
        description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.',
    },
    {
        id: 5,
        name: 'Apple Watch Series 9',
        price: 11990000,
        image: 'https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all', 
        description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.',
    },
    {
        id: 6,
        name: 'Loa JBL Charge 5',
        price: 3990000,
        image: 'https://th.bing.com/th/id/OIP.kNp66Lw41hQJBWsxrddSZQHaHa?rs=1&pid=ImgDetMain',
        description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.',
    }
];

const productList = document.getElementById("productList");

function formatPrice(price) {
    return price.toLocaleString('vi-VN') + ' VND';
}

function displayProducts(products) {
    productList.innerHTML = ''; 

    products.forEach(product => {

        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">${formatPrice(product.price)}</div>
            <button>Buy</button>
        `;

        productList.appendChild(productItem);
    });
}

function search(){
    let searchField = document.getElementById("searchInput");
    let searchValue = searchField.value.trim().toLowerCase();

    productFiltered = products.filter(product => 
        product.name.toLowerCase().includes(searchValue) ||
        product.description.toLowerCase().includes(searchValue)
    );
    displayProducts(productFiltered);
};

displayProducts(products);