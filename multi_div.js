//10. Write a JavaScript program to 
//calculate multiplication and division of 
//two numbers (input from user)


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the first number : ', (answer1) => {
    rl.question('Please enter the second number : ', (answer2) => {
        var mult = (+answer1) * (+answer2);
        var div = (+answer1) / (+answer2);
        console.log(`The multiplication of above two numbers is ${mult}`);
        console.log(`The division of above two numbers is ${div}`);
        rl.close();
    });
});