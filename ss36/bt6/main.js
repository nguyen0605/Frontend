let selectedStars = 0;

const stars = document.querySelectorAll(".stars");
const rating = document.getElementById("selected-rating");

//Xác định số lượng sao được chọn
stars.forEach(star =>{
    star.addEventListener("click",() =>{
        selectedStars = parseInt(star.getAttribute('data-value'))
        updateStarDisplay();
    });
});

//Hiển thị sao sau khi chọn
function updateStarDisplay(){
    stars.forEach(star => {
        const value = parseInt(star.getAttribute('data-value'));
        
        star.style.color = (value<=selectedStars?'gold':'gray');
    });

    if(selectedStars > 0){
        rating.innerText= `Bạn đã đánh giá ${selectedStars} sao`;
    }else{
        rating.innerText = 'Bạn chưa đánh giá';
    }
};

//Gửi đánh giá
function submitReview(){
    let commentInput = document.getElementById("comment-input");
    let comment = commentInput.value.trim();

    if(selectedStars === 0){
        alert("Vui lòng chọn số sao trước khi gửi!");
        return;
    }

    if(comment === ""){
        alert("Vui lòng nhập nội dung đánh giá");
    }

    const newReview = {
        stars: selectedStars,
        comment: comment
    };

    let reviewList = JSON.parse(localStorage.getItem("reviewList")) || [];
    reviewList.push(newReview);
    localStorage.setItem("reviewList",JSON.stringify(reviewList));

    commentInput.value="";
    selectedStars=0;
    updateStarDisplay();
    renderReviewList();
};

function renderReviewList(){
    const list = document.getElementById("comment-list");
    list.innerHTML="";

    const reviewList = JSON.parse(localStorage.getItem("reviewList")) || [];
    
    reviewList.forEach(review => {
        const li = document.createElement("li");
        const starSpan = document.createElement('span');

        starSpan.innerText = "★".repeat(review.stars);
        starSpan.style.color = "gold";

        const content = document.createElement('b');
        content.innerText = review.comment;

        li.appendChild(starSpan);
        li.appendChild(content);
        list.appendChild(li);
    });
}

renderReviewList();
updateStarDisplay();s