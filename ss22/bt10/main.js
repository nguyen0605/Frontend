let array=[];
let size=0, running=true;
while(running){
    let choice = Number(prompt(`=========MENU======== 
          1.Nhập vào mảng 
          2.Hiện thỉ mảng
          3.Thêm phần tử
          4.Sửa phần tử
          5.Xóa phần tử
          6.Thoát
=====================
Lựa chọn của bạn:`));
    switch(choice){
        case 1:
            size= Number(prompt("Nhập số lượng phần tử của mảng:"));
            array=[];
            for(let i=0;i<size;i++){
                array.push(Number(prompt(`Nhập phần tử thứ ${i+1}:`)));
            }
            break;
        case 2:
            if(array.length===0){
                alert(`Mảng chưa được khởi tạo!`);
            }else{
                alert(`Mảng hiện tại: ${array}`);
            }
            break;
        case 3:
            if(array.length===0){
                alert(`Mảng chưa được khởi tạo!`);
            }else{
                let pos = Number(prompt("Nhập vị trí cần thêm:"));
                if(pos >=0 && pos <= array.length){
                    let newElement = Number(prompt("Nhập phần tử muốn thêm:"));
                    array.splice(pos,0,newElement);
                }else{
                    alert("Vị trí không hợp lệ!");
                }
            }
            break;
        case 4:
            if(array.length===0){
                alert(`Mảng chưa được khởi tạo!`);
            }else{
                let editIdx = Number(prompt("Nhập vị trí cần sửa:"));
                if(editIdx >=0 && editIdx <= array.length){
                    array[editIdx] = Number(prompt("NHập giá trị mới:"));
                }else{
                    alert("Vị trí không hợp lệ!");
                }
            }
            break;
        case 5:
            if(array.length===0){
                alert(`Mảng chưa được khởi tạo!`);
            }else{
                let deleteIdx = Number(prompt("Nhập vị trí cần xóa:"));
                if(deleteIdx >=0 && deleteIdx <= array.length){
                    array.splice(deleteIdx,1);
                }else{
                    alert("Vị trí không hợp lệ!");
                }
            }
            break;
        case 6:
            alert("Thoát chương trình");
            running=false;
            break;
        default: alert("Lựa chọn không hợp lệ, vui lòng chọn lại! (1-6)");
    }
}