const myLabel1 = document.getElementById("myLabel1");

const myText = document.getElementById("myText");

const myLabel2 = document.getElementById("myLabel2");

const number = document.getElementById("myNumber");
const myButton = document.getElementById("mySubmit");

myButton.onclick = function(){
    let marks = Number(number.value);
  if (marks > 80) {
    myP.textContent = `Name : ${myText.value}
    Marks:${marks}
    Grade:A
    Status:Pass`
  }
  else if (marks > 60 && marks < 80) {
    myP.textContent = `Name : ${myText.value}
    Marks:${marks}
    Grade : B
    Status:Pass`
  }
  else{
    myP.textContent = `Name : ${myText.value}
    Marks:${marks}
    Grade:F
    Status:Fail`
  }

}