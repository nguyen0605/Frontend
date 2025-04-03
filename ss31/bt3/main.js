const squares = document.querySelectorAll(".square");
squares.forEach(square => {
    square.addEventListener("click",function(){
        document.querySelector(".container").style.backgroundColor =
        getComputedStyle(square).backgroundColor;
    })
})