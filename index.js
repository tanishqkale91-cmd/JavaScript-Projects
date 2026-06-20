// let age = 20;
//  let goal = "Good programmer";
// let name = "Tanishq kale";
// let salary = 500000;

//  document.getElementById("p1").textContent = `Age of User is ${age}`;
// document.getElementById("p2").textContent = `User goal is to become ${goal}`;
//  document.getElementById("p3").textContent = `User Salary is ${salary}`;

//  let marks = 45;
//  marks += 45+45;
//  let students = 99;
//  studentsuser = students % 2;
//  console.log(students);
//  console.log(marks);

//  How  to get user input
//  Easy Way to input
// let userName = window.prompt("Enter Your Name"); 
// let username;
// document.getElementById("mySubmit").onclick = function() {
//    username = document.getElementById("myText").value;
//    document.getElementById("myH1").textContent = `Hello ${username}`
// }


// // Type Conversion 
// let x = "0";
// let y = "0";
// let z = "0";
// x = Number(x);
// y = Boolean(y);
// z = String(z);

// console.log(typeof x);
// console.log(typeof z);
// console.log(typeof y);

// const PI = 3.14;

// let radius;
// let circumference;
// document.getElementById("mySubmit").onclick = function(){
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     circumference = 2*PI*radius;
//     document.getElementById("myH3").textContent = circumference + "cm";
// }const age = document.getElementById("myText");

// const myText = document.getElementById("myText");

// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");
// let age
// mySubmit.onclick = function(){

//     age = myText.value;
//     age = Number(age);
//    if (age > 18) {
//     resultElement.textContent = `You can Vote`;
//    }
//    else{
//     resultElement.textContent = `You are Super Cool`
//    }

// }
// let name = "Tanishq"
// console.log(name.charAt(6));

// console.log(name.indexOf("a")); // First Occurence

// console.log(name.length);
// let name1 = "  Dark Reunion  "
// console.log(name1.trim());
// console.log(name1.toUpperCase());
// console.log(name.toLowerCase());

// //Check if Substring Exist
// console.log(name.includes("ishq"));

// //Replace First Occurenece
// console.log(name1.replace("Reunion","Lord"));

// console.log("Yo".repeat(9));
/*length
includes()
slice()
split()  Common    Interview         Project Methods
replace()
toUpperCase()
toLowerCase()
trim()
startsWith()
endsWith()*/
// const name = "Tanishq Kale"
// console.log(name.slice(0,3));

// console.log(name.slice(0,name.indexOf(" ")));

// console.log(name.slice(6));
// let lastName = name.slice(8);
// console.log(lastName);

// const Email = "tanishqkale91@gmail.com"

// let initial = Email.slice(0,Email.indexOf("@"));

// let Extension = Email.slice(Email.indexOf("@"));
// console.log(initial);
// console.log(Extension);
//Wothout Method Chaining

// let username = "tAniShq";

// let letter = username.charAt(0);
// letter = letter.toUpperCase();
// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;
// console.log(username);

//With Method Chaining
// let name = "tAnIsHq";
// name = name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase();
// === strict equality operator (compare if values and datatype are equal)

//While Loops


// function NumSum(){
//     let sum  = 0;
//     for(let i = 0; i <= 10; i++){
//         sum += i;
//     }
//     console.log(sum);
// }
// function add(x,y){
//     let result = x + y;
//     return result;
// }
// NumSum();
// console.log(add(69,67));
// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isEven(68));

// function isValidEmail(email){
//     if(email.includes("@")){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(isValidEmail("tanishq"));

// let a = 34;
// let b = 78;
// let c = 10;

// if(a > b && a > c){
//    console.log(`${a} is largest`);
// }
// else if (b > a && b > c) {
//     console.log(`${b} is Largest`);
// }
// else{
//     console.log(`${c} is Largest`);
// }

// let name = "madam";

// function reverse(name){
//     let arr = name.split("");
// let i = 0;
// let j = arr.length - 1;
// let temp;
// let Tname;
// while ( i < j) {
//     temp = arr[i];
//    arr[i] = arr[j];
//    arr[j] = temp;
//     i++;
//     j--;
// }
// return arr.join("");
// }
// let Tname = reverse(name);
// console.log(name == Tname);

// const myPasswd = document.getElementById("myPasswd");

// const myText = document.getElementById("myText");
// const myP = document.getElementById("myP")

// const myButton = document.getElementById("mySubmit");

// myButton.onclick = function(){
//   if (myText.value.includes("@") && myText.value.length >= 8) {
//     myP.textContent = "You'r password is valid";
//   }
//   else{
//     myP.textContent = "Invalid Password";
//   }

// }

// let numbers = [1,2,3,4,5];
// let maxi = Math.max(...numbers);
// let name = "Tanishq Kale";
// let letters = [...name];
// console.log(letters)
// function F(...foods){
//   console.log(...foods);
// }
// const f1 = "pizza";
// const f2 = "pizza";
// const f3 = "pizza";
// const f4 = "pizza";
// const foods = F(f1,f2,f3,f4);
// let nums = [1,2,3,4,5,7,8,9];
// console.log(Math.max(...nums));
// let foods1 = ["Pizza","IceCream","Paratha","Ramen"];

// let foods2 = ["DalChawal","Roti","Sabzi","Halwa"];
// let combined = [...foods1,...foods2]
// console.log(combined);
// let nums2 = [...nums];
// nums2.push(69);
// nums2.pop();
// nums.pop()
// console.log(nums2);
// //Rest packs multiple values into an array
// function f1(...numbers){
//  let total = 0;
//  for(let num of numbers){
//   total += num;
//  }
//  return total;
// }
// console.log(f1(2,3,4,5,6,7));
/*Callbacks

This is where many beginners get confused.

A callback is simply:

A function passed as an argument to another function.*/
// function greet(callback){
// console.log("Hello Duniya");
// callback();
// }
// function bye(){
//   console.log("We will never see again");
// }
// greet(bye);

// function sum(a,b,callback){
// let  result = a+b;
//   callback(result);
// }
// function display(result){
//   console.log(result);
// }
// console.log(12,23,display);

// function multiply(...numbers){
//   let mul = 1;
//   for(let num of numbers){
//     mul = num*mul;
//   }
//   console.log(mul);
// }


// function average(...numbers){
//   let sum = 0;
//   for(let num of numbers){
//      sum += num;
//   }
//   let avg = sum/numbers.length;
//   console.log(avg);
// }

// function findMax(...numbers){
//   let maxi = numbers[0];
//   for(let i = 0; i < numbers.length;i++){
//     if(numbers[i] > maxi){
//       maxi = numbers[i];
//     }
//   }
//   console.log(maxi);
// }

// function evenSum(...numbers){
//   let sum = 0;
//   for(let i = 0; i < numbers.length;i++){
//     if(numbers[i] % 2 == 0){
//       sum += numbers[i];
//     }
//   }
//   console.log(sum);
// }

// multiply(3,4,5,6,7);
// evenSum(4,5,6,7,88,9);
// findMax(89,88,90,7,6,5);
// average(1,2,3,4,5,6,7,8,9,10);


// let colors = ["Red","Green","Blue"]
// colors.forEach(function(element,index,array){
//    console.log(index);
//    console.log(element);
//    console.log(array);
// })

// let nums = [5,10,15];
// nums.forEach(function(num){
//    console.log(num*2);
// })

// let names = [
//     "Tanishq",
//     "Rohan",
//     "Priya",
//     "Aman"
// ];

// names.forEach(function(name){
//    let cnt = 0;

//    for(let i = 0; i <name.length;i++){
//       if ("aeiou".includes(name[i])) {
//          cnt++;
//       }
//    }
//    console.log(`${name} -> ${cnt}`);
// });
// let words = [
//     "apple",
//     "banana",
//     "mango"
// ];
// words.forEach(function(word){
//    let arr = word.split("");
//   let i = 0;
//   let j = word.length - 1;
//   while(i < j){
//    let temp = arr[i];
//    arr[i] = arr[j];
//    arr[j] = temp;
//    i++;
//    j--;
//   }
//   console.log(arr.join(""));
// })
// let numss = [5,-2,10,-8,7];
// numss.forEach(function(num,index,array){
//   if (array[index] < 0) {
//       array[index] = 0;
//   }
// })
// console.log(numss);
// let numsss = [1,1,1,1,1];
// let seen =[];
// let duplicates = [];
// numsss.forEach(function(num){
//     if (seen.includes(num)) {

//         if(!duplicates.includes(num)){
//             console.log(num);
//             duplicates.push(num);
//         }
//     }
//     else{
//       seen.push(num);
//     }

// })
// let students = [
//     {name:"Tanishq",marks:95},
//     {name:"Rohan",marks:60},
//     {name:"Priya",marks:82},
//     {name:"Aman",marks:35}
// ];
// let students = [
//     "Tanishq",
//     "Rohan",
//     "Priya"
// ];

// const container =
// document.getElementById("container");

// students.forEach(function(student){

//     container.innerHTML += `
//         <div class="card">
//             ${student}
//         </div>
//     `;

// });

// let numss = [1,2,3,4,5]
// let square = nums.map(function(num){
//    return Math.pow(num,2);
// })
// console.log(square);
// let triple = nums.map(num => {
//    return num*3
// })
// console.log(triple);

// let Bool = nums.map(num => {
//    return Boolean(num);
// })
// console.log(Bool)
// let words = [
//  "apple",
//  "banana",
//  "mango"
// ];
// let lambai = words.map(word => {
//    return word.length;
// })
// console.log(lambai);
// let capitalize = words.map(word => {
//    return word.charAt(0).toUpperCase() + word.slice(1);
// })
// console.log(capitalize);

// let reverse = words.map(word => {
//     let arr = word.split("");
//    let i = 0;
//    let j = word.length - 1;
//   while(i < j){
//    let temp = arr[i];
//    arr[i] = arr[j];
//    arr[j] = temp;
//    i++;
//    j--;
//   }
//   return arr.join("");
// })
// console.log(reverse);
// let nums = [10, 20, 30, 40];
// let added = nums.map(function (num, index) {
//    return num + index;
// })
// console.log(added);
// let passwords = [
//    "hello123",
//    "javascript",
//    "brocode"
// ];

// let masker = passwords.map(word => {
//    let arr = word.split("");
//    for (let i = 0; i < arr.length; i++) {
//       arr[i] = "*";
//    }
//    return arr.join("");
// })
// console.log(masker);
// let a = passwords.map(word => {
//    return word[0] + word[word.length - 1];
// })
// console.log(a);
// let names = [
//    "tanishq kale",
//    "rohan sharma",
//    "priya singh"
// ];
// let boss = names.map(name => {

//    let words = name.split(" ");

//    let b = words.map(word => {
//       return word.charAt(0).toUpperCase()+word.slice(1);
//    })

//    return b.join(" ");
// });

// console.log(boss);

// let words = [
//     "apple",
//     "banana",
//     "mango"
// ];

// let combined = words.map(fruit => {
//     return {
//         word: fruit,
//         length: fruit.length
//     };
// });

// console.log(combined);
//  const person1 = {
//     name:"Tanishq",
//     age: 20,

//     greet(){
//         console.log("Hello Tanishq");
//     }
//  }
//  person1.greet();
//  console.log(`${person1.name} is ${person1.age} years old`);

//  const car = {
//     brand:"Ford",
//     model:"Mustang",
//     year:2026,

//     displayInfo(){
//         console.log(`${this.brand} ${this.model} ${this.year}`);
//     }
//  }
//  car.displayInfo();

//  const student = {
//     name:"Tanishq",
//     rollNo:1,
//     marks:90,

//     isPass(){
//         if (this.marks > 40) {
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
//  }
//  console.log(student.isPass());


//  function Book(title, author, price){
//     this.title = title;
//     this.author = author;
//     this.price = price;
//  }

//  const B1 = new Book("Bekar Book","Tanishq",700);
//  const B2 = new Book("Ordinary Book","Jhanavi",800);
//  const B3 = new Book("Simple Book","Ordinary Guy",1000);

//  const BOOKS = [B1,B2,B3];
//  BOOKS.forEach(book => {
//     console.log(  `${book.title} author is ${book.author} & price is ${book.price}`);
//  })
// function Rectangle(length,width){
//     this.length = length;
//     this.width = width;

//    this.getArea = function(){
//     return this.length*this.width;
//    }
// }
// const r = new Rectangle(50,10);
// console.log(r.getArea());

// function BankAccount(owner,balance){
//     this.owner = owner;
//     this.balance = balance;

//     this.deposit = function(amount){
//         return balance + amount;
//     }
//     this.withdraw = function(amount){
//         if(amount < balance){
//             return amount;
//         }else{
//             console.log("Insufficent Balance");
//         }
        
//     }  
// }

// const a1 = new BankAccount("Tanishq",15000);
// console.log(a1.deposit(2000));
// console.log(a1.withdraw(19000));
// class Employee {
//     constructor(name,salary) {
//         this.name = name;
//         this.salary = salary;
//     }
//     annualSalary(){
//         return this.salary*12;
//     }
// }
// const e1 = new Employee("Tanishq",90000);
// console.log(e1.annualSalary());

// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }
//     getArea(){
//         return Math.PI*this.radius*this.radius;
//     }

//     getCircumference(){
//         return 2*Math.PI*this.radius;
//     }
// }
// const c1 = new Circle(34);
// console.log(`Area is ${c1.getArea()} & Circumference is ${c1.getCircumference()}`);

// class Movie {
//     constructor(title,rating) {
//         this.title = title;
//         this.rating = rating;
//     }

//     isHit(){
//         if (this.rating >= 8) {
//             console.log(`${this.title} is Hit`)
//         }
//         else{
//             console.log(`${this.title} is Flop`);
//         }
//     }
// }
// const m1 = new Movie("Dhurandhar",9);
// m1.isHit();

// class counter {
//     static count = 0;
//     constructor() {
//         counter.count++;
//     }
// }
// const cnt = new counter();
// const cnt1 = new counter();
// const cnt2 = new counter();
// console.log(counter.count);


// class Animal{
//     eat(){
//         return `Animals Are Eating`;
//     }
// }

// class dog extends Animal{
//     bark(){
//         return `Dog is Barking`;
//     }
// }
// const d1 = new dog();
// console.log(d1.eat());
// console.log(d1.bark());

// class BankAccount {
//     static totalAccounts = 0;
//     constructor(owner,balance) {
//         this.owner = owner;
//         this.balance = balance;
//         BankAccount.totalAccounts++;
//     }

//     deposit(amount){
//         return this.balance += amount;
//     }
//     withdraw(amount){

//     if(amount <= this.balance){

//         this.balance -= amount;

//         return `Total Balance is now ${this.balance}`;
//     }

//     return "Insufficient Balance";
// }
// }

// const a1 = new BankAccount("Tanishq",90000);
// const a2 = new BankAccount("Shivam",67000);
// const a3 = new BankAccount("Saiki",89000);

// console.log(`Total Accounts Created:${BankAccount.totalAccounts}`);

// let accounts = [a1,a2,a3];
// accounts.forEach(function(acc){
//     acc.deposit(2345);
//     acc.withdraw(78900);
// })

// accounts.forEach(function(acc){
//     console.log(`The Users is:${acc.owner}`);
//     console.log(`Their Balance After Deposit is:${acc.balance}`);
//     console.log(`Balnce After Withdrawl is:${acc.withdraw()}`);
// })


// class person {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// class student extends person{
   
//     constructor(name,age,marks){
//         super(name,age);
//         this.marks = marks;
//     }
//     getGrade(){
//         if (this.marks > 90) {
//             console.log("Obtained A")
//         }
//         else if (this.marks > 80 && this.marks < 90) {
//             console.log("Obtained B");
//         }
//         else{
//             console.log("Fail Hogya");
//         }
//     }
// }
// const s1 = new student("Tanishq",20,99);
// s1.getGrade();

// class person {
//     constructor(first,last,age) {
//         this.first = first;
//         this.last =last;
//         this.age = age;
//     }
//     get fullName(){
//        return `${this.first} ${this.last}`;
//     }
//     set age(value){
//         if (value > 0) {
//             this._age = value;
//         }
//     }
//     get age(){
//         return this._age;
//     }
// }

// const p =new person("Tanishq","Kale",20);
// console.log(p.fullName);
// console.log(p.age);
// class BankAccount {
//     constructor(balance,owner) {
//         this.balance = balance;
//         this.owner = owner;
//     }

//     set balance(value){
//         if (value < 0) {
//             console.log("Enter The Positive Balance");
//         }
//         else{
//             this._balance = value;
//         }
//     }
//     get balance(){
//         return this._balance;
//     }
// }
// const b = new BankAccount(-9000,"Tanishq");
// console.log(b._balance);

// let arr = [1,2,3,4];
// const [,second,,fourth] = [1,2,3,4];
// console.log(second,fourth);
// let nums = [10,20,30,40,50];
// const [,s,,f,d] = nums;
// console.log(s,f,d);

// const student = {
//     name:"Tanishq",
//     age:20,
//     marks:300,
// }
// let {
//     name:userName,
//     age:userAge,
//     marks:userMarks
// } = student;

// userName = "AbCd"
// console.log(student.name);
// console.log(userName,userAge,userMarks);

// const Aadmi = {
//     name:"Tanishq",
//     age:20,
//     address:{
//         city:"Nagpur",
//         state:"MH",
//         country:"India",
//     }
// }
// console.log(Aadmi.address.city);

// const student = {
//    name:"Tanishq",

//    marks:{
//       maths:95,
//       physics:90,
//       chemistry:85
//    },
//    contact:{
//     phone:"8103970041",
//     email:"tanishqkale91@gmail.com",
//    }
// }
// const numbers = [student.marks];
// numbers.forEach(function(num){
//     console.log(num);
// })

            //Sorting
// console.log([100,345,1].sort());     
// let nums = [1,2,3,4,5,6,7,8,9,10];
// console.log(nums.sort());   //Lexicographical
// console.log(nums.sort((a,b)=>a-b));  
// let fruits = ["Mango","Apple","Banana"]
// console.log(fruits.sort());
// const date = new Date();
// console.log(date);

// console.log(date.getFullYear(),
// date.getMonth(),
// date.getDate(),
// date.getDay())
// const birthDate = new Date("2006-03-14");
// const today = new Date();
// const diff = today - birthDate;
// const birthYear = birthDate.getFullYear();
// const currentYear = today.getFullYear();
// const yerasLived = currentYear - birthYear;
// const daysLived = Math.floor(diff/(1000*60*60*24));
// console.log(`Days Lived:${daysLived}`);
// console.log(yerasLived);
// function outer(){

//     let name = "Tanishq";

//     function inner(){
//         console.log(name);
//     }

//     inner();
// }
// outer();

// function outer(){

//     let name = "Tanishq";

//     function inner(){
//         console.log(name);
//     }

//     return inner;
// }


// function getCount(){
//     return count;
// }
// return {increment};
// }

// const counter = createCount();
// counter.increment();
// counter.increment();

// function createCount(){
//     let count = 0;
//     function increment(){
//         count++;
//         console.log(`Count Inreased to:${count}`);
//     }
//     function decrement(){
//         count--;
//         console.log(`Count Decreased To:${count}`)
//     }
//     function reset(){
//         count = 0;
//         console.log(`Count is Reset to:${count}`);
//     }
//     return {increment,decrement,reset};
// }
// const counter = createCount();
// counter.increment();
// counter.increment();
// counter.decrement();
// counter.reset();
// for (var i = 0; i < 3; i++) {
//     (function(j){
//         setTimeout(() => console.log(j), 100);
//     })(i);
// }

// function makeMultiplier(x){
//     return function(num){
//         console.log(x*num);
//     }
// }

// const double = makeMultiplier(2);
// double(5);  
// double(9); 
// function makeGreeter(greeting){
//     return function(name){
//       console.log(`${greeting} ${name}`);
//     }
// }
// const sayHello = makeGreeter("Hello");
// const sayHi = makeGreeter("Hi");
// sayHello("Tanishq"); 
// sayHi("Rohan");      


// function createLoginManager(){
//     let count = 1;
//     return function(password){
        
      
//         if(password === "SayName"){
//         console.log("Correct Password");
//        }
       
//        else if(count <= 3){
        
//         console.log(`Attempt ${count}
//              failed`);
//              count++;
//        }
//        else{
//         console.log("Account Locked");
//        }
//     }
// }
// const login = createLoginManager();
// login("wrong");   
// login("wrong");   
// login("wrong");   
// login("wrong");   

// function walkDog(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("Hello Dawg")
//         },1500);
//     });
// }

// function cleanKitchen(){
//     return new Promise((resolve,reject) => {
//        setTimeout(()=>{
//         resolve("Clean the Kitchen")
//        },2500);
//     })
// }
// function TakeOutTrash(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Take Out Trash")
//         }, 500);
//     })
// }
// walkDog().then(value => {console.log(value); return cleanKitchen()})
// .then(value => {console.log(value); return TakeOutTrash()})
// .then(value => {console.log(value);console.log("You Finished all the task")});
/*
fetch()     -> Response object (not your data yet)
.json()     -> Actual JavaScript array/object (your real data)
*/

    async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/usersss");
        const data = await response.json();
        data.forEach(user => console.log(user.name));
    } catch(error) {
        console.error("Failed to fetch data");
    }
}

getUsers();
//API Key 205a9394b97ab05e875a92d14e40b27f