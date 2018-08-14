//67. Write a JavaScript program to create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'. Return the original string if the condition is not satisfied.


function newString(text) {

  var newArray = text.split('');
  var lastLetter = text[text.length-1];

  if (newArray[0] == 'P' || lastLetter == 'P')
  {
    newArray.pop();
    newArray.shift();
    return newArray.join('');
  }

}

console.log(newString("PSAMPLE"));
