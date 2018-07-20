// 6. Write a JavaScript program to determine whether a 
// given year is a leap year in the Gregorian calendar.  


function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

console.log(leapYear(2020));

