let subjectList = ["Toán","Lý","Hóa"];

const listContainer = document.getElementById("subjectL");
const inputField = document.getElementById("subject");

function rendersubjectList(){
    listContainer.innerHTML="";
    subjectList.forEach(subject =>{
        let li = document.createElement("li");
        li.textContent = subject;
        listContainer.appendChild(li);
    });
}

function addSubject(){
    let subjectInput = inputField.value.trim();
    if(subjectInput === ""){
        alert("tên môn học không được để trống!")
    }else{
        subjectList[subjectList.length]=subjectInput;
        rendersubjectList();
        inputField.value="";
    }
}

rendersubjectList();