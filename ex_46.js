//46. Write a JavaScript program to check two given non-negative integers and if one of the number (not both) is multiple of 7 or 11.


function check(num1, num2){
  if (num1 % 7 == 0 || num2 % 7 == 0){
    return console.log("Is multiple of 7");
  } else if(num2 % 11 == 0 || num1 % 11 == 0){
    return console.log("Is multiple of 11");
  } else {
    return false;
  }
}


console.log(check(49,11));
console.log(check(50,12));

console.log(check(2,70));
