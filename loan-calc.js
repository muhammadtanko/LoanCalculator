class LoanCalculator{
    constructor(){}

    LoanCalc(x, y, z){

        if (z  >= 70) {
            let interest = x / 10;
            let total = x + interest;
            let instalment = total / y ;
            console.log(`Congratulations your monthly installment for the next ${y} months is ${instalment}`);
        }
        else{
            console.log(` Sorry Your credit score of ${z} is too low to be eligible for a bank loan`);
        }

    }   
}

module.exports = LoanCalculator;