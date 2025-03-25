let numbers = [5, 3, 8, 3, 2, 8, 1, 5, 6, 2];

let uniqueSortedNumbers = [...new Set(numbers)].sort((a, b) => a - b);
//set tạo ra mảng như array nhưng tự động loại bỏ các phần tử trùng lặp.
console.log(`Mảng ban đầu: ${numbers}`);
console.log("Mảng sau khi loại bỏ phần tử trùng nhau và sắp xếp:", uniqueSortedNumbers);


/*for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] === numbers[j]) {
            numbers.splice(j, 1); // Xóa phần tử trùng
            j--; // Giảm j để tránh bỏ sót phần tử tiếp theo
        }
    }
}

// Sắp xếp mảng bằng thuật toán Bubble Sort
for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
        if (numbers[j] > numbers[j + 1]) {
            // Hoán đổi vị trí nếu phần tử trước lớn hơn phần tử sau
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}*/