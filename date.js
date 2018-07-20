var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");

  var hour = today.getHours();
  console.log("Hour: ", hour);

  var minute = today.getMinutes();
  console.log("Minute: ", minute);

  var second = today.getSeconds();
  console.log("Second: ", second);

  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ')
    {
      if (minute===0 && second===0)
        {
          hour=12;
          prepand=' Noon';
        }
        else
      {
        hour=12;
        prepand=' PM';
      }
    }
    if (hour===0 && prepand===' AM ')
    {
        if (minute===0 && second===0)
      {
        hour=12;
        prepand=' Midnight';
      }
      else
      {
        hour=12;
        prepand=' AM';
      }
    }
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);


// var d = new Date(),
//     minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
//     hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
//     ampm = d.getHours() >= 12 ? 'pm' : 'am',
//     months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
//     days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
// return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
//
//
// console.log(Date(d));
