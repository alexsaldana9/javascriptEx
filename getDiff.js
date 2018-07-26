//15. Write a JavaScript program to get the
// difference between a given number and 13, 
//if the number is greater than 13 return 
//double the absolute difference. 

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var result = 0;

rl.question('Enter number  ', (num) => {
  
   if (num > 13){

	result = (num - 13) *2;
	console.log("absolute difference: ", result);

} else {

	result  = 13 -num;
	console.log("num is less than 13: ", result);
}


  //console.log(`Thank you for your valuable feedback: ${num}`);

  rl.close();
});


// var num = prompt("Enter number: ");
// var result = 0;

// if (num > 13){

// 	result = (num - 13) *2;
// 	console.log("absolute difference: ", result);

// } else {

// 	result  = 13 -num;
// 	console.log("num is less than 13: ", result);
// }