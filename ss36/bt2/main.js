const foodList = JSON.parse(localStorage.getItem('foodList')) || [
    {src: "https://i2.ex-cdn.com/crystalbay.com/files/content/2024/08/15/bun-bo-hue-2-0933.jpg", name: "Bún bò Huế", like: 0},
    {src: "https://static.vinwonders.com/production/pho-bo-ha-noi.jpeg", name: "Phở bò Hà Nội", like: 1},
    {src: "https://static.vinwonders.com/production/com-tam-sai-gon-thumb.jpg", name: "Cơm tấm Sài Gòn", like: 0},
];

function renderFoodList(){
    let html = document.getElementById("container");
    html.innerHTML="";

    foodList.forEach((food,index) => {
        html.innerHTML += `
            <div class="item">
            <img src=${food.src}>
            <div class="content">
                <span>${food.name}</span>
                <p>❤️ ${food.like} luot thich</p>
                <button onclick="like(${index})">Thích +1</button>
            </div>
        </div>
        `
    });
};

function like(index){
    foodList[index].like++;
    localStorage.setItem('foodList',JSON.stringify(foodList));
    renderFoodList();
};

renderFoodList();