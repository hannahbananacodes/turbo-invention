
let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function(){
    // Store all components on HTML in our JS
    let clear = document.querySelector("#AC");
    let neg = document.querySelector("#neg");
    let equal = document.querySelector("#equals");
    let decimal = document.querySelector("#decimal");


    let numbers = document.querySelectorAll(".operand");
    let operators = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
    }))
})

function handleNumber(num){
    console.log(num);
}

/*let result = 0;
        var input1 = 1 //prompt("Enter num1");
        var input2 = 1 //prompt("Enter num2");
        var operator = 'add' //prompt("Enter operation (add, subtract, multiply, divide)");
        //num1 is first operand, num2 is second operand, operator is operator
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