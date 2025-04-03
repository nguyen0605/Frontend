let dish = [
    { name: "Rau sạch", category: "Đồ ăn"},
    { name: "Rau sạch", category: "Đồ ăn"},
    { name: "Pepsi không calo", category: "Nước"},
    { name: "Cocacola", category: "Nước"},
    { name: "Cờ lê", category: "Dụng cụ"},
    { name: "Tuy vít", category: "Dụng cụ"},
];

let products = document.getElementById("productList");
let categoryFilter = document.getElementById("categories");

function display(filterdDish){
    products.innerHTML="";

    filterdDish.forEach(product => {
        let li = document.createElement("li");
        let nameLabel = document.createElement("span");
        nameLabel.textContent = "Tên đồ ăn: ";
        nameLabel.classList.add("bold-label"); 

        let nameValue = document.createTextNode(product.name + " - ");

        let categoryLabel = document.createElement("span");
        categoryLabel.textContent = "Danh mục: ";
        categoryLabel.classList.add("bold-label"); 

        let categoryValue = document.createTextNode(product.category);

        li.appendChild(nameLabel);
        li.appendChild(nameValue);
        li.appendChild(categoryLabel);
        li.appendChild(categoryValue);

        products.appendChild(li);
    });
};

function filter(){
    let selectedCategory = categoryFilter.value;

    let filterdDish = dish.filter(product => {
        return product.category === selectedCategory;
    });

    display(filterdDish);
};

display(dish);