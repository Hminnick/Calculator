const result = document.getElementById("resultText");
const calculation = document.getElementById("calculationText");

//Gets the value of number and math key when the button is clicked and prints that into calculation text screen
function insert(num) { 
    calculation.textContent += num;
    console.log(num);
}

//Clears calculation upon clicking clear button

document.getElementById("clear").addEventListener("click",function() {
    calculation.textContent="";
    result.textContent = 0;
});

//Removes last character from number upon clicking "<" back button
document.getElementById("back").addEventListener("click",function() {
    var exp = calculation.textContent;
    calculation.textContent = exp.substring(0, exp.length - 1);
});

//Returns output of calculation upon clicking "=" equal button
document.getElementById("equal").addEventListener("click",function() {
    var exp = calculation.textContent;
    result.textContent = eval(exp);
    calculation.textContent = result.textContent;
});