document.getElementById("btn1").addEventListener("click",function(){
    let randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    document.getElementById("box1").style.backgroundColor = randomColor;
});

document.getElementById("btn2").addEventListener("click",function(){
    let randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    document.getElementById("box2").style.backgroundColor = randomColor;
});