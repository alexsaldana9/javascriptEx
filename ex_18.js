//18. Write a JavaScript program to check two 
//given numbers and return true if one of the number 
//is 50 or if their sum is 50

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Please enter the first number : ', (answer1) => {
    rl.question('Please enter the second number : ', (answer2) => {
        var result = 0;
        var myInt1 = parseInt(answer1); 

        var myInt2 = parseInt(answer2);

        if (myInt1 == 50 || myInt2 == 50 || (myInt1 + myInt2) == 50){
			
			console.log("same num as 50");

		} else {

			console.log("not same num as 50");
		}

        rl.close();
    });
});