function calculateTax(income) {
    // Define tax rates using a closure
    let taxRates = {
      lower: 0.1,
      middle: 0.2,
      higher: 0.3
    };
  
    // Function to determine tax bracket based on income
    function getTaxBracket(income) {
      if (income <= 25000) {
        return "lower";
      } else if (income <= 50000) {
        return "middle";
      } else {
        return "higher";
      }
    }
  
    // Calculate tax based on bracket
    let bracket = getTaxBracket(income);
    return income * taxRates[bracket];
  }
  
  console.log("Tax for income 20000:", calculateTax(20000)); // Output: 2000
  