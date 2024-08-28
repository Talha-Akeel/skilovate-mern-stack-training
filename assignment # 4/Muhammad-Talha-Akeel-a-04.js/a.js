const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const results = [];

function myCalculator() {
    r1.question("Enter 1st number : ", (num1) => {
        r1.question("Enter the operator (+,-,*,/) : ", (operator) => {
            r1.question("Enter 2nd number : ", (num2) => {
                if(operator === "+"){
                    results.push(parseFloat(num1) + parseFloat(num2));
                    // console.log(results);
                }else if(operator === "-"){
                    results.push(parseFloat(num1) - parseFloat(num2));
                    // console.log(results);
                }else if(operator === "*"){
                    results.push(parseFloat(num1) * parseFloat(num2));
                    // console.log(results);
                }else if(operator === "/"){
                    results.push(parseFloat(num1) / parseFloat(num2));
                    // console.log(results);
                }else{
                    console.log("Enter the correct operator");
                    myCalculator();
                }
                console.log("Results are here;");
                    for (let i = 0; i < results.length; i++) {
                        console.log(`${i+1}: ${results[i]}`);
                    }
                    const average = results.reduce((acc, currentValue) => acc + currentValue, 0) / results.length;
                    console.log(average);
                    myCalculator();
            });
        });
    });
}

myCalculator();