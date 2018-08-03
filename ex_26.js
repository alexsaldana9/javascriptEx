// 26. Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.


function newString(string)
{
    if (string.length < 3)
    {
      console.log("string is too short");
      return string;
    }
     else
    {
      s = string.substring(0,3);
      return s + string + s;
    }
}


console.log(newString("GoodBye"));
