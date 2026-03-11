// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {

    switch (operation) {
        case "add":
            return x + y;

        case "subtract":
            return x - y;

        case "multiply":
            return x * y;

        case "divide":
            return x / y;

        default:
            return null;
    }
}
// COLLECT FIRST NUMBER FROM USER
let result;
let operation;

do {
    let num1 = Number(prompt("Enter the first number:"));

// COLLECT SECOND NUMBER FROM USER
    let num2 = Number(prompt("Enter the second number:"));

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    operation = prompt("Enter an operation: add, subtract, multiply, or divide").toLowerCase();

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
    result = calculate(num1, num2, operation);

    if (result === null) {
        alert("Invalid operation. Please enter add, subtract, multiply, or divide.");
    }

} while (result === null);

alert("The result is: " + result);