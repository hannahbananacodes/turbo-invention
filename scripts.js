
let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function(){
    // Store all components on HTML in our JS
    let clear = document.querySelector("#AC");
    let neg = document.querySelector("#neg");
    let equal = document.querySelector("#equals");
    let decimal = document.querySelector("#decimal");


    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + " " + operator
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener("click", function(){
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

    equal.addEventListener("click", function(){
        if(currentValue != '' && previousValue != ''){
            calculate()
            previousScreen.textContent = '';
            if(previousValue.length <= 15){
                currentScreen.textContent = previousValue;
            } else {
                currentScreen.textContent = previousValue.slice(0,10) + "...";
            }
    }})

    decimal.addEventListener("click", function(){
        addDecimal();
    }
    )
})

function handleNumber(num){
    if(currentValue.length <= 15){
        currentValue += num;
    }
}

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+"){
        previousValue += currentValue;
    } else if (operator === "-"){
        previousValue -= currentValue;
    } else if (operator === "/"){
        previousValue /= currentValue;
    } else if (operator ==="*"){
        previousValue *= currentValue;
    } else if (operator === "%"){
        previousValue %= currentValue;
    }
    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function roundNumber(num){
    return Math.round(num*1000)/1000;
}

function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue += '.';
    }
}

/*let result = 0;
        var input1 = 1 //prompt("Enter num1");
        var input2 = 1 //prompt("Enter num2");
        var operator = 'add' //prompt("Enter operation (add, subtract, multiply, divide)");
        //num1 is first number, num2 is second number, operator is operator
        var num1 = +input1;
        var num2 = +input2;
        

    //functions
        function add(num1, num2) {
            result =  num1 + num2
        console.log(result)
        };

        function subtract(num1, num2) {
            result =  num1 - num2
        console.log(result)
        };
        
        function multiply(num1, num2) {
            result =  num1 * num2
        console.log(result)
        };
        function divide(num1, num2) {
            result =  num1 / num2
        console.log(result)
        };

        function mod(num1, num2) {
            result = num1 % num2
        console.log(result)
        };

        function operate (operator, num1, num2) {
            if (operator == "add") {
                add(num1, num2)
            }
            else if (operator == "subtract") {
                subtract(num1, num2)
            }
            else if (operator =="multiply") {
                multiply(num1, num2)
            }
            else if (operator == "divide") {
                divide(num1, num2)
            }
            else if (operator == "mod") {
                mod(num1, num2)
            }
        
    }
    operate(operator, num1, num2);
*/