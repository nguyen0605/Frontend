let products = [];
let running = true;

while (running) {
    let choice = Number(prompt(
        `=========== QUẢN LÝ SẢN PHẨM ===========\n\n`
        + `1. Thêm sản phẩm\n`
        + `2. Hiển thị tất cả sản phẩm\n`
        + `3. Xem chi tiết sản phẩm theo ID\n`
        + `4. Cập nhật sản phẩm theo ID\n`
        + `5. Xóa sản phẩm theo ID\n`
        + `6. Lọc sản phẩm theo khoảng giá\n`
        + `7. Thoát\n\n`
        + `========================================\nLựa chọn của bạn:`));

    switch (choice) {
        case 1:
            let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;
            let name = prompt("Nhập tên sản phẩm:");
            let price = Number(prompt("Nhập giá sản phẩm:"));
            let category = prompt("Nhập danh mục sản phẩm:");
            let quantity = Number(prompt("Nhập số lượng trong kho:"));
            products.push({ id, name, price, category, quantity });
            alert("Sản phẩm đã được thêm thành công!");
            break;

        case 2:
            if (products.length === 0) {
                alert("Chưa có sản phẩm nào!");
            } else {
                let list = products.map(p =>
                    `${p.id} - ${p.name} - ${p.price}đ - ${p.category} - SL: ${p.quantity}`
                ).join("\n");
                alert("Danh sách sản phẩm:\n" + list);
            }
            break;

        case 3:
            let detailId = Number(prompt("Nhập ID sản phẩm cần xem chi tiết:"));
            let found = products.find(p => p.id === detailId);
            if (found) {
                alert(
                    `Chi tiết sản phẩm:\n\n`
                    + `ID: ${found.id}\n`
                    + `Tên: ${found.name}\n`
                    + `Giá: ${found.price}đ\n`
                    + `Danh mục: ${found.category}\n`
                    + `Số lượng: ${found.quantity}`
                );
            } else {
                alert("Không tìm thấy sản phẩm với ID này.");
            }
            break;

        case 4:
            let updateId = Number(prompt("Nhập ID sản phẩm cần cập nhật:"));
            let productToUpdate = products.find(p => p.id === updateId);
            if (productToUpdate) {
                productToUpdate.name = prompt("Tên mới:", productToUpdate.name);
                productToUpdate.price = Number(prompt("Giá mới:", productToUpdate.price));
                productToUpdate.category = prompt("Danh mục mới:", productToUpdate.category);
                productToUpdate.quantity = Number(prompt("Số lượng mới:", productToUpdate.quantity));
                alert("Sản phẩm đã được cập nhật.");
            } else {
                alert("Không tìm thấy sản phẩm.");
            }
            break;

        case 5:
            let deleteId = Number(prompt("Nhập ID sản phẩm cần xóa:"));
            let index = products.findIndex(p => p.id === deleteId);
            if (index !== -1) {
                let confirmDelete = confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
                if (confirmDelete) {
                    products.splice(index, 1);
                    alert("Sản phẩm đã được xóa.");
                }
            } else {
                alert("Không tìm thấy sản phẩm.");
            }
            break;

        case 6:
            let min = Number(prompt("Nhập giá tối thiểu:"));
            let max = Number(prompt("Nhập giá tối đa:"));
            let filtered = products.filter(p => p.price >= min && p.price <= max);
            if (filtered.length > 0) {
                let result = filtered.map(p =>
                    `${p.id} - ${p.name} - ${p.price}đ - ${p.category} - SL: ${p.quantity}`
                ).join("\n");
                alert("Các sản phẩm trong khoảng giá:\n" + result);
            } else {
                alert("Không có sản phẩm nào trong khoảng giá này.");
            }
            break;

        case 7:
            alert("Thoát chương trình.");
            running = false;
            break;

        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại (1-7).");
    }
}
