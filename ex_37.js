//37. Write a JavaScript program to create new string with first 3 characters are in lower case. If the string length is less than 3 convert all the characters in upper case.


function newString (text) {
  if (text.length < 3) {
    var newUppercase = text.toUpperCase();
    console.log("New string = ", newUppercase);
  } else {
      var newFirstThreeLetters = text.substring(0, 3).toUpperCase();
      // newFirstThreeLetters.toUpperCase();
      console.log("New string first three= ", newFirstThreeLetters);
  }
}

console.log(newString("leia"));
console.log(newString("So"));
