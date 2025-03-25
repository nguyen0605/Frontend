function formatDates(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    if (arr.length === 0) {
        return "Mảng không có phần tử nào";
    }

    let result = arr.map(dateStr => {  //dùng map để áp dụng cho tất cả phần tử
        let parts = dateStr.split("-");//tách từng phần tử ra dựa theo dấu "-"
        if (parts.length === 3) {      //kiểm tra xem có đủ 3 phần năm, tháng, ngày
            return `${parts[2]}/${parts[1]}/${parts[0]}`;
        }
        return null;                  //nếu không đủ thì trả về null
    }).filter(date => date !== null); //loại bỏ những phần tử null

    return result.length > 0 ? result : "Không có ngày hợp lệ";
}

console.log(formatDates(["2025-03-10", "2024-12-25", "2023-07-01"]));
console.log(formatDates([]));
console.log(formatDates("abc"));
