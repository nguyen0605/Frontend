document.getElementsByTagName('button')[0].addEventListener("click",function(){
    document.getElementsByClassName('container')[0].classList.toggle("btn-on");
    document.getElementsByClassName("box-modal")[0].style.display="block";
    document.getElementsByTagName("button")[0].disabled=true;
    document.getElementsByTagName("button")[0].style.backgroundColor="gray";
});

document.getElementsByTagName("i")[0].addEventListener("click",function(){
    document.getElementsByClassName('box-modal')[0].style.display="none";
    document.getElementsByClassName('container')[0].classList.toggle("btn-on");
    document.getElementsByTagName("button")[0].disabled=false;
    document.getElementsByTagName("button")[0].style.backgroundColor="#D0D0D0";
});