//61. Write a JavaScript program to concatenate two strings except their first character.

function concatenate(str1, str2) {

  str1 = str1.substring(1, str1.length);
  str2 = str2.substring(1, str2.length);
  return str1 + str2;
}

console.log(concatenate('text', 'sample'));
