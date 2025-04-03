function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === ""){
        alert("Vui lòng nhập công việc!");
    }else{
        let taskList = document.getElementById("taskList");
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
            if (newText !== null) taskSpan.textContent = newText.trim();
        };
        
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Xóa";
        deleteButton.onclick = function () {
            taskList.removeChild(taskDiv);
        };
        
        taskDiv.appendChild(taskSpan);
        taskDiv.appendChild(btnField);
        btnField.appendChild(editButton);
        btnField.appendChild(deleteButton);
        taskList.appendChild(taskDiv);
        
        taskInput.value = "";
    }
}