function sortEvenNumbers(arr) {
    if (!Array.isArray(arr) || !arr.every(item => typeof item === 'number' && !isNaN(item))) {
        return "dữ liệu không hợp lệ";
    }

    const result = arr.slice();

    const evenNumbers = arr
        .map((num, idx) => ({ num, idx }))
        .filter(item => item.num % 2 === 0)
        .sort((a, b) => a.num - b.num);

    if (evenNumbers.length === 0) {
        return result;
    }

    const sortedEvenNumbers = evenNumbers.map(item => item.num);

    let evenIndex = 0;
    for (let i = 0; i < result.length; i++) {
        if (result[i] % 2 === 0) {
            result[i] = sortedEvenNumbers[evenIndex];
            evenIndex++;
        }
    }

    return result;
}

console.log(sortEvenNumbers([5, 8, 6, 3, 4, 2, 7]));
console.log(sortEvenNumbers([5, 9, 6, 4, 1, 8, 3]));
console.log(sortEvenNumbers("abc"));
