let courses = JSON.parse(localStorage.getItem("courses")) || [
    {
        id: 1,
        content: 'Learn Javascript Session 01',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Anh Bách',
    },
    {
        id: 2,
        content: 'Learn Javascript Session 2',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Lâm thì',
    },
    {
        id: 3,
        content: 'Learn CSS Session 1',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Hiếu Ci ớt ớt',
    }
];


const tbody = document.querySelector("#table tbody");

function saveToLocalStorage(){
    localStorage.setItem("courses",JSON.stringify(courses))
};

function renderCourses(){
    tbody.innerHTML="";

    courses.forEach( (course,index) => {
        tbody.innerHTML += `
            <tr>
                <th scope="row">${index+1}</th>
                <td>${course.content}</td>
                <td>${course.dueDate}</td>
                <td>${course.status}</td>
                <td>${course.assignedTo}</td>
                <td>
                    <button id="${course.id}" class="edit">Sửa</button> 
                    <button class="delete" id="${course.id}">Xóa</button>
                </td>
            </tr>
        `
    });

    document.querySelectorAll(".edit").forEach(button => {
        button.addEventListener("click",function(){
            editCourse(this.getAttribute("id"));
        });
    });

    document.querySelectorAll(".delete").forEach(button => {
        button.addEventListener("click", function() {
            deleteCourse(this.getAttribute("id"));
        });
    });
}

document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();

    const newContent = document.getElementById("content").value.trim();
    const date = document.getElementById("date").value;
    const status = document.getElementById("status").value;
    const assignedTo = document.getElementById("username").value.trim();

    if(newContent === "" || date === "" || assignedTo === ""){
        alert("Vui lòng điền đầy đủ thông tin !");
        return;
    }

    courses.push({
        id: courses.length+1,
        content: newContent,
        dueDate: date,
        status: status,
        assignedTo: assignedTo
    })

    saveToLocalStorage();

    document.getElementById("form").reset();

    renderCourses();
});

function editCourse(id) {
    const courseIndex = courses.findIndex(c => c.id == id); 
    if (courseIndex !== -1) {
        const newContent = prompt("Nhập nội dung mới: ", courses[courseIndex].content);
        if (newContent === null || newContent.trim() === "") return;

        const newDate = prompt("Nhập ngày mới: ", courses[courseIndex].dueDate);
        if (newDate === null || newDate.trim() === "") return;

        const newStatus = prompt("Nhập trạng thái mới: ", courses[courseIndex].status);
        if (newStatus === null || newStatus.trim() === "") return;

        const newAssignedTo = prompt("Nhập người thực hiện mới: ", courses[courseIndex].assignedTo);
        if (newAssignedTo === null || newAssignedTo.trim() === "") return;

        courses[courseIndex] = {
            id: courses[courseIndex].id,
            content: newContent,
            dueDate: newDate,
            status: newStatus,
            assignedTo: newAssignedTo
        };

        saveToLocalStorage();
        renderCourses();
    }
}

function deleteCourse(id){
    courses = courses.filter(c => c.id != id);
    saveToLocalStorage();
    renderCourses();
};

renderCourses();