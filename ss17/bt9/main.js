let a = prompt("Nhập số a:")
let b = prompt("Nhập số b:")
let c = prompt("Nhập số c:")
let delta = b*b - 4*a*c

if (isNaN(a) || isNaN(b) || isNaN(c)){
    alert("Hãy nhập vào số!")
}
else if (delta < 0){
    alert("Phương trình vô nghiệm!")
}
else if (delta == 0){
    x = -b/(2*a)
    alert("Phương trình có nghiệm kép là x1 = " + "x2 = " + x)
}
else if (delta > 0){
    x1 = (-b + Math.sqrt(delta))/(2*a)
    x2 = (-b - Math.sqrt(delta))/(2*a)
    alert("Phương trình có hai nghiệm phân biệt là x1 = " + x1 + " và x2 = " + x2)
}