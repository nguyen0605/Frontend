let contacts = [];
let running = true;

while (running) {
    let choice = Number(prompt(`=========== MENU ===========\n\n`
        + `1. Thêm liên hệ\n`
        + `2. Hiển thị danh bạ\n`
        + `3. Tìm kiếm theo số điện thoại\n`
        + `4. Cập nhật liên hệ theo ID\n`
        + `5. Xóa liên hệ theo ID\n`
        + `6. Thoát\n\n`
        + `============================\nLựa chọn của bạn:`));

    switch (choice) {
        case 1:
            let id = contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1;
            let name = prompt("Nhập tên:");
            let email = prompt("Nhập email:");
            let phone = prompt("Nhập số điện thoại:");
            contacts.push({ id, name, email, phone });
            alert("Đã thêm liên hệ thành công!");
            break;

        case 2:
            if (contacts.length === 0) {
                alert("Danh bạ trống!");
            } else {
                let list = contacts.map(c => `${c.id} - ${c.name} - ${c.email} - ${c.phone}`).join("\n");
                alert("Danh sách liên hệ:\n" + list);
            }
            break;

        case 3:
            let searchPhone = prompt("Nhập số điện thoại cần tìm:");
            let found = contacts.find(c => c.phone === searchPhone);
            if (found) {
                alert(`Tìm thấy:\n${found.id} - ${found.name} - ${found.email} - ${found.phone}`);
            } else {
                alert("Không tìm thấy số điện thoại này.");
            }
            break;

        case 4:
            let updateId = Number(prompt("Nhập ID liên hệ cần cập nhật:"));
            let contactToUpdate = contacts.find(c => c.id === updateId);
            if (contactToUpdate) {
                contactToUpdate.name = prompt("Nhập tên mới:", contactToUpdate.name);
                contactToUpdate.email = prompt("Nhập email mới:", contactToUpdate.email);
                contactToUpdate.phone = prompt("Nhập số điện thoại mới:", contactToUpdate.phone);
                alert("Đã cập nhật liên hệ!");
            } else {
                alert("Không tìm thấy liên hệ với ID này.");
            }
            break;

        case 5:
            let deleteId = Number(prompt("Nhập ID liên hệ cần xóa:"));
            let index = contacts.findIndex(c => c.id === deleteId);
            if (index !== -1) {
                let confirmDelete = confirm("Bạn có chắc chắn muốn xóa liên hệ này?");
                if (confirmDelete) {
                    contacts.splice(index, 1);
                    alert("🗑️ Đã xóa liên hệ.");
                }
            } else {
                alert("❌ Không tìm thấy liên hệ với ID này.");
            }
            break;

        case 6:
            alert("👋 Thoát chương trình!");
            running = false;
            break;

        default:
            alert("⚠️ Lựa chọn không hợp lệ, vui lòng chọn từ 1 đến 6!");
    }
}
