let employees = [];
let running = true;

while (running) {
    let choice = Number(prompt(`================ MENU ================\n\n`
        + `1. Thêm nhân viên mới\n`
        + `2. Xóa nhân viên theo ID\n`
        + `3. Cập nhật mức lương theo ID\n`
        + `4. Tìm kiếm nhân viên theo tên\n`
        + `5. Hiển thị danh sách nhân viên\n`
        + `6. Thoát\n\n`
        + `====================================\nLựa chọn của bạn:`));
    
    switch (choice) {
        case 1:
            let id = prompt("Nhập ID nhân viên:");
            let name = prompt("Nhập tên nhân viên:");
            let position = prompt("Nhập vị trí công việc:");
            let salary = Number(prompt("Nhập mức lương:"));
            employees.push({ id, name, position, salary });
            alert("Nhân viên đã được thêm thành công!");
            break;
        
        case 2:
            let deleteId = prompt("Nhập ID nhân viên cần xóa:");
            let index = employees.findIndex(emp => emp.id === deleteId);
            if (index !== -1) {
                let confirmDelete = confirm("Bạn có chắc chắn muốn xóa nhân viên này?");
                if (confirmDelete) {
                    employees.splice(index, 1);
                    alert("Nhân viên đã được xóa!");
                }
            } else {
                alert("Không tìm thấy nhân viên với ID này!");
            }
            break;
        
        case 3:
            let updateId = prompt("Nhập ID nhân viên cần cập nhật lương:");
            let employee = employees.find(emp => emp.id === updateId);
            if (employee) {
                let newSalary = Number(prompt("Nhập mức lương mới:"));
                employee.salary = newSalary;
                alert("Mức lương đã được cập nhật!");
            } else {
                alert("Không tìm thấy nhân viên với ID này!");
            }
            break;
        
        case 4:
            let searchName = prompt("Nhập tên nhân viên cần tìm:").toLowerCase();
            let foundEmployees = employees.filter(emp => emp.name.toLowerCase().includes(searchName));
            if (foundEmployees.length > 0) {
                alert("Danh sách nhân viên tìm thấy:\n" + foundEmployees.map(emp => `${emp.id} - ${emp.name} - ${emp.position} - ${emp.salary}`).join("\n"));
            } else {
                alert("Không tìm thấy nhân viên nào!");
            }
            break;
        
        case 5:
            if (employees.length === 0) {
                alert("Chưa có nhân viên nào!");
            } else {
                alert("Danh sách nhân viên:\n" + employees.map(emp => `${emp.id} - ${emp.name} - ${emp.position} - ${emp.salary}`).join("\n"));
            }
            break;
        
        case 6:
            alert("Thoát chương trình");
            running = false;
            break;
        
        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại! (1-6)");
    }
}
