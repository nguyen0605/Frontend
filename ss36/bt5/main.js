
const taskInput = document.getElementById("taskName");
const addBtn = document.querySelector(".task-input button");

let taskList = JSON.parse(localStorage.getItem("taskList")) || [];

function saveTasks() {
    localStorage.setItem("taskList", JSON.stringify(taskList));
}

function renderTasks() {
    // Xóa nội dung cũ
    document.getElementById("pendingTasks").innerHTML = "";
    document.getElementById("inProgressTasks").innerHTML = "";
    document.getElementById("doneTasks").innerHTML = "";

    taskList.forEach((task, index) => {
        const taskDiv = document.createElement("div");
        taskDiv.className = "task";

        const content = document.createElement("p");
        content.innerText = task.name;

        taskDiv.appendChild(content);

        if (task.status !== "done") {
            const btn = document.createElement("button");
            btn.innerText = "Chuyển tiếp";
            btn.onclick = function () {
                changeStatus(index);
            };
            taskDiv.appendChild(btn);
        }

        if (task.status === "pending") {
            document.getElementById("pendingTasks").appendChild(taskDiv);
        } else if (task.status === "inProgress") {
            document.getElementById("inProgressTasks").appendChild(taskDiv);
        } else if (task.status === "done") {
            document.getElementById("doneTasks").appendChild(taskDiv);
        }
    });
}

function addTask() {
    const name = taskInput.value.trim();
    if (name === "") {
        alert("Vui lòng nhập tên công việc!");
        return;
    }

    taskList.push({ name: name, status: "pending" });
    saveTasks();
    renderTasks();
    taskInput.value = "";
}

    function changeStatus(index) {
        if (taskList[index].status === "pending") {
            taskList[index].status = "inProgress";
        } else if (taskList[index].status === "inProgress") {
            taskList[index].status = "done";
        }
        saveTasks();
        renderTasks();
    }

addBtn.onclick = addTask;

renderTasks(); 

