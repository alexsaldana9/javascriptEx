//22. Write a JavaScript program to remove a character at the
//specified position of a given string and return the new string


// function removeCharacter(s, postion){
//
//   s.slice(0,postion);
//
//   return s;
//
// }
//
// console.log(removeCharacter("dog", 1));
//
//

function removeCharacter(str, char_pos)
 {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);

  return part1;
 }

console.log(removeCharacter("Python",0));
console.log(removeCharacter("Python",3));
console.log(removeCharacter("Python",5));
