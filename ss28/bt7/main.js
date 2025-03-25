let  students=[

    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature : 7 } },

    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature : 5} },

    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature : 9 } }

];

function filterStudentsByAverage(students) {
    return students.filter(student => {
        const average = (student.scores.math + student.scores.english + student.scores.literature) / 3;
        return average >= 8;
    });
}

const filteredStudents = filterStudentsByAverage(students);
console.log("Danh sách sinh viên có điểm trung bình >= 8:");
filteredStudents.forEach(student => {
    const average = (student.scores.math + student.scores.english + student.scores.literature) / 3;
    console.log(`Tên: ${student.name}, Điểm trung bình: ${average.toFixed(2)}`);
});
