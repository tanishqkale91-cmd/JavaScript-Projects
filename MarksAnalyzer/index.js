const myName = document.getElementById("myName");

const counter = document.getElementById("counter");

const addStudentBtn =
document.getElementById("addStudent");

const analyzeBtn =
document.getElementById("analyzeBtn");

const studentList =
document.getElementById("studentList");

const display =
document.getElementById("display");

const students = [];
const studentAverages = [];


myName.oninput = function () {
    counter.textContent =
        `Characters: ${myName.value.length}`;
};


function Total(...numbers) {

    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

function Average(...numbers) {

    return Total(...numbers) /
        numbers.length;
}


function Highest(...numbers) {
    return Math.max(...numbers);
}

function Lowest(...numbers) {
    return Math.min(...numbers);
}

function Grade(avg) {

    if (avg >= 90) return "A+";
    if (avg >= 80) return "A";
    if (avg >= 70) return "B";
    if (avg >= 60) return "C";
    if (avg >= 40) return "D";

    return "F";
}

function Status(avg) {

    if (avg >= 40) {
        return "PASS";
    }

    return "FAIL";
}

function displayStudents() {

    let output = "";

    for (let i = 0;
        i < students.length;
        i++) {

        output +=
            `${i + 1}. ${students[i]}
            (Average:
            ${studentAverages[i].toFixed(2)})
            <br>`;
    }

    studentList.innerHTML = output;
}


addStudentBtn.onclick = function () {

    const m1 =
        Number(document.getElementById("m1").value);

    const m2 =
        Number(document.getElementById("m2").value);

    const m3 =
        Number(document.getElementById("m3").value);

    const m4 =
        Number(document.getElementById("m4").value);

    const m5 =
        Number(document.getElementById("m5").value);

    const marks =
        [m1, m2, m3, m4, m5];

    if (myName.value.trim() === "") {

        alert("Enter Student Name");

        return;
    }

    for (let mark of marks) {

        if (mark < 0 || mark > 100) {

            alert(
                "Marks should be between 0 and 100"
            );

            return;
        }
    }

    const avg =
        Average(...marks);

    students.push(myName.value);

    studentAverages.push(avg);

    displayStudents();

    alert("Student Added Successfully");

   
    myName.value = "";

    document.getElementById("m1").value = "";
    document.getElementById("m2").value = "";
    document.getElementById("m3").value = "";
    document.getElementById("m4").value = "";
    document.getElementById("m5").value = "";

    counter.textContent =
        "Characters: 0";
};


analyzeBtn.onclick = function () {

    if (students.length === 0) {

        display.textContent =
            "No Students Added Yet";

        return;
    }

    const highestAvg =
        Math.max(...studentAverages);

    const lowestAvg =
        Math.min(...studentAverages);

    const totalStudents =
        students.length;

    let sum = 0;

    for (let avg of studentAverages) {
        sum += avg;
    }

    const classAverage =
        sum / totalStudents;

    const topperIndex =
        studentAverages.indexOf(highestAvg);

    const topper =
        students[topperIndex];

    display.style.color = "blue";

    display.innerHTML = `
        <strong>Total Students:</strong>
        ${totalStudents}
        <br><br>

        <strong>Class Average:</strong>
        ${classAverage.toFixed(2)}
        <br><br>

        <strong>Highest Average:</strong>
        ${highestAvg.toFixed(2)}
        <br><br>

        <strong>Lowest Average:</strong>
        ${lowestAvg.toFixed(2)}
        <br><br>

        <strong>Topper:</strong>
        ${topper}
    `;
};