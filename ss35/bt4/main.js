let employee = JSON.parse(localStorage.getItem("employee")) || [
    { name: "Nguyễn Văn A", position: "Developer" },
    { name: "Trần Thị B", position: "Designer" },
    { name: "Phạm Văn C", position: "Project Manager" },
    { name: "Lê Thị D", position: "QA Engineer" },
    { name: "Vũ Văn E", position: "DevOps" },
    { name: "Hoàng Thị F", position: "HR Manager" },
    { name: "Nguyễn Văn G", position: "Backend Developer" },
    { name: "Trần Thị H", position: "Frontend Developer" },
    { name: "Lê Văn I", position: "Data Scientist" },
    { name: "Phạm Thị J", position: "AI Engineer" }
];

function saveToLocalStorage(){
    localStorage.setItem("employee",JSON.stringify(employee));
};

let currentPage = 1;
const rowsPerPage = 3;

function displayEmployee() {
    let table = document.getElementById("employeeTable");
    table.innerHTML = "";

    let start = (currentPage - 1) * rowsPerPage;
    let end = start + rowsPerPage;
    let paginatedEmployee = employee.slice(start, end);

    paginatedEmployee.forEach((employee, index) => {
        let row = `<tr>
            <td>${start + index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.position}</td>
        </tr>`;
        table.innerHTML += row;
    });

    updatePagination();
}

function addEmployee() {
    let name = document.getElementById("nameInput").value.trim();
    let position = document.getElementById("positionInput").value.trim();

    if (name === "" || position === "") {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }

    employee.push({ name, position });
    document.getElementById("nameInput").value = "";
    document.getElementById("positionInput").value = "";

    saveToLocalStorage();
    displayEmployee();
}

function updatePagination() {
    let pageNumbers = document.getElementById("pageNumbers");
    pageNumbers.innerHTML = "";

    let totalPages = Math.ceil(employee.length / rowsPerPage);
    for (let i = 1; i <= totalPages; i++) {
        let button = document.createElement("button");
        button.textContent = i;
        button.classList.toggle("active", i === currentPage);
        button.onclick = function () {
            currentPage = i;
            displayEmployee();
        };
        pageNumbers.appendChild(button);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayEmployee();
    }
}

function nextPage() {
    let totalPages = Math.ceil(employee.length / rowsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayEmployee();
    }
}

displayEmployee();
