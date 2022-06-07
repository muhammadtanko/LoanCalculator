class LoanCalculator{
    constructor(){}

    calculateInstallment(loanAmount, installment, creditScore = 70){

        if (creditScore  >= 70) {
            let interest = loanAmount / 10;
            let total = loanAmount + interest;
            let instalment = total / installment ;
            console.log(`Congratulations your monthly installment for the next ${installment} months is ${instalment}`);
        }
        else{
            console.log(` Sorry Your credit score of ${creditScore} is too low to be eligible for a bank loan`);
        }

    }   
}

module.exports = LoanCalculator;