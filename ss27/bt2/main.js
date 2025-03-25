let students = [];
let running = true;

while (running) {
    let choice = parseInt(prompt(
        "===== MENU QUẢN LÝ SINH VIÊN =====\n" +
        "1. Nhập danh sách sinh viên\n" +
        "2. Hiển thị danh sách sinh viên\n" +
        "3. Tìm sinh viên theo tên\n" +
        "4. Xóa sinh viên khỏi danh sách\n" +
        "5. Thoát\n" +
        "===================================\n" +
        "Nhập lựa chọn của bạn:"
    ));

    switch (choice) {
        case 1:
            let numStudents = parseInt(prompt("Nhập số lượng sinh viên:"));
            if (isNaN(numStudents) || numStudents <= 0) {
                alert("Số lượng sinh viên không hợp lệ!");
            } else {
                students = [];
                for (let i = 0; i < numStudents; i++) {
                    let name = prompt(`Nhập tên sinh viên thứ ${i + 1}:`);
                    students.push(name);
                }
                alert("Danh sách sinh viên đã được cập nhật!");
            }
            break;

        case 2:
            if (students.length === 0) {
                alert("Danh sách sinh viên trống!");
            } else {
                alert("Danh sách sinh viên:\n" + students.join("\n"));
            }
            break;

        case 3:
            if (students.length === 0) {
                alert("Danh sách sinh viên trống!");
            } else {
                let searchName = prompt("Nhập tên sinh viên cần tìm:");
                let foundStudents = students.filter(student => student.includes(searchName));

                if (foundStudents.length > 0) {
                    alert("Sinh viên tìm thấy:\n" + foundStudents.join("\n"));
                } else {
                    alert("Không tìm thấy sinh viên trong danh sách.");
                }
            }
            break;

        case 4:
            if (students.length === 0) {
                alert("Danh sách sinh viên trống!");
            } else {
                let deleteName = prompt("Nhập tên sinh viên cần xóa:");
                let index = students.indexOf(deleteName);

                if (index !== -1) {
                    students.splice(index, 1);
                    alert("Đã xóa sinh viên: " + deleteName);
                } else {
                    alert("Không tìm thấy sinh viên trong danh sách.");
                }
            }
            break;

        case 5:
            alert("Thoát chương trình.");
            running = false;
            break;

        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại!");
    }
}
