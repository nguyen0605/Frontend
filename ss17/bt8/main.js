let inputDate1 = prompt("Nhập ngày thứ 1(YYYY-MM-DD): ");
let inputDate2 = prompt("Nhập ngày thứ 2(YYYY-MM-DD): ");

const date1 = new Date(inputDate1); 
const date2 = new Date(inputDate2);

if(isNaN(date1.getTime()) || isNaN(date2.getTime())){
    alert('Vui lòng nhập đúng định dạng!');
}else{
    let khoangCachMs = Math.abs(date2-date1);
    let soNgayChenhLech = Math.ceil(khoangCachMs / (1000 * 60 * 60 * 24));
    alert(`Độ lệch là ${soNgayChenhLech} ngày`);
}