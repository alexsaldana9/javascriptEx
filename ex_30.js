// 30. Write a JavaScript program to check if a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.


function checkForScript (string) {

  if (string.length < 5 ){
    return string;
    console.log("string is too short");


  } else if (string.substring(0,6) == "Script")
  {
    console.log("contains the Script at the start")
    return string.slice(0,6);
  } else {
    console.log("does NOT start with string")
    return string;

  }
}



console.log(checkForScript("ho"));
console.log(checkForScript("Scriptforyou"));
