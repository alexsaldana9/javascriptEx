//19. Write a JavaScript program to check a 
//given integer is within 20 of 100 or 400.


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Please enter the number : ', (num1) => {
    
        var result = 0;
        var myInt1 = parseInt(num1); 

       
        if (myInt1 > 20 && myInt1 < 100) {
			
			console.log("myInt1 is between 20 - 100");

		} else if (myInt1 > 100 && myInt1 < 400) {

			console.log("myInt1 is between 100 - 400");
		} else {

			console.log("My int is not in range");

		}


        rl.close();
});