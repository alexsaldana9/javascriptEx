// 8. Write a JavaScript program where the program takes a 
// random integer between 1 to 10, the user is then 
// prompted to input a guess number. If the user input 
// matches with guess number, the program will display a 
// message "Good Work" otherwise display a message 
// "Not matched".

var readline = require('readline');


var rand_number = Math.floor(Math.random() * 10) + 1;
console.log(rand_number);

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number: ", function(answer) {
  // TODO: Log the answer in a database
  console.log("Thank your number entered: ", answer);

  if (answer == rand_number){
  	console.log("Good Work");
  } else{
  	console.log("no match");
  }

  rl.close();
});

