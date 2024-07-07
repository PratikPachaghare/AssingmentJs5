function factorial(number) {
    if (number === 0) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  
  console.log("Factorial of 5:", factorial(5)); // Output: 120
  console.log("Factorial of 0:", factorial(0)); // Output: 1
  