//47. Write a JavaScript program to check if a number in the range 40..10000 inclusive presents in two number (in same range).


function check(num){
  if (num >= 40 && num <= 10000){
    return true;
  } else {
    return false;
  }
}


console.log(check(150));
console.log(check(30));
console.log(check(10000));
