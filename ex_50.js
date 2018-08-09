//50. Write a JavaScript program to capitalize the first letter of each word of a given string.


function capitalizeFirst (text) {

  return newString = text.charAt(0).toUpperCase() + text.slice(1);

}

console.log(capitalizeFirst("leia"));
console.log(capitalizeFirst("misu"));
