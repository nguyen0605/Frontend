let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasksToStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; 

    tasks.forEach((taskText, index) => {
        let taskDiv = document.createElement("div");
        taskDiv.className = "task";

        let taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        let btnField = document.createElement("div");
        btnField.className = "btnContainer";

        let editButton = document.createElement("button");
        editButton.textContent = "Sửa";
        editButton.onclick = function () {
            let newText = prompt("Nhập nội dung mới:", taskSpan.textContent);
            if (newText !== null) {
                newText = newText.trim();
                if (newText !== "") {
                    tasks[index] = newText;
                    saveTasksToStorage();
                    renderTasks();
                }
            }
        };

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Xóa";
        deleteButton.onclick = function () {
            tasks.splice(index, 1);
            saveTasksToStorage();
            renderTasks();
        };

        btnField.appendChild(editButton);
        btnField.appendChild(deleteButton);
        taskDiv.appendChild(taskSpan);
        taskDiv.appendChild(btnField);
        taskList.appendChild(taskDiv);
    });
}

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Vui lòng nhập công việc!");
    } else {
        tasks.push(taskText);
        saveTasksToStorage();
        renderTasks();
        taskInput.value = "";
    }
}
renderTasks();
