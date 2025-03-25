let arr = [];

for(let i = 0; i<5 ;i++){
    arr.push(Math.floor(Math.random()*100)+1);
}

let even_sum=0, odd_sum=0;

for(let i =0; i<arr.length;i++){
    if(arr[i]%2==0){
        even_sum++;
    }else{
        odd_sum++;
    }
}
console.log(`Mảng hiện tại: ${arr}`);
console.log(`Tổng các số chẵn: ${even_sum}`);
console.log(`Tổng các số lẻ: ${odd_sum}`);


