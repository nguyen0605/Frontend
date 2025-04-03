let todoList = [
    { id: 1, task: "Hit the gym", completed: false },
    { id: 2, task: "Pay bills", completed: true },
    { id: 3, task: "Meet George", completed: false },
    { id: 4, task: "Buy eggs", completed: false },
    { id: 5, task: "Read a book", completed: false },
    { id: 6, task: "Organize office", completed: false }
];

const listContainer = document.getElementById("myUL");

function renderTodoList(){
    listContainer.innerHTML = "";
    todoList.forEach((todo,index) => {
        let li = document.createElement("li");
        li.textContent = todo.task;

        listContainer.appendChild(li);
    });
}


const addBtn = document.querySelector(".addBtn");
const inputField = document.getElementById("myInput");

addBtn.addEventListener("click",function(){
    let inputValue = inputField.value.trim();   
    if(inputValue === ""){
        alert("Bạn chưa nhập mục mới");
        return;
    }

    todoList.push( {id: todoList.length+1, task:inputValue, completed: false});
    inputField.value ="";
    renderTodoList();
});

renderTodoList();