// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculate(num1, operator, num2) {
    if (operator === '+') {
      return num1 + num2;
    } else if (operator === '-') {
      return num1 - num2;
    } else if (operator === '*') {
      return num1 * num2;
    } else if (operator === '/') {
      if (num2 === 0) {
        return "Cannot divide by zero!";
      }
      return num1 / num2;
    } else {
      return "Invalid operator";
    }
  }
  
  // Examples
  console.log(calculate(5, '+', 3)); 
  console.log(calculate(10, '-', 4)); 
  console.log(calculate(3, '*', 7)); 
  console.log(calculate(10, '/', 2));
  console.log(calculate(8, '/', 0)); 
  console.log(calculate(5, '%', 3));
  