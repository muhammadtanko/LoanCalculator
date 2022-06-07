# LoanCalculator

### Install the module with:  npm i @muhammad-tanko/loancalculator 


## Documentation

This calculator has a single function that takes in three required parameters. (x,y,z) with x beign the loan ammount, y beign the installment number and finally z beign the applicants credit score.

## Calculating loan

### Sample code:

var calcLibrary = require("@muhammad-tanko/loancalculator");

var Calculator = new calcLibrary.LoanCalc();

    Calculator.LoanCalc(1000000, //loan amount you are requesting for<br />
     20, //Number of installments you want <br />
     70  // Your credit score (should not be less than 70)<br />
     );


