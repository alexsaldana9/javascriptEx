//17. Write a JavaScript program to compute the 
//absolute difference between a specified number and 19. 
//Returns triple their absolute difference if the specified 
//number is greater than 19.  

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Please enter the first number : ', (answer1) => {
    
        var result = 0;
        var specifiedNum = 19;
        var myInt1 = parseInt(answer1); 

        if (myInt1 > specifiedNum){
			result = (myInt1 - 19) * 3;
			console.log("Same numbers = diff * 3= ", result);

		} else {

			result = (specifiedNum - myInt1);
			console.log("Difference =  ", result);
		}

        rl.close();

});