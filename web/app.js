window.onload = calculateAvgAge();
document.getElementById("candidate_form").addEventListener("submit", checkForm)

let studentsStorage = [];

function checkForm() {
    event.preventDefault();

    const candidate = document.getElementById("candidate_form");

    const student = {};
    student.name = candidate.name.value;
    student.birthDay = candidate.date.value;
    student.sex = candidate.sex.value;
    student.age = calculateAge(student.birthDay);

    // Проверка на корректное заполнение поля формы
    let error = "";
    if (student.name === "")
        error = "Введите имя студента";
    else if (student.name.split(" ").length < 2)
        error = "Введено не корректное имя";
    else if (student.name.length <= 5 || student.name.length > 50)
        error = "Введено не корректное имя";
    else if (student.age === 0)
        error = "Введите правильный возраст";
    else if (checkAvailability(student))
        error = "Этот студент уже внесен в таблицу";

    // Выводит сообщение об ошибке или вызывает функцию заполнения таблицы
    if (error !== "") {
        document.getElementById("errorCase").innerHTML = error;
    } else {
        addStudentInTable(student);
    }

    calculateAvgAge();
}

// Считает возраст, если он не корректен возвращает '0'
function calculateAge(birthDay) {
    const age = Math.floor((new Date() - new Date(birthDay)) / 1000 / 60 / 60 / 24 / 365);
    if (age > 12 && age < 70) {
        return age;
    } else
        return 0;
}

// Добавляет студента в таблицу
function addStudentInTable(student) {
    studentsStorage.push(student);

    const studentsTab = document.getElementById("studentsTab").getElementsByTagName("tbody")[0];
    const newRow = studentsTab.insertRow(-1);
    const cellName = newRow.insertCell(0);
    const cellSex = newRow.insertCell(1);
    const cellDate = newRow.insertCell(2);
    const cellAge = newRow.insertCell(3);

    cellName.appendChild(document.createTextNode(student.name));
    cellSex.appendChild(document.createTextNode(student.sex));
    cellDate.appendChild(document.createTextNode(student.birthDay));
    cellAge.appendChild(document.createTextNode(student.age));
}

// Считает и записывает в таблицу средний возраст студентов
function calculateAvgAge() {
    let avgAge = 0;
    let sumAge = 0;

    try {
        const table = document.getElementById("studentsTab");
        const tBody = table.getElementsByTagName("tbody")[0];
        const rowCount = tBody.rows.length;

        for (let i = 0; i < rowCount; i++) {
            const tr = tBody.rows[i];
            const td = tr.cells[3];
            const text = td.childNodes.item(0);
            const age = parseInt(text.data)
            if (!isNaN(age))
                sumAge += age;
            avgAge = Math.floor(sumAge / rowCount);
        }
    } catch (ex) {
        console.log(ex);
    }
    document.getElementById("studentsTabAvgAge").innerHTML = avgAge;
}

function checkAvailability(student) {
    for (let i = 0; i < studentsStorage.length; i++) {
        if(JSON.stringify(student) === JSON.stringify(studentsStorage[i]))
            return true;
    }
    return false;
}

