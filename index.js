// let events = require ("events");

let Calculator = require("./loan-calc");

let myCalc = new Calculator();

console.log(myCalc.LoanCalc(1000000, 20, 70));