document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const positionInput = document.getElementById("position");
    const addButton = document.getElementById("add-btn");
    const employeeList = document.getElementById("employee-list");

    let employees = JSON.parse(localStorage.getItem("employees")) || [];

    function saveEmployees() {
        localStorage.setItem("employees", JSON.stringify(employees));
    }

    function renderEmployees() {
        employeeList.innerHTML = "";
        employees.forEach((employee, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${employee.name}</td>
                <td>${employee.position}</td>
            `;

            employeeList.appendChild(row);
        });
    }

    addButton.addEventListener("click", function () {
        const name = nameInput.value.trim();
        const position = positionInput.value.trim();

        if (name === "" || position === "") {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        employees.push({ name, position });
        saveEmployees();
        renderEmployees();

        nameInput.value = "";
        positionInput.value = "";
    });

    renderEmployees();
});
