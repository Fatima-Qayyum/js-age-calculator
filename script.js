let input=document.querySelector("#inputtag");
let output=document.querySelector('p');
let button=document.querySelector('button');

button.addEventListener('click',calculateAge)

function calculateAge() {
    let userInput=input.value;
     let inputYear=userInput.split('-');
  
   let age = 2025 - Number(inputYear[0]);  
output.innerHTML=`Your age is ${age} &nbsp;years old`;



}