const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1"); 
const label2 = document.getElementById("label2"); 
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomnumber1;
 let randomnumber2;
 let randomnumber3;

 myButton.onclick = function(){
    randomnumber1 = Math.floor(Math.random()*max) + min;
     randomnumber2 = Math.floor(Math.random()*max) + min;
      randomnumber3 = Math.floor(Math.random()*max) + min;
      label1.textContent = randomnumber1;
      label2.textContent = randomnumber2;
      label3.textContent = randomnumber3;
 }