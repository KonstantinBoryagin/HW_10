function sendData() {
    const candidate = {}
    candidate.name = document.getElementById("name").value
    candidate.sex = document.getElementById("sex").value
    candidate.birthDay = document.getElementById("date").value
    candidate.age = calculateAge(candidate.birthDay)

    console.log(candidate.age)
    console.log(new Date())
    // const studentAsString = JSON.stringify(candidate, null, 2)

    // alert(studentAsString)
    // addStudentInTable(candidate)

    const studentsTab = document.getElementById("studentsTab").getElementsByTagName("tbody")

    //studentsTab.rows.length
    const newRow = studentsTab.insertRow()
    newCell = newRow.insertCell(0)
    newCell2 = newRow.insertCell(1)
    newCell3 = newRow.insertCell(2)
    newCell4 = newRow.insertCell(3)
    newCell.appendChild(document.createTextNode(candidate.name))
    newCell2.appendChild(document.createTextNode(candidate.sex))
    newCell3.appendChild(document.createTextNode(candidate.birthDay))
    newCell4.appendChild(document.createTextNode("12"))

    alert("sd")
}

function calculateAge(birthDay) {
    const age = Math.floor((new Date() - new Date(birthDay)) / 1000 / 60 / 60 / 24 / 365)
    if (age > 0) {
        return age
    } else
        return 0;
}

function addStudentInTable(candidate) {
    const studentsTab = document.getElementById("studentsTab").getElementsByTagName("tbody")

    const studentName = candidate.name
    console.log(studentName)
    const studentSex = candidate.sex
    const studentBirthDay = candidate.birthDay
    const studentAge = candidate.age

    //studentsTab.rows.length
    const newRow = studentsTab.insertRow(studentsTab.rows.length)
    newCell = newRow.insertCell(0)
    newCell2 = newRow.insertCell(1)
    newCell3 = newRow.insertCell(2)
    newCell4 = newRow.insertCell(3)
    newCell.appendChild(document.createTextNode(studentName))
    newCell2.appendChild(document.createTextNode(studentSex))
    newCell3.appendChild(document.createTextNode(studentBirthDay))
    newCell4.appendChild(document.createTextNode(studentAge))

    alert("sd")

}


