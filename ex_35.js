// 35. Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character


function contains2or4(string) {

  if (string.includes(2) || string.includes(4))
  {
    console.log("contains 2 or 4");
    return string;
  } else {
    console.log(string, " does not contain 2 or 4");
  }

}

console.log(contains2or4("string1"));
console.log(contains2or4("sti123string"));
