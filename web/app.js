document.getElementById("candidate_form").addEventListener("submit", checkForm)

function checkForm() {
    event.preventDefault();

    const candidate = document.getElementById("candidate_form")

    const student = {}
    student.name = candidate.name.value
    student.birthDay = candidate.date.value
    student.sex = candidate.sex.value
    student.age = calculateAge(student.birthDay)

    let error = ""
    if (student.name == "")
        error = "Введите имя студента"
    else if (student.name.split(" ").length < 2)
        error = "Введено не корректное имя"
    else if (student.name.length <= 5 || student.name.length > 50)
        error = "Введено не корректное имя"
    else if (student.age == 0)
        error = "Введите правильный возраст"

    if (error != "") {
        document.getElementById("errorCase").innerHTML = error
    } else {
        addStudentInTable(student)
    }


    // const studentsTable = document.getElementById("studentsTab")
    // const rows = studentsTable.getElementsByTagName("tbody").getElementsByTagName('tr')
    // // const array = document.getElementsByClassName("students-tab-colAge")
    // for (let i = 0; i < array.length; i++) {
    //     console.log(array[i].innerHTML)
    // }


    // let tab = document.getElementById("studentsTab").getElementsByTagName("tbody")
    let avgAge = 0
    // for (let i = 0; i < tab.length; i++) {
    //     for (let j = 0; j < tab.rows[i].cells.length; j++) {
    //         if (j === 3) {
    //             avgAge += tab.rows[i].cells[j].value
    //         }
    //     }
    // }
    // console.log(avgAge)

    const cells = document.querySelectorAll("table td:nth-child(1)")
    console.log(cells.values())
    // const reducer = (previousValue, currentValue) => previousValue + currentValue
    // console.log(Array.from(cells)).reduce(reducer)

}

function calculateAge(birthDay) {
    const age = Math.floor((new Date() - new Date(birthDay)) / 1000 / 60 / 60 / 24 / 365)
    if (age > 0 && age < 100) {
        return age
    } else
        return 0;
}

function addStudentInTable(student) {
    const studentsTab = document.getElementById("studentsTab").getElementsByTagName("tbody")[0]
    const newRow = studentsTab.insertRow(-1)
    const newCell = newRow.insertCell(0)
    const newCell1 = newRow.insertCell(1)
    const newCell2 = newRow.insertCell(2)
    const newCell3 = newRow.insertCell(3)

    newCell.appendChild(document.createTextNode(student.name));
    newCell1.appendChild(document.createTextNode(student.sex));
    newCell2.appendChild(document.createTextNode(student.birthDay));
    newCell3.appendChild(document.createTextNode(student.age));
}


//
// <script>
//     "use strict"
//
//     function addStudent() {
//     const studentsTab = document.getElementById("studentsTab");
//     const studentName = document.getElementById("studentName").value;
//
//     const newRow = studentsTab.insertRow(studentsTab.rows.length);
//
//     studentName += "(new)";
//
//     newCell = newRow.insertCell(-1);
//     newCell.appendChild(document.createTextNode(studentName));
// }
//
// </script>

