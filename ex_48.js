//48. Write a JavaScript program to reverse a given string.


function reverseString(text) {
  return text.split("").reverse().join("");
}

console.log(reverseString("HOLA"));
console.log(reverseString("leia"));
