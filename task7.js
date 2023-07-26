// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.



function romanToInteger(roman) {
    const romanNumerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let result = 0;
    let prevValue = 0;
  
    for (let i = roman.length - 1; i >= 0; i--) {
      const currentNumeral = roman[i];
      const currentValue = romanNumerals[currentNumeral];
  
      if (currentValue < prevValue) {
        result -= currentValue;
      } else {
        result += currentValue;
      }
  
      prevValue = currentValue;
    }
  
    return result;
  }
  
  // Example usage:
  console.log(romanToInteger("IX")); 
  console.log(romanToInteger("XXI")); 
  