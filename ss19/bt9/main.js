// Kết quả: "javascript5" (Chuỗi + số => nối chuỗi)
let result = "javascript" + 5; 
console.log(result); // "javascript5"

// Kết quả: NaN (Chuỗi trừ số không hợp lệ => NaN)
result = "javascript" - 1;
console.log(result); // NaN

// Kết quả: "32" (Chuỗi + số => nối chuỗi)
result = "3" + 2;
console.log(result); // "32"

// Kết quả: 1 (Chuỗi chứa số => ép kiểu tự động và thực hiện phép trừ)
result = "5" - 4;
console.log(result); // 1

// Kết quả: false ("123" là số hợp lệ => không phải NaN)
result = isNaN("123");
console.log(result); // false

// Kết quả: true ("hello" không phải số => NaN)
result = isNaN("hello");
console.log(result); // true

// Kết quả: false (Number.isNaN kiểm tra chính xác, "123" không phải NaN)
result = Number.isNaN("123");
console.log(result); // false

// Kết quả: true (Number.isNaN(NaN) => true vì NaN chính là NaN)
result = Number.isNaN(NaN);
console.log(result); // true
