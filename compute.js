
//16. Write a JavaScript program to compute the sum of 
//the two given integers. If the two values are same, 
//then returns triple their sum.


// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// rl.question('Please enter the first number : ', (answer1) => {
//     rl.question('Please enter the second number : ', (answer2) => {
//         var result = 0;
//         var myInt1 = parseInt(answer1); 

//         var myInt2 = parseInt(answer2);

//         if (myInt1 == myInt2){
// 			result = (myInt1 + myInt2) * 3;
// 			console.log("Same numbers = sum * 3= ", result);

// 		} else {

// 			result = (myInt1 + myInt2)
// 			console.log("Sum =  ", result);
// 		}

//         rl.close();
//     });
// });



function sumTriple(myInt1, myInt2){

    var result = 0;

        if (myInt1 == myInt2){
            result = (myInt1 + myInt2) * 3;
            console.log("Same numbers = sum * 3= ", result);

        } else {

            result = (myInt1 + myInt2)
            console.log("Sum =  ", result);
        }

}


console.log(sumTriple(1,2));
