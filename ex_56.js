//56. Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas.


function dividePositive(num1, num2) {

  var result = num1 / num2;

  return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

}

console.log(dividePositive(10000,5));
