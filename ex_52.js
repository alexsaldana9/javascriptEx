//52. Write a JavaScript program to convert the letters of a given string in alphabetical order.

function convertAlphOrder(text) {

  var ar = text.split('').sort(); // empty string separator

  return ar;

}

console.log(convertAlphOrder('acdbwq'));
