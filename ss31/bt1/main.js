document.getElementById('hideBtn').addEventListener("click", function(){
    document.getElementById('text').style.display="none";
});

document.getElementById('showBtn').onclick = function(){
    document.getElementsByTagName('p')[0].style.display ="block";
};