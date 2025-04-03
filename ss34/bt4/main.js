document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("todo-input");
    const addButton = document.getElementById("add-btn");
    const todoList = document.getElementById("todo-list");

    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    function saveTodos() {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    function renderTodos() {
        todoList.innerHTML = "";
        todos.forEach((todo, index) => {
            const li = document.createElement("li");
            li.textContent = todo;

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Xóa";
            deleteBtn.classList.add("delete-btn");

            deleteBtn.addEventListener("click", function () {
                todos.splice(index, 1);
                saveTodos();
                renderTodos();
            });

            li.appendChild(deleteBtn);
            todoList.appendChild(li);
        });
    }

    addButton.addEventListener("click", function () {
        const newTodo = input.value.trim();
        if (newTodo) {
            todos.push(newTodo);
            saveTodos();
            renderTodos();
            input.value = "";
        } else {
            alert("Vui lòng nhập công việc!");
        }
    });

    renderTodos();
});
