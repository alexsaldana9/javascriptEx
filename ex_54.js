//54. Write a JavaScript program to count the number of vowels in a given string.


function countVowels(text) {

  var newArray = text.split('')

  var count  = 0;

  for (var i = 0; i < newArray.length; i++){

    if (newArray[i] == 'a' | newArray[i] == 'e' |newArray[i] == 'i' |newArray[i] ==  'o' |newArray[i] == 'u' )
    {
        count = count +1;
    }
  }

  return count

}

console.log(countVowels('aeiou'));
console.log(countVowels('abc'));
