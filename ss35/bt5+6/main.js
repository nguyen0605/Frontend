const categories = JSON.parse(localStorage.getItem('categories')) || [
    { id: "DM001", name: "Quần áo", status: 1 },
    { id: "DM002", name: "Kính mắt", status: 0 },
    { id: "DM003", name: "Giày dép", status: 1 },
    { id: "DM004", name: "Thời trang nam", status: 0 },
    { id: "DM005", name: "Thời trang nữ", status: 0 },
    { id: "DM006", name: "Hoa quả", status: 0 },
    { id: "DM007", name: "Rau", status: 1 },
    { id: "MD008", name: "Điện thoại", status: 0 },
];

function renderCategories(categories){
    let body = document.getElementById("listCategory");
    body.innerHTML="";

    categories.forEach(category =>{
        const isActive = category.status === 1;
        const statusText = isActive ? "Đang hoạt động" : "Ngừng hoạt động";
        const statusClass = isActive ? "active" : "inactive";
        body.innerHTML += `
            <tr>
                <td>${category.id}</td>
                <td>${category.name}</td>
                <td>
                    <div class="status ${statusClass}">
                        <span class="dot"></span>
                        ${statusText}
                    </div>
                </td>
                <td>
                    <i class="fa-solid fa-trash trash"></i>
                    <i class="fa-solid fa-pen pen"></i>
                </td>
            </tr>
        `
    })
};

renderCategories(categories);

function toggleAddCategory() {
    const overlay = document.getElementById("overlay");
    const box = document.getElementById("addCategoryBox");

    // Toggle hiển thị
    const isVisible = box.style.display === "block";
    if (isVisible) {
        overlay.style.display = "none";
        box.style.display = "none";
    } else {
        overlay.style.display = "block";
        box.style.display = "block";
        
        // Reset form: xóa class và cảnh báo
        const inputs = box.querySelectorAll("input");
        inputs.forEach(input => {
            input.classList.remove("is-invalid");
        });

        const invalidFeedbacks = box.querySelectorAll(".invalid-feedback");
        invalidFeedbacks.forEach(div => {
            div.style.display = "none";
        });
    }
}

function add() {
    const box = document.getElementById("addCategoryBox");
    const inputs = box.querySelectorAll("input[type='text']");
    let isValid = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            input.classList.add("is-invalid");
            const feedback = input.nextElementSibling;
            if (feedback && feedback.classList.contains("invalid-feedback")) {
                feedback.style.display = "block";
            }
            isValid = false;
        } else {
            input.classList.remove("is-invalid");
            const feedback = input.nextElementSibling;
            if (feedback && feedback.classList.contains("invalid-feedback")) {
                feedback.style.display = "none";
            }
        }
    });

    if (isValid) {
        let inputID = document.getElementById("categoryID").value.trim();
        let inputName = document.getElementById("categoryName").value.trim();
    
        // Lấy trạng thái
        let status = document.getElementById("statusActive").checked ? 1 : 0;
    
        // Thêm vào mảng categories
        categories.push({
            id: inputID,
            name: inputName,
            status: status
        });
    
        alert("Thêm thành công!");
    
        // Reset form
        document.getElementById("categoryID").value = "";
        document.getElementById("categoryName").value = "";
        document.getElementById("statusActive").checked = true;
    
        // Đóng box thêm danh mục
        localStorage.setItem('categories',JSON.stringify(categories));
        toggleAddCategory();
        renderCategories(categories);
    }
};

//LỌC DANH MỤC
function filteredCategories() {
    let filterCondition = document.getElementById("status").value;

    if (filterCondition === "all") {
        renderCategories(categories);
    } else {
        renderCategories(categories.filter(cat => cat.status === parseInt(filterCondition)));
    }
}

