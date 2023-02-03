let valueToDisplay ="";
let arrayOfOperators=["+","-","÷","x"];
let display=document.getElementById("display");


function add (x,y) {
   total=x+y;
   return total;
}

 function subtract(x,y) {
  total=x-y;
  return total;
}

 function multiply(x,y) {
   total= x*y;
   return total;
 }

 function divide(x,y) {
   total=x/y;
   return total;
 }

let buttons = document.querySelectorAll('.input');
for (i=0; i<buttons.length; i++) {
  buttons[i].addEventListener('click', (e) => {
    valueToDisplay+=e.target.textContent;
    display.textContent=valueToDisplay;
})}

let equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', () => {
  let arrayOfOps = [];
  for (i=0; i<valueToDisplay.length;i++) {
    if (arrayOfOperators.includes(valueToDisplay[i])) {
      arrayOfOps.push(valueToDisplay[i])
    }
  }
  let arrayOfNumbers = valueToDisplay.split(/[+\-x÷]/g);
  let numbersArrayOfNumbers=[];
  for (i=0; i<arrayOfNumbers.length; i++) {
numbersArrayOfNumbers.push(+arrayOfNumbers[i])
  }

  for (i=1; i< numbersArrayOfNumbers.length; i++) {
    if (i<2) {
      let firstNumber=numbersArrayOfNumbers[0];
      let secondNumber=numbersArrayOfNumbers[1];
      let operator=arrayOfOps[0]
      doTheMath(firstNumber,secondNumber,operator);
    }
    else {
      firstNumber=total;
      secondNumber=numbersArrayOfNumbers[i]
      operator=arrayOfOps[i-1];
      doTheMath(firstNumber,secondNumber,operator);
    }
  }
  total = total.toString();
  if (total.length > 11) {
    total = total.slice(0,10);
  }
  valueToDisplay=+total;
  display.textContent=valueToDisplay;
  return total;
}
)

function doTheMath(firstNumber,secondNumber,operator) {
   if (operator== "+") {
     add(firstNumber, secondNumber);
   }
   else if (operator=="-") {
     subtract(firstNumber, secondNumber);
   }
   else if (operator=="x") {
     multiply(firstNumber, secondNumber);
   }
   else {
divide(firstNumber, secondNumber);
   }
}

let clear = document.getElementById("clear")
clear.addEventListener("click", () => {
  arrayOfOps=[];
  valueToDisplay='';
  display.textContent=valueToDisplay;
  total=0;
  numbersArrayOfNumbers=[];
})
