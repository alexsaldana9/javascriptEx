//49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

function replaceChar(text){
  var array = text.split("");

  for (var i =0; i <array.length ; i++){
    array[i] = String.fromCharCode(array[i].charCodeAt(0) + 1);

  }
  //return array.slice(",").join();
  var neArray = array.join();
  return neArray.replace(',', '');
}

console.log(replaceChar("abc"));
