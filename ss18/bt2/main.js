let diemToan = Number(prompt("Nhập điểm môn Toán:"));
let diemAnh = Number(prompt("Nhập điểm môn Anh:"));
let diemVan = Number(prompt("Nhập điểm môn Văn:"));

let dtb = (diemToan + diemAnh + diemVan)/3;

if(dtb<5.0){
    alert("Học lực yếu!");
}else if(dtb<6.5){
    alert("Học lực trung bình!");
}else if(dtb<7.9){
    alert("Học lực khá!");
}else{
    alert("Học lực giỏi!");
}