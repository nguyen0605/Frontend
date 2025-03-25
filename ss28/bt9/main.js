let books = [];
let running = true;

while (running) {
    let choice = Number(prompt(`================ MENU ================\n\n`
        + `1. Thêm sách mới\n`
        + `2. Hiển thị danh sách sách\n`
        + `3. Tìm kiếm sách theo tiêu đề\n`
        + `4. Cập nhật trạng thái mượn/trả sách theo ID\n`
        + `5. Xóa sách theo ID\n`
        + `6. Sắp xếp sách theo giá tăng dần\n`
        + `7. Thoát\n\n`
        + `====================================\nLựa chọn của bạn:`));
    
    switch (choice) {
        case 1:
            let id = Number(prompt("Nhập ID sách:"));
            let title = prompt("Nhập tên sách:");
            let author = prompt("Nhập tác giả:");
            let year = Number(prompt("Nhập năm xuất bản:"));
            let price = Number(prompt("Nhập giá sách:"));
            let isAvailable = confirm("Sách có sẵn để mượn không? (OK: Có, Cancel: Không)");
            books.push({ id, title, author, year, price, isAvailable });
            alert("Sách đã được thêm thành công!");
            break;
        
        case 2:
            if (books.length === 0) {
                alert("Chưa có sách nào!");
            } else {
                alert("Danh sách sách:\n" + books.map(book => `${book.id} - ${book.title} - ${book.author} - ${book.year} - ${book.price} - ${book.isAvailable ? "Có sẵn" : "Đã mượn"}`).join("\n"));
            }
            break;
        
        case 3:
            let searchTitle = prompt("Nhập tiêu đề sách cần tìm:").toLowerCase();
            let foundBooks = books.filter(book => book.title.toLowerCase().includes(searchTitle));
            if (foundBooks.length > 0) {
                alert("Danh sách sách tìm thấy:\n" + foundBooks.map(book => `${book.id} - ${book.title} - ${book.author} - ${book.year} - ${book.price} - ${book.isAvailable ? "Có sẵn" : "Đã mượn"}`).join("\n"));
            } else {
                alert("Không tìm thấy sách nào!");
            }
            break;
        
        case 4:
            let updateId = Number(prompt("Nhập ID sách cần cập nhật trạng thái:"));
            let book = books.find(book => book.id === updateId);
            if (book) {
                book.isAvailable = !book.isAvailable;
                alert("Trạng thái sách đã được cập nhật!");
            } else {
                alert("Không tìm thấy sách với ID này!");
            }
            break;
        
        case 5:
            let deleteId = Number(prompt("Nhập ID sách cần xóa:"));
            let index = books.findIndex(book => book.id === deleteId);
            if (index !== -1) {
                let confirmDelete = confirm("Bạn có chắc chắn muốn xóa sách này?");
                if (confirmDelete) {
                    books.splice(index, 1);
                    alert("Sách đã được xóa!");
                }
            } else {
                alert("Không tìm thấy sách với ID này!");
            }
            break;
        
        case 6:
            books.sort((a, b) => a.price - b.price);
            alert("Sách đã được sắp xếp theo giá tăng dần!");
            break;
        
        case 7:
            alert("Thoát chương trình");
            running = false;
            break;
        
        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại! (1-7)");
    }
}
